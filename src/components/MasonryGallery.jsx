import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function MasonryGallery({ images }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div key={idx} className="break-inside-avoid">
            <img
              src={src}
              alt={`Galeria Wine & Sense ${idx + 1}`}
              className="rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer w-full"
              onClick={() => setIndex(idx)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(src => ({ src }))}
      />
    </>
  );
} 