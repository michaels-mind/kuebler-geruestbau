"use client";

const services = [
  {
    title: "Fassadengerüste",
    desc: "Sichere Gerüste für Neubau, Sanierung oder Renovierung von Wohn- und Gewerbegebäuden",
  },
  {
    title: "Schutzgerüste",
    desc: "Dienen dem Schutz von Personen und Umgebung vor herabfallenden Teilen und anderen Gefahren",
  },
  {
    title: "Treppentürme",
    desc: "Ermöglichen einen sicheren und komfortablen Zugang zu höheren Arbeitsbereichen",
  },
  {
    title: "Fahr- & Rollgerüste",
    desc: "Flexible, mobile Gerüste für Innen- oder kleinere Außenarbeiten – schnell aufgebaut und leicht verschiebbar",
  },
  {
    title: "Industriegerüste",
    desc: "Robuste Gerüstlösungen für Industrieanlagen, Hallen und komplexe Bauprojekte mit hohen Anforderungen",
  },
  {
    title: "Sondergerüste",
    desc: "Individuell geplante Gerüste für besondere Bauformen oder außergewöhnliche Projekte – maßgeschneidert und sicher",
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
            {/* Orangener Akzentbalken oben */}
            <div className="w-10 h-1 bg-orange-600 rounded-full mb-5 group-hover:w-16 transition-all duration-300" />
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}