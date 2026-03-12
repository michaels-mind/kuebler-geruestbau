const services = [
  {
    title: "Fassadengerüste",
    desc: "Sichere Gerüste für Neubau, Sanierung oder Renovierung von Wohn- und Gewerbegebäuden",
    points: ["Neubau & Sanierung", "Wohn- & Gewerbebau", "TÜV-zertifiziert"],
  },
  {
    title: "Dachfanggerüste",
    desc: "Schutzgerüst an Dachkanten für maximale Sicherheit bei Arbeiten in der Höhe",
    points: ["Dachkantenschutz", "Norm-gerecht", "Schnelle Montage"],
  },
  {
    title: "Schutz- & Passantengerüste",
    desc: "Gerüste, die Arbeiter und Passanten vor herabfallenden Materialien zuverlässig schützen",
    points: ["Personenschutz", "Innenstadttauglich", "Vollständig versichert"],
  },
  {
    title: "Fahr- & Rollgerüste",
    desc: "Flexible, mobile Gerüste für Innen- oder kleinere Außenarbeiten – schnell aufgebaut und leicht verschiebbar",
    points: ["Mobil & flexibel", "Innen & Außen", "Schneller Aufbau"],
  },
  {
    title: "Industriegerüste",
    desc: "Robuste Gerüstlösungen für Industrieanlagen, Hallen und komplexe Bauprojekte mit hohen Anforderungen",
    points: ["Schwerlasttauglich", "Industrieanlagen", "Komplexe Projekte"],
  },
  {
    title: "Sonder- & Modulgerüste",
    desc: "Individuell geplante Gerüste für besondere Bauformen oder außergewöhnliche Projekte – maßgeschneidert und sicher",
    points: ["Maßgeschneidert", "Sonderbauformen", "Individuelle Planung"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Professionelle Gerüstlösungen für jeden Projekttyp und jede Anforderung
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Orangener Akzentbalken oben statt Icon */}
            <div className="w-10 h-1 bg-orange-600 rounded-full mb-5 group-hover:w-16 transition-all duration-300" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-6">{service.desc}</p>
            <ul className="space-y-2">
              {service.points.map((point, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
