"use client";

import { useState } from "react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // WICHTIG: Referenz zum Formular sichern, bevor await aufgerufen wird
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project: formData.get("project"),
      message: formData.get("message"),
      privacyConsent: formData.get("privacy-consent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");
        form.reset(); // Nutzt die sichere Referenz
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        alert("Fehler beim Senden der Anfrage (Server-Fehler)");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Fehler beim Senden der Anfrage (Netzwerk-Fehler)");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 border-t-2 border-orange-600"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kontaktieren Sie Uns
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Bitte senden Sie uns - wenn möglich - ergänzende Unterlagen wie Skizzen, Fotos, Grundrisse, Ansichten oder Schnitte per E-Mail oder WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Kontakt-Info */}
          <div className="flex flex-col gap-4">

            {/* Telefon (Mobil) */}
            <a
              href="tel:+491784475439"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-orange-600 hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Mobil</div>
                <div className="text-white font-bold text-lg group-hover:text-orange-400 transition duration-300">
                  +49 178 4475439
                </div>
              </div>
            </a>

            {/* Festnetz */}
            <a
              href="tel:+495021897644"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-orange-600 hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Festnetz</div>
                <div className="text-white font-bold text-lg group-hover:text-orange-400 transition duration-300">
                  05021 897644
                </div>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href="mailto:info@kuebler-geruestbau.de"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-orange-600 hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center">
                <MailIcon />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">E-Mail</div>
                <div className="text-white font-bold text-lg group-hover:text-orange-400 transition duration-300">
                  info@kuebler-geruestbau.de
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/491784475439?text=Hallo%20K%C3%BCbler%20Ger%C3%BCstbau%2C%20ich%20h%C3%A4tte%20gerne%20ein%20Angebot."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-green-500 hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <WhatsAppIcon />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">WhatsApp</div>
                <div className="text-white font-bold text-lg group-hover:text-green-400 transition duration-300">
                  Jetzt direkt schreiben
                </div>
              </div>
            </a>

            {/* Adresse */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-700/50 bg-transparent mt-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                <LocationIcon />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">
                  Büro – nur nach Vereinbarung
                </div>
                <div className="text-gray-400 text-sm">
                  Kübler Gerüstbau · Stettiner Straße 34 · 31582 Nienburg/Weser
                </div>
              </div>
            </div>
          </div>

          {/* Formular */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {successMessage && (
              <div className="bg-green-600 text-white p-4 rounded-lg text-sm font-medium">
                ✓ {successMessage}
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Vollständiger Name"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail Adresse"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 transition duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 transition duration-300"
            />
            <input
              type="text"
              name="project"
              placeholder="Projektart (z.B. Malergerüst, Dachdeckergerüst, PV-Anlage usw.)"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 transition duration-300"
            />
            <textarea
              name="message"
              placeholder="Kurze Beschreibung Ihres Projekts... (Adresse, gewünschter Zeitraum, Besonderheiten)"
              required
              rows={4}
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 transition duration-300 resize-none"
            />
            <label className="flex items-start gap-3 text-gray-300 text-sm">
              <input
                type="checkbox"
                name="privacy-consent"
                required
                className="w-5 h-5 mt-1 accent-orange-600 flex-shrink-0"
              />
              <span>
                Ich akzeptiere die{" "}
                <a href="#privacy" className="text-orange-400 hover:text-orange-300 underline">
                  Datenschutzerklärung
                </a>{" "}
                und die Verarbeitung meiner Daten
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-600/30"
            >
              {isSubmitting ? "⏳ Wird gesendet..." : "📧 Anfrage Senden"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}