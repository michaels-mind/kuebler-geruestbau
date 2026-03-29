import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Wir erstellen einen Admin-Client direkt für diese Route
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Der Schlüssel, der RLS umgeht
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message, privacyConsent } = body;

    if (!name || !email || !phone || !project || !message || !privacyConsent) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    // 1. In Supabase speichern mit dem Admin-Client
    const { data: supabaseData, error: supabaseError } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          project_type: project,
          message,
          privacy_consent: privacyConsent,
          ip_address: ipAddress,
          user_agent: userAgent,
        },
      ])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Fehler beim Speichern in der Datenbank' },
        { status: 500 }
      );
    }

    // 2. E-Mail über Resend verschicken
    try {
      await resend.emails.send({
        from: 'Kübler Gerüstbau Website <anfrage@kuebler-geruestbau.de>',
        to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || 'info@kuebler-geruestbau.de',
        replyTo: email,
        subject: `Neue Gerüstbau-Anfrage von ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h2 style="color: #ea580c;">Neue Kundenanfrage</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Projektart:</strong> ${project}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <h3>Nachricht / Projektdetails:</h3>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `,
      });
    } catch (resendError) {
      console.error('Resend error:', resendError);
    }

    return NextResponse.json(
      { success: true, message: 'Anfrage erfolgreich verarbeitet', data: supabaseData },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}