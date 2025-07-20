import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

// Este é um componente "Wrapper" que aplica a animação de fade-in
// a qualquer seção que for envolvida por ele.
// A linha chave é "export default"
export default function AnimatedSection({ children, id, className = '' }) {
  const ref = useFadeIn();
  return (
    <section ref={ref} id={id} className={`fade-in-section ${className}`}>
      {children}
    </section>
  );
}; 