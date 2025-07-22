import React from 'react';
import { MapPin, Clock, Calendar, Phone, Mail, ExternalLink, CheckCircle } from 'lucide-react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import CoverFlowGallery from './components/CoverFlowGallery';
import { useState, useRef, useEffect } from 'react';

// --- CONFIGURATION ---
const CONFIG = {
  paymentLink: "https://www.tagme.com.br/seu-evento-aqui", 
  eventDetails: {
    title: "Wine & Sense no Mondo Pane",
    date: "14 de Agosto",
    time: "19h às 22h",
    location: "Mondo Pane, Al. Lorena, 473, Jardins",
    price: "R$ 320,00",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.431533890186!2d-46.6622368849238!3d-23.553091367147893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583435881e6b%3A0x47f6455cda77651!2sMondo%20Pane!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
  },
  partners: [
    { name: "Serafina", logo: "/assets/logos/serafina-logo.png", description: "Restaurante italiano tradicional, referência em massas frescas e ambiente acolhedor.", site: "https://serafinabrasil.com.br", instagram: "https://instagram.com/serafinabrasil" },
    { name: "Wineyes", logo: "/assets/logos/wineyes-logo.png", description: "Importadora e curadora de vinhos especiais, trazendo rótulos exclusivos para o Brasil.", site: "https://wineyes.com.br", instagram: "https://instagram.com/wineyesvinhos" },
    { name: "Sagrado Savon", logo: "/assets/logos/ssavon-logo.jpg", description: "Marca de cosméticos artesanais, focada em experiências sensoriais e aromas únicos.", site: "https://sagradosavon.com.br", instagram: "https://instagram.com/sagradosavon" },
    { name: "Mondo Pane", logo: "/assets/logos/mondopane-logo.png", description: "Padaria artesanal e cafeteria, referência em pães de fermentação natural.", site: "https://mondopane.com.br", instagram: "https://instagram.com/mondopane" },
  ],
  galleryImages: [
    "/assets/images/gallery-1.jpg",
    "/assets/images/gallery-2.jpg",
    "/assets/images/gallery-3.jpg",
    "/assets/images/gallery-4.jpg",
    "/assets/images/gallery-5.jpg",
    "/assets/images/gallery-6.jpg",
    "/assets/images/gallery-7.jpg",
    "/assets/images/gallery-8.jpg",
    "/assets/images/gallery-9.jpg",
    "/assets/images/gallery-10.jpg",
    "/assets/images/gallery-11.jpg",
  ],
  includedItems: [
    "Oficina de pintura em taça com orientação artística",
    "Sua taça personalizada para levar pra casa",
    "Vinho servido a vontade durante o evento",
    "Comidinhas: tábua de antepastos, prato principal e sobremesa",
    "Ambientação sensorial com fragrância exclusiva",
    "Um presente especial ao final ✨",
  ],
  contact: {
    phone: "(11) 99999-9999",
    email: "wineesense@gmail.com",
    instagram: "https://www.instagram.com/wineesense",
  }
};

// CORREÇÃO 2: Componente de Card de Parceiro refatorado para usar apenas CSS (group-hover)
// PartnerCard com popup ao clique
const PartnerCard = ({ partner }) => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  // Fecha popup ao clicar fora
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative flex flex-col items-center" ref={cardRef}>
      {/* Card do parceiro */}
      <button
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex justify-center items-center h-40 w-full max-w-xs md:max-w-sm mb-4 focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label={`Ver mais sobre ${partner.name}`}
      >
        <img src={partner.logo} alt={partner.name} className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
      </button>
      {/* Popup customizado */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-brand-purple max-w-md w-full p-8 relative animate-fade-in flex flex-col items-center">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-brand-purple text-2xl font-bold hover:text-brand-pink focus:outline-none">×</button>
            <img src={partner.logo} alt={partner.name} className="max-h-28 max-w-full object-contain mb-4" />
            <h3 className="font-title-script text-2xl text-brand-purple mb-2 text-center">{partner.name}</h3>
            <p className="font-body-sans text-base text-text-gray mb-4 text-center">{partner.description}</p>
            <div className="flex justify-center gap-6 mt-2">
              <a href={partner.site} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-pink transition-colors shadow-grow-on-hover">Site</a>
              <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="bg-brand-pink text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-purple transition-colors shadow-grow-on-hover">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollTo={scrollTo} paymentLink={CONFIG.paymentLink} />
      <main>
        <section id="home" className="h-screen min-h-[700px] flex flex-col items-center justify-center text-center p-4 pb-0 relative hero-bg">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 flex flex-col items-center text-white">
            <h1 className="font-title-script text-6xl sm:text-7xl md:text-8xl leading-tight mb-12 drop-shadow-lg fade-slide-up">Wine & Sense</h1>
            <p className="font-body-sans text-lg md:text-xl max-w-2xl mb-12 drop-shadow-sm fade-slide-up delay-200">Uma experiência sensorial imersiva onde arte, gastronomia, vinhos e aromas se encontram para criar memórias afetivas.</p>
            <a href="#proximo-evento" onClick={(e) => { e.preventDefault(); scrollTo('proximo-evento'); }} className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg">GARANTIR MINHA VAGA</a>
          </div>
        </section>

        {/* CORREÇÃO: Card totalmente visível, sem invadir o Hero */}
        <AnimatedSection id="included" className="pt-0 pb-20 md:pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 mt-12 relative z-20">
                    <h2 className="font-title-script text-4xl text-center text-brand-purple mb-8">O Ingresso Inclui</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-body-sans text-text-gray text-lg">
                        {CONFIG.includedItems.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="text-brand-pink mr-3 mt-1 flex-shrink-0" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="font-body-sans text-center text-xl text-brand-purple font-semibold mt-8">Tudo isso em uma noite pensada para despertar os sentidos e criar memórias! 🍷</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection id="galeria" className="py-20 md:py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-title-script text-4xl md:text-5xl text-brand-purple mb-4">Momentos</h2>
                    <p className="font-body-sans text-lg text-text-gray">Veja os sorrisos e as criações das nossas últimas edições.</p>
                </div>
                <CoverFlowGallery images={CONFIG.galleryImages} />
            </div>
        </AnimatedSection>
        
        <AnimatedSection id="proximo-evento" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="font-title-script text-4xl md:text-5xl text-brand-purple mb-4">Próximo Evento</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-body-sans font-bold text-3xl text-dark-gray mb-4">{CONFIG.eventDetails.title}</h3>
                        <div className="space-y-4 text-text-gray text-lg mb-6">
                            <p className="flex items-center"><Calendar className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.date}</p>
                            <p className="flex items-center"><Clock className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.time}</p>
                            <p className="flex items-center"><MapPin className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.location}</p>
                            <p className="font-bold text-dark-gray text-xl">{CONFIG.eventDetails.price}</p>
                        </div>
                         <a href={CONFIG.paymentLink} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg inline-block pulse-on-hover shadow-grow-on-hover">
                            RESERVAR AGORA
                        </a>
                    </div>
                    <div className="h-96 rounded-lg overflow-hidden shadow-md">
                        <iframe 
                            src={CONFIG.eventDetails.googleMapsEmbed}
                            width="100%" height="100%" style={{ border:0 }} 
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection id="parceiros" className="py-32 md:py-40 bg-light-gray">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-title-script text-4xl md:text-5xl text-brand-purple mb-16">Assinado por especialistas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
              {CONFIG.partners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-white py-12 border-t border-medium-gray">
        <div className="container mx-auto px-6 text-center text-text-gray font-body-sans">
            <h3 className="font-title-script text-2xl text-brand-purple mb-6">Fale Conosco</h3>
            <div className="flex justify-center items-center space-x-8 mb-6">
                <a href={`tel:${CONFIG.contact.phone}`} className="hover:text-brand-purple transition-colors" aria-label="Telefone"><Phone/></a>
                <a href={`mailto:${CONFIG.contact.email}`} className="hover:text-brand-purple transition-colors" aria-label="Email"><Mail/></a>
                <a href={CONFIG.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
          <p>&copy; {new Date().getFullYear()} Wine & Sense. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
