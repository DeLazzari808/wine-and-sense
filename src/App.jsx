import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Clock, Calendar, Phone, Mail, ExternalLink, CheckCircle, Paintbrush, Wine, Utensils, Flower2 } from 'lucide-react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import CoverFlowGallery from './components/CoverFlowGallery';
import PillarCard from './components/PillarCard';
import EventTimer from './components/EventTimer';
import MasonryGallery from './components/MasonryGallery';

// --- CONFIGURATION ---
const CONFIG = {
  paymentLink: "https://reservation-widget.tagme.com.br/reservation/menuSelect/6880118a29d274428fa59e98", 
  eventDetails: {
    title: "Wine & Sense no Mondo Pane",
    date: "28 de Agosto",
    time: "19h às 22h",
    location: "Mondo Pane, Al. Lorena, 473, Jardins",
    price: "R$ 320,00",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.431533890186!2d-46.6622368849238!3d-23.553091367147893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583435881e6b%3A0x47f6455cda77651!2sMondo%20Pane!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
  },
  partners: [
    { name: "Serafina", logo: "/assets/logos/serafina-logo.png", description: "Restaurante italiano tradicional, referência em massas frescas e ambiente acolhedor.", site: "https://serafinabrasil.com.br", instagram: "https://instagram.com/serafinabrasil" },
    { name: "Wineyes", logo: "/assets/logos/wineyes-logo.png", description: "Importadora e curadora de vinhos especiais, trazendo rótulos exclusivos para o Brasil.", site: "https://wineyes.com.br", instagram: "https://instagram.com/wineyesvinhos" },
    { name: "Sagrado Savon", logo: "/assets/logos/ssavon-logo.jpg", description: "Marca de cosméticos artesanais, focada em experiências sensoriais e aromas únicos.", site: "https://sagradosavon.com.br", instagram: "https://instagram.com/sagradosavon" },
    { name: "Mondo Pane", logo: "/assets/logos/mondopane-logo.png", description: "Padaria artesanal e cafeteria, referência em pães de fermentação natural.", site: "https://mondopane.com.br", instagram: "https://www.instagram.com/mondopane_oficial/" },
  ],
  galleryImages: [
    "/assets/images/hero-background.jpg", // Adiciona a imagem antiga do Hero à galeria
    "/assets/images/gallery-1.jpg", "/assets/images/gallery-2.jpg", "/assets/images/gallery-3.jpg",
    "/assets/images/gallery-4.jpg", "/assets/images/gallery-5.jpg", "/assets/images/gallery-6.jpg",
    "/assets/images/gallery-7.jpg", "/assets/images/gallery-8.jpg", "/assets/images/gallery-9.jpg",
    "/assets/images/gallery-10.jpg", "/assets/images/gallery-11.jpg",
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
    phone: "+55 41 9993-5413",
    email: "wineesense@gmail.com",
    instagram: "https://www.instagram.com/wineandsense/",
  }
};

// Dados dos quatro pilares (ordem e logos conforme solicitado)
const PILLARS = [
  {
    logos: [
      '/assets/logos/mondopane-logo.png',
      '/assets/logos/serafina-logo.png',
    ],
    title: 'Gastronomia',
    description: 'Comidinhas leves, tábua de antepastos, prato principal e sobremesa para uma experiência completa.',
    partners: 'com Mondo Pane e Serafina',
    // Mondo Pane tem site e instagram, Serafina só Instagram
    site: 'https://mondopane.com.br',
    instagram: 'https://instagram.com/serafinabrasil',
  },
  {
    logos: ['/assets/logos/wineyes-logo.png'],
    title: 'Vinho',
    description: 'Degustação de vinhos selecionados, harmonizando sabores e criando novas memórias.',
    partners: 'com WineYes',
    instagram: 'https://instagram.com/wineyesvinhos',
  },
  {
    logos: ['/assets/logos/ssavon-logo.jpg'],
    title: 'Aromas',
    description: 'Ambientação sensorial com fragrância exclusiva e um presente especial ao final.',
    partners: 'com Sagrado Savon',
    site: 'https://sagradosavon.com.br',
    instagram: 'https://instagram.com/sagradosavon',
  },
  {
    icon: Paintbrush,
    title: 'Arte',
    description: 'Oficina de pintura em taça com orientação artística, estimulando a criatividade e a expressão.',
    partners: 'Artistas convidados',
  },
];

// Parceiros com popup group-hover CSS
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
    <div ref={cardRef} className="relative flex flex-col items-center">
      <button
        className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 flex justify-center items-center h-36 w-full hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label={`Ver mais sobre ${partner.name}`}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-16 max-w-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0"
        />
      </button>
      {/* Popup customizado */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-brand-purple max-w-md w-full p-8 relative flex flex-col items-center animate-fade-in">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-brand-purple text-2xl font-bold hover:text-brand-pink focus:outline-none">×</button>
            <img src={partner.logo} alt={partner.name} className="max-h-28 max-w-full object-contain mb-4" />
            <h3 className="font-sans text-2xl font-bold text-brand-purple mb-2 text-center">{partner.name}</h3>
            <p className="font-sans text-base font-light text-text-gray mb-4 text-center">{partner.description}</p>
            <div className="flex justify-center gap-6 mt-2">
               {(["wineyes", "serafina"]).includes(partner.name.toLowerCase()) ? (
                 partner.instagram && (
                   <a
                     href={partner.instagram}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-colors duration-200 shadow-sm"
                     aria-label="Instagram"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                       <circle cx="17.5" cy="6.5" r="1"/>
                     </svg>
                   </a>
                 )
               ) : (
                 <>
                   {partner.site && <a href={partner.site} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-pink transition-colors shadow-grow-on-hover">Site</a>}
                   {partner.instagram && <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="bg-brand-pink text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-purple transition-colors shadow-grow-on-hover">Instagram</a>}
                 </>
               )}
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
        {/* 1. Hero */}
        <section id="home" className="h-screen min-h-[800px] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
          {/* Vídeo de fundo */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/assets/videos/video-edicao-passada.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative z-20 flex flex-col items-center text-white pt-24">
            <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl font-light leading-tight mb-4 drop-shadow-lg fade-slide-up">Wine & Sense</h1>
            <p className="font-sans text-lg md:text-xl max-w-2xl mb-8 drop-shadow-sm fade-slide-up delay-200">Uma experiência sensorial imersiva onde arte, gastronomia, vinhos e aromas se encontram para criar memórias afetivas.</p>
            <a href="#proximo-evento" onClick={(e) => { e.preventDefault(); scrollTo('proximo-evento'); }} className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg fade-slide-up delay-400 pulse-on-hover shadow-grow-on-hover">GARANTIR MINHA VAGA</a>
          </div>
        </section>

        {/* 2. Contador regressivo */}
        <EventTimer />

        {/* 3. O Ingresso Inclui */}
        <AnimatedSection id="inclui" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <h2 className="font-sans text-4xl font-bold text-center text-brand-purple mb-8">O Ingresso Inclui</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-sans text-text-gray text-lg font-light">
                    {CONFIG.includedItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="text-brand-pink mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="font-sans text-center text-xl text-brand-purple font-semibold mt-8">Tudo isso em uma noite pensada para despertar os sentidos e criar memórias! 🍷</p>
            </div>
          </div>
        </AnimatedSection>
        <div id="sobre"></div>

        {/* 4. Próximo Evento - MOVIDO PARA CÁ */}
        <AnimatedSection id="proximo-evento" className="py-20 md:py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="font-sans text-4xl md:text-5xl font-bold text-brand-purple mb-4">Próximo Evento</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-sans font-bold text-3xl text-dark-gray mb-4">{CONFIG.eventDetails.title}</h3>
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

        {/* 5. Os 4 Pilares */}
        <AnimatedSection id="pilares" className="py-24 bg-light-gray">
          <div className="container mx-auto px-6">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-brand-purple mb-12 text-center">Os 4 Pilares da Experiência</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {PILLARS.map((pillar, idx) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 6. Galeria CoverFlow */}
        <AnimatedSection id="galeria" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-brand-purple mb-4">Momentos Inesquecíveis</h2>
              <p className="font-sans text-lg font-light text-text-gray">Veja os sorrisos e as criações da nossa última edição.</p>
            </div>
            <CoverFlowGallery images={CONFIG.galleryImages} />
          </div>
        </AnimatedSection>

        {/* 7. Parceiros */}
        <AnimatedSection id="parceiros" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-brand-purple mb-12">Assinado por especialistas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-start">
              {CONFIG.partners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 8. CTA Final antes do Footer */}
        <AnimatedSection id="cta-final" className="py-20 bg-brand-purple text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-sans text-3xl font-bold mb-4">Desperte seus sentidos com a gente!</h2>
            <p className="font-sans max-w-2xl mx-auto mb-8">As vagas são limitadas e costumam esgotar. Garanta a sua agora.</p>
            <a href={CONFIG.paymentLink} target="_blank" rel="noopener noreferrer" className="bg-white text-brand-purple font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg inline-block pulse-on-hover">
              RESERVAR MINHA VAGA
            </a>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-white py-12 border-t border-medium-gray">
        <div className="container mx-auto px-6 text-center text-text-gray font-sans">
            <h3 className="font-sans text-2xl font-bold text-brand-purple mb-6">Fale Conosco</h3>
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
