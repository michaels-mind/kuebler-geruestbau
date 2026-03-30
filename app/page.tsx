import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Kübler Gerüstbau",
    "image": "https://www.kuebler-geruestbau.de/logo_header.svg",
    "@id": "https://www.kuebler-geruestbau.de",
    "url": "https://www.kuebler-geruestbau.de",
    "telephone": "+495021897644",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stettiner Str. 34",
      "addressLocality": "Nienburg/Weser",
      "postalCode": "31582",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.6457,
      "longitude": 9.2292
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "17:00"
    },
    "description": "Ihr Partner für sichere Gerüstlösungen in Nienburg & Umgebung. Über 20 Jahre Erfahrung.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+491784475439",
      "contactType": "mobile"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}