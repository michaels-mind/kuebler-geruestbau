import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 md:mb-10">

          {/* Logo */}
          <a href="#">
            <Image
              src="/logo_footer.svg"
              alt="Kübler Gerüstbau"
              width={140}
              height={42}
              className="object-contain"
            />
          </a>

          {/* Nav-Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <a href="#about" className="hover:text-orange-500 transition duration-300">Über Uns</a>
            <a href="#services" className="hover:text-orange-500 transition duration-300">Leistungen</a>
            <a href="#gallery" className="hover:text-orange-500 transition duration-300">Projekte</a>
            <a href="#contact" className="hover:text-orange-500 transition duration-300">Kontakt</a>
          </nav>

          {/* Rechtliches */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-orange-500 transition duration-300">Datenschutz</a>
            <a href="#impressum" className="hover:text-orange-500 transition duration-300">Impressum</a>
            <a href="#agb" className="hover:text-orange-500 transition duration-300">AGB</a>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Kübler Gerüstbau. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
