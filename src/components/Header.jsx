import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ scrollTo, paymentLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Momentos", id: "galeria" },
    { label: "Parceiros", id: "parceiros" },
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src="/assets/logos/wine-sense-logo-main.png" alt="Wine & Sense Logo" className="h-28 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className="font-sans text-dark-gray hover:text-brand-purple transition-colors">
                {link.label}
              </button>
            ))}
            <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white font-bold py-2 px-6 rounded-full text-sm hover:bg-brand-pink transition-colors duration-300 shadow-grow-on-hover">
              RESERVAR
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-gray">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="font-sans text-dark-gray text-2xl hover:text-brand-purple transition-colors">
              {link.label}
            </button>
          ))}
          <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg mt-8">
            GARANTIR MINHA VAGA
          </a>
        </div>
      </div>
    </>
  );
} 