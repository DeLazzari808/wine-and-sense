import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Este é o componente de Header profissional e funcional.
export default function Header({ scrollTo, paymentLink }) {
  // Estado para controlar se o menu mobile está aberto ou fechado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar se o utilizador já rolou a página.
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito que adiciona um ouvinte de scroll na janela.
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 50px, muda o estado para true.
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Limpa o ouvinte quando o componente é desmontado para evitar leaks de memória.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Galeria", id: "galeria" },
    { label: "Parceiros", id: "parceiros" },
  ];

  // Função para fechar o menu mobile ao clicar num link.
  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      {/* O header agora muda de cor com base no estado 'isScrolled' */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* Logo principal */}
            <img src="/assets/logos/wine-sense-logo-main.png" alt="Wine & Sense Logo" className="h-20 w-auto max-w-[220px]" />
          </div>

          {/* Menu para Desktop: agora visível por padrão */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className="font-body-sans text-dark-gray hover:text-brand-purple transition-colors">
                {link.label}
              </button>
            ))}
            <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white font-bold py-2 px-6 rounded-full text-sm hover:bg-brand-pink transition-colors duration-300">
              RESERVAR
            </a>
          </div>

          {/* Botão do Menu para Mobile (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-gray">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Lateral para Mobile (Drawer) */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="font-body-sans text-dark-gray text-2xl hover:text-brand-purple transition-colors">
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