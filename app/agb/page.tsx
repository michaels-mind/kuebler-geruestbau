import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 w-fit">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Geltungsbereich</h2>
            <p>
              1.1 Für alle Verträge, Lieferungen und Leistungen der Firma Kübler Gerüstbau gelten ausschließlich diese Allgemeinen Geschäftsbedingungen, soweit nicht ausdrücklich schriftlich etwas anderes vereinbart wurde.<br />
              1.2 Entgegenstehende oder abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.<br />
              1.3 Grundlage der Leistungen sind ergänzend die Vorschriften der VOB/B sowie die einschlägigen DIN-Normen (insbesondere DIN 18451) in ihrer jeweils gültigen Fassung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Vertragsschluss</h2>
            <p>
              2.1 Unsere Angebote sind freibleibend und unverbindlich.<br />
              2.2 Ein Vertrag kommt erst mit schriftlicher Auftragsbestätigung oder durch Beginn der Ausführung zustande.<br />
              2.3 Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Leistungsumfang & Nutzung</h2>
            <p>
              3.1 Der Leistungsumfang ergibt sich aus der Auftragsbestätigung. Zusatzleistungen, insbesondere Sonderkonstruktionen, Schutzmaßnahmen oder Umbauten, werden gesondert berechnet.<br />
              3.2 Eine Weitervermietung oder Überlassung des Gerüstes an Dritte ist ohne schriftliche Zustimmung unzulässig.
            </p>
            <p className="bg-orange-50 p-4 border-l-4 border-orange-500 italic mt-4">
              <strong>Wichtiger Sicherheitshinweis:</strong> Eigenmächtige Veränderungen am Gerüst durch den Auftraggeber oder Dritte sind streng untersagt. Hierzu zählt insbesondere das Entfernen von Verankerungen, Geländern oder Bordbrettern.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Termine und Ausführung</h2>
            <p>
              4.1 Ausführungsfristen sind nur verbindlich, wenn sie ausdrücklich schriftlich zugesagt wurden.<br />
              4.2 Verzögerungen aufgrund höherer Gewalt oder unvorhersehbarer Ereignisse (z. B. extreme Witterung, Streik, behördliche Anordnungen) verlängern die Ausführungsfristen angemessen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Mitwirkungspflichten des Auftraggebers</h2>
            <p>
              Der Auftraggeber hat auf seine Kosten alle notwendigen Genehmigungen (z.B. Straßensperrungen) rechtzeitig einzuholen. Er stellt die notwendige Baufreiheit sowie einen tragfähigen, ebenen Untergrund für die Standflächen sicher.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">6. Abnahme und Obhutspflicht</h2>
            <p>
              6.1 Die Abnahme erfolgt unmittelbar nach Fertigstellung des Aufbaus. Die Inbetriebnahme des Gerüsts durch den Auftraggeber oder dessen Nachunternehmer gilt als erfolgte Abnahme.<br />
              6.2 Mit der Abnahme geht die Verkehrssicherungspflicht sowie die Obhutspflicht auf den Auftraggeber über.<br />
              6.3 Der Auftraggeber haftet für Schäden, Verlust oder Diebstahl des Materials während der Nutzungsdauer, soweit diese nicht vom Auftragnehmer zu vertreten sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">7. Vorhaltezeit und Abrechnung</h2>
            <p>
              7.1 Sofern nicht anders vereinbart, ist eine Vorhaltezeit von 4 Wochen im Pauschalpreis enthalten. Danach wird eine zusätzliche Vergütung gemäß aktueller Preisliste berechnet.<br />
              7.2 Die Vorhaltezeit endet erst mit schriftlicher Freimeldung (Abmeldebestätigung) durch den Auftraggeber.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">8. Zahlungsbedingungen</h2>
            <p>
              8.1 Rechnungen sind innerhalb der vereinbarten Frist ohne Abzug zu zahlen. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen.<br />
              8.2 Bei erheblichem Zahlungsverzug ist der Auftragnehmer nach Vorankündigung berechtigt, Leistungen einzustellen und das Gerüst auf Kosten des Auftraggebers abzubauen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">9. Haftungsbeschränkung</h2>
            <p>
              9.1 Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung von Leben, Körper oder Gesundheit.<br />
              9.2 Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder grober Fahrlässigkeit. Bei einfacher Fahrlässigkeit wird nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) gehaftet, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">10. Mängelansprüche</h2>
            <p>
              Offensichtliche Mängel sind unverzüglich, spätestens jedoch innerhalb von 3 Werktagen nach Aufbau oder Entdeckung schriftlich anzuzeigen, um eine Nachbesserung zu ermöglichen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">11. Schlussbestimmungen</h2>
            <p>
              11.1 Es gilt das Recht der Bundesrepublik Deutschland.<br />
              11.2 Gerichtsstand für Kaufleute ist der Sitz unseres Unternehmens.<br />
              11.3 Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt (Salvatorische Klausel).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}