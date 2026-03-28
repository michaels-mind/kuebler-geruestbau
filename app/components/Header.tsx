"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#gallery", label: "Projekte" },
  { href: "#about", label: "Über Uns" },
  { href: "#contact", label: "Kontakt" },
];

const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo_header.svg"
            alt="Kübler Gerüstbau"
            width={160}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-900 hover:text-orange-600 transition duration-300 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button Desktop */}
        <a
          href="https://wa.me/491784475439?text=Hallo%20K%C3%BCbler%20Ger%C3%BCstbau%2C%20ich%20h%C3%A4tte%20gerne%20ein%20Angebot%20f%C3%BCr%20ein%20Ger%C3%BCst."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-transparent border-2 border-orange-500 hover:bg-orange-500/10 text-gray-900 px-5 py-2.5 rounded-xl font-semibold transition duration-300"
        >
          <WhatsAppIcon className="w-5 h-5 fill-orange-500 flex-shrink-0" />
          WhatsApp Anfrage
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 hover:text-orange-600 font-semibold transition duration-300 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/491784475439?text=Hallo%20K%C3%BCbler%20Ger%C3%BCstbau%2C%20ich%20h%C3%A4tte%20gerne%20ein%20Angebot%20f%C3%BCr%20ein%20Ger%C3%BCst."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-orange-500 hover:bg-orange-500/10 text-gray-900 px-5 py-2.5 rounded-xl font-semibold transition duration-300 w-fit"
          >
            <WhatsAppIcon className="w-5 h-5 fill-orange-500 flex-shrink-0" />
            WhatsApp Anfrage
          </a>
        </div>
      )}
    </header>
  );
}