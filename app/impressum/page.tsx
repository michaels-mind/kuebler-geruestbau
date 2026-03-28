import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 w-fit">
          Impressum
        </h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Angaben gemäß § 5 DDG</h2>
            <p>Peter Kübler<br />Kübler Gerüstbau<br />Stettiner Str. 34<br />31582 Nienburg/Weser</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h2>
            <p>Telefon: 05021 897644<br />Telefax: 05021 897645<br />E-Mail: info@kuebler-geruestbau.de</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Berufsbezeichnung und Aufsichtsbehörde</h2>
            <p>Berufsbezeichnung: Gerüstbauer (verliehen in der Bundesrepublik Deutschland)<br />
            Zuständige Kammer: Handwerkskammer Hannover, Berliner Allee 17, 30175 Hannover</p>
            <p className="mt-2">Eingetragen in die Handwerksrolle. Es gelten die berufsrechtlichen Regelungen der Handwerksordnung (HwO).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Verbraucherstreitbeilegung</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}