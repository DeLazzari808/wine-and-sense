import React from 'react';

// Novo componente para os cards dos 4 pilares da experiência
export default function PillarCard({ logos, icon, title, description, partners }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-500 flex flex-col text-center items-center hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group">
      <div className="flex justify-center items-center gap-6 mb-6">
        {logos && logos.length > 0 ? (
          logos.map((logo, idx) => (
            <img
              key={logo}
              src={logo}
              alt={title + ' logo'}
              className="h-20 w-auto object-contain rounded-md shadow-sm bg-white transition-all duration-500 grayscale group-hover:grayscale-0"
              style={{ maxWidth: 96 }}
            />
          ))
        ) : icon ? (
          <div className="bg-brand-pink text-white rounded-full p-4 flex items-center justify-center">
            {React.createElement(icon, { size: 32, strokeWidth: 1.5 })}
          </div>
        ) : null}
      </div>
      <h3 className="font-sans text-3xl font-bold text-brand-purple mb-4">{title}</h3>
      <p className="font-sans text-text-gray mb-4 flex-grow font-light">{description}</p>
      <p className="font-sans font-bold text-brand-purple">{partners}</p>
    </div>
  );
} 