import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 w-fit">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          {/* 1. Allgemeine Hinweise */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (insbesondere DSGVO und BDSG) sowie dieser Datenschutzerklärung.
            </p>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
            <div className="p-4 bg-gray-50 border-l-4 border-gray-200">
              <p className="font-bold text-gray-900">Kübler Gerüstbau</p>
              <p>Inhaber: Peter Kübler</p>
              <p>Stettiner Str. 34</p>
              <p>31582 Nienburg/Weser</p>
              <p>E-Mail: info@kuebler-geruestbau.de</p>
              <p>Telefon: +49 178 4475439</p>
            </div>
          </section>

          {/* 3. Erhebung und Speicherung */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, z. B. im Rahmen:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>einer Anfrage über das Kontaktformular</li>
              <li>einer Kontaktaufnahme per E-Mail oder Telefon</li>
              <li>einer Kontaktaufnahme über WhatsApp</li>
            </ul>
            <p className="mt-4 font-semibold">Erfasst werden können insbesondere:</p>
            <p>Name, Telefonnummer, E-Mail-Adresse sowie projektbezogene Angaben (z. B. Bauvorhaben, Adresse, Bilder).</p>
          </section>

          {/* 4. Zweck der Datenverarbeitung */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Zweck der Datenverarbeitung</h2>
            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Bearbeitung Ihrer Anfrage</li>
              <li>Angebotserstellung</li>
              <li>Durchführung vorvertraglicher Maßnahmen</li>
              <li>Kommunikation mit Ihnen</li>
            </ul>
          </section>

          {/* 5. Kontaktformular & Infrastruktur */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Kontaktformular & Datenspeicherung</h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage gespeichert.
            </p>
            <p className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 italic text-gray-800">
              <strong>Hinweis:</strong> Sie können uns ergänzende Unterlagen wie Skizzen, Bilder, Grundrisse oder Pläne zur besseren Einschätzung Ihres Bauvorhabens übermitteln.
            </p>
            <p className="mt-4">
              <strong>Technische Umsetzung:</strong> Wir nutzen für unsere Datenbank <strong>Supabase</strong> (Supabase Inc., USA). Mit dem Anbieter wurde ein Auftragsverarbeitungsvertrag geschlossen. Ihre Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* 6. WhatsApp */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Kontakt per WhatsApp</h2>
            <p>Bei der Kontaktaufnahme über WhatsApp (WhatsApp Ireland Ltd.) beachten Sie bitte:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Die Nutzung erfolgt auf eigene Verantwortung.</li>
              <li>Es gelten die Datenschutzbestimmungen von WhatsApp.</li>
              <li>Es kann nicht ausgeschlossen werden, dass Daten an Server außerhalb der EU (USA) übertragen werden.</li>
            </ul>
            <p className="mt-2">Wir verwenden WhatsApp ausschließlich zur schnellen Kommunikation und Bearbeitung Ihrer Anfrage.</p>
          </section>

          {/* 7. Umgang mit Bildern */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Umgang mit Bildern und Unterlagen</h2>
            <p>Wenn Sie uns Bilder, Pläne oder Dokumente (z. B. Grundrisse, Skizzen) zur Verfügung stellen:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>werden diese ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</li>
              <li>erfolgt keine Weitergabe an Dritte (außer es ist zur Auftragsabwicklung zwingend erforderlich).</li>
              <li>werden diese nach Abschluss des Vorgangs gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
            </ul>
          </section>

          {/* 8. Weitergabe von Daten */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Weitergabe von Daten</h2>
            <p>Eine Weitergabe Ihrer Daten erfolgt nur:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>wenn dies zur Vertragserfüllung erforderlich ist.</li>
              <li>wenn eine gesetzliche Verpflichtung besteht.</li>
              <li>oder Sie ausdrücklich eingewilligt haben.</li>
            </ul>
          </section>

          {/* 9. Hosting & Server-Logfiles */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Hosting und Server-Logfiles</h2>
            <p>
              Unsere Website wird bei <strong>Vercel</strong> (Vercel Inc.) gehostet. Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt:
            </p>
            <ul className="list-disc ml-5 mt-2 text-xs md:text-sm text-gray-600">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage und IP-Adresse</li>
            </ul>
            <p className="mt-2">Diese Daten sind nicht bestimmten Personen zuordenbar. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          {/* 10. Sicherheit */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
            </p>
          </section>

          {/* 11. Ihre Rechte */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Auskunft:</strong> Über Ihre gespeicherten Daten (Art. 15 DSGVO).</li>
              <li><strong>Berichtigung:</strong> Unrichtiger Daten (Art. 16 DSGVO).</li>
              <li><strong>Löschung:</strong> Ihrer Daten, sofern zulässig (Art. 17 DSGVO).</li>
              <li><strong>Einschränkung:</strong> Der Verarbeitung (Art. 18 DSGVO).</li>
              <li><strong>Widerspruch:</strong> Gegen die Verarbeitung (Art. 21 DSGVO).</li>
            </ul>
            <p className="mt-4">Hierzu können Sie sich jederzeit unter den in Punkt 2 genannten Kontaktdaten an uns wenden.</p>
          </section>

          {/* 12. Änderungen */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">12. Änderung dieser Datenschutzerklärung</h2>
            <p className="text-sm">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen oder technische Änderungen anzupassen.
            </p>
            <p className="text-xs text-gray-500 italic mt-4">Stand: März 2026</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}