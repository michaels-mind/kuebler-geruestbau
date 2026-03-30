import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '10 m'),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const { success, reset } = await ratelimit.limit(ip);
  if (!success) {
    const retryAfter = Math.ceil((reset - Date.now()) / 1000);
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte warten Sie einige Minuten.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, project, message, privacyConsent } = body;

    // Existenz prüfen
    if (!name || !email || !phone || !project || !message || !privacyConsent) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich.' },
        { status: 400 }
      );
    }

    // Typen prüfen
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof phone !== 'string' ||
      typeof project !== 'string' ||
      typeof message !== 'string' ||
      typeof privacyConsent !== 'boolean'
    ) {
      return NextResponse.json(
        { error: 'Ungültige Eingabe.' },
        { status: 400 }
      );
    }

    // Format prüfen
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    // Längen begrenzen
    if (name.length > 100 || project.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Ein Feld überschreitet die maximale Länge.' },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get('user-agent') ?? '';

    // 1. Supabase speichern
    const { error: supabaseError } = await supabaseAdmin
      .from('contact_submissions')
      .insert([{
        name,
        email,
        phone,
        project_type: project,
        message,
        privacy_consent: privacyConsent,
        ip_address: ip,
        user_agent: userAgent,
      }]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Fehler beim Speichern. Bitte versuchen Sie es erneut.' },
        { status: 500 }
      );
    }

    // 2. E-Mail via Resend (escaped)
    const { error: resendError } = await resend.emails.send({
      from: 'Kübler Gerüstbau <anfrage@kuebler-geruestbau.de>',
      to: process.env.RECEIVER_EMAIL ?? 'info@kuebler-geruestbau.de',
      replyTo: email,
      subject: `Neue Anfrage von ${escapeHtml(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #ea580c;">Neue Kundenanfrage</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Projektart:</strong> ${escapeHtml(project)}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <h3>Nachricht:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (resendError) {
      console.error('Resend error (Daten in Supabase gespeichert):', resendError);
    }

    return NextResponse.json(
      { success: true, message: 'Anfrage erfolgreich verarbeitet.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler.' },
      { status: 500 }
    );
  }
}