const reasons = [
  {
    title: "Kompetente Beratung",
    desc: "Von der Planung bis zur Demontage - individuelle Lösungen für jedes Projekt.",
  },
  {
    title: "Sichere Systeme",
    desc: "Regelmäßig geprüft und nach aktuellen Sicherheitsstandards umgesetzt.",
  },
  {
    title: "Flexible Lösungen",
    desc: "Für alle Anforderungen, Bauformen und Projektgrößen maßgeschneidert.",
  },
  {
    title: "Termingerechte Umsetzung",
    desc: "Schnelle, zuverlässige Montage und Demontage - pünktlich und effizient.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 border border-orange-300 rounded-full">
              <span className="text-orange-900 text-sm font-semibold">Über unser Unternehmen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Ihr zuverlässiger Partner für Gerüstbau
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
              Mit über 20 Jahren Erfahrung in der Gerüstbranche kennen wir die besonderen Anforderungen jedes Bauprojekts. Wir bieten nicht nur hochwertige Gerüste, sondern maßgeschneiderte Lösungen für alle Einsatzbereiche – sicher, effizient und termingerecht.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Wir kümmern uns um alles – von der Planung bis zur Montage und Abnahme. Dabei legen wir sehr großen Wert auf Sicherheit, Qualität und eine reibungslose Projektabwicklung, damit Sie sich auf die wesentlichen Dinge konzentrieren können.
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-orange-600/30"
            >
              Kostenlose Beratung
            </a>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Warum Kübler Gerüstbau?
            </h3>
            <div className="space-y-3 md:space-y-4">
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-600 hover:bg-orange-50/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-orange-600">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
