import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Novo componente de galeria com efeito "Cover Flow"
export default function CoverFlowGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-96 flex flex-col items-center justify-center overflow-hidden">
      {/* Container para as imagens com efeito de perspectiva */}
      <div className="relative w-full h-full coverflow-container">
        {images.map((src, index) => {
          const offset = index - currentIndex;
          const isCurrent = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;

          // Define o estilo com base na posição
          const style = {
            transform: `translateX(${offset * 40}%) scale(${isCurrent ? 1 : 0.7}) rotateY(${offset * -30}deg)`,
            opacity: isCurrent ? 1 : 0.4,
            zIndex: images.length - Math.abs(offset),
            filter: isCurrent ? 'blur(0px)' : 'blur(2px)',
          };

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out coverflow-item"
              style={style}
            >
              <img
                src={src}
                alt={`Galeria Wine & Sense ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/80 text-dark-gray rounded-full p-2 shadow-lg transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/80 text-dark-gray rounded-full p-2 shadow-lg transition-all"
        aria-label="Próxima"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
} 