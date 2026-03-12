"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, title: "Wohnkomplex Bremen", region: "Bremen", src: "/images/scaffolding-residential-project.webp" },
  { id: 2, title: "Industrieanlage Hannover", region: "Hannover", src: "/images/scaffolding-industrial-site.webp" },
  { id: 3, title: "Fassadenerneuerung Nienburg", region: "Nienburg", src: "/images/scaffolding-facade-renovation.webp" },
  { id: 4, title: "Hochbauprojekt Hildesheim", region: "Hildesheim", src: "/images/scaffolding-bridge-project.webp" },
  { id: 5, title: "Sanierung Hamburg", region: "Hamburg", src: "/images/scaffolding-church-renovation.webp" },
  { id: 6, title: "Umbau Osnabrück", region: "Osnabrück", src: "/images/scaffolding-urban-development.webp" },
];

const regions = ["Nienburg", "Hannover", "Bremen", "Hildesheim", "Hamburg", "Osnabrück"];

export default function GallerySection() {
  const [selectedRegion, setSelectedRegion] = useState("alle");

  const filteredGallery =
    selectedRegion === "alle"
      ? galleryImages
      : galleryImages.filter((img) => img.region === selectedRegion);

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Projektgalerie</h2>
          <p className="text-lg md:text-xl text-gray-600">Erfolgreiche Gerüstlösungen in Ihrer Region</p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
          <button
            onClick={() => setSelectedRegion("alle")}
            className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition duration-300 text-sm md:text-base ${
              selectedRegion === "alle"
                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                : "bg-white border border-gray-300 text-gray-900 hover:border-orange-600"
            }`}
          >
            Alle Regionen
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition duration-300 text-sm md:text-base ${
                selectedRegion === region
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                  : "bg-white border border-gray-300 text-gray-900 hover:border-orange-600"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredGallery.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-4 md:p-6 text-white w-full">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.region}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
