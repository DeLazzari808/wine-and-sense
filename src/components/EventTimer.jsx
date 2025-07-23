import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const EVENT_DATE = "2025-08-14T19:00:00";

export default function EventTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date(EVENT_DATE) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft);

  return (
    <AnimatedSection id="timer" className="py-16 bg-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-sans text-3xl font-light text-brand-purple mb-4">Uma experiência única com vagas limitadas</h3>
        <div className="flex justify-center gap-4 md:gap-8 my-6">
          {timerComponents.length ? (
            timerComponents.map(([interval, value]) => (
              <div key={interval} className="text-center w-24">
                <span className="text-4xl md:text-5xl font-bold text-brand-purple tracking-wider">{String(value).padStart(2, '0')}</span>
                <span className="block text-sm text-text-gray uppercase pt-1">{interval}</span>
              </div>
            ))
          ) : (
            <span className="text-2xl font-bold text-brand-pink">As inscrições estão encerradas!</span>
          )}
        </div>
        <p className="font-sans text-lg font-light text-text-gray max-w-2xl mx-auto">A última edição esgotou rapidamente. Não perca a chance de despertar seus sentidos.</p>
      </div>
    </AnimatedSection>
  );
} 