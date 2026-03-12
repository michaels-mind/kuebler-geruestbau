import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden h-[calc(100vh-73px)]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <div className="absolute right-0 bottom-0 w-[50vw] h-full pointer-events-none hidden lg:block">
        <Image
          src="/hero-scaffolding.svg"
          alt="Arbeiter auf einem Gerüst"
          fill
          className="object-contain object-right-bottom drop-shadow-2xl"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative z-10">
        <div className="w-full lg:w-1/2 py-12 lg:py-0">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-600/20 border border-orange-600/40 rounded-full">
            <span className="text-orange-300 text-sm font-semibold">
              Über 20 Jahre Erfahrung im Gerüstbau
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ihr Partner für sichere Gerüstlösungen
            <span className="block text-orange-500">in Nienburg & Umgebung</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Planung und Montage von Gerüsten für Wohn-, Industrie- und Sonderbauten – fachgerecht geplant und termingerecht umgesetzt.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-600/30"
            >
              Jetzt Angebot anfordern
            </a>
            <a
              href="https://wa.me/491234567890?text=Hallo%20K%C3%BCbler%20Ger%C3%BCstbau%2C%20ich%20h%C3%A4tte%20gerne%20ein%20Angebot%20f%C3%BCr%20ein%20Ger%C3%BCst."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-orange-600 text-white hover:bg-orange-600/10 px-7 py-3.5 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Anfrage
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>✓ unverbindlich</span>
            <span>✓ zeitnah</span>
            <span>✓ individuell</span>
          </div>
        </div>
      </div>
    </section>
  );
}
