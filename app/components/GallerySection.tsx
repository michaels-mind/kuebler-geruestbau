"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, title: "Gerüstbau Projekt 1", src: "/images/geruest_01.webp" },
  { id: 2, title: "Gerüstbau Projekt 2", src: "/images/geruest_02.webp" },
  { id: 3, title: "Gerüstbau Projekt 3", src: "/images/geruest_03.webp" },
  { id: 4, title: "Gerüstbau Projekt 4", src: "/images/geruest_04.webp" },
  { id: 5, title: "Gerüstbau Projekt 5", src: "/images/geruest_05.webp" },
  { id: 6, title: "Gerüstbau Projekt 6", src: "/images/geruest_06.webp" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Projektgalerie</h2>
          <p className="text-lg md:text-xl text-gray-600">Erfolgreiche Gerüstlösungen für jedes Projekt</p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-6 md:mb-8 bg-gray-200"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-500 text-4xl p-2 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Schließen"
          >
            &times;
          </button>
          
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}