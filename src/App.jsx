import React from 'react';
import { CheckCircle, MapPin, Clock, Calendar, Phone, Mail } from 'lucide-react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import CoverFlowGallery from './components/CoverFlowGallery';

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
    { name: "Serafina", logo: "/assets/logos/serafina-logo.png", description: "Restaurante italiano tradicional, referência em massas frescas e ambiente acolhedor.", site: "https://serafina.com.br", instagram: "https://instagram.com/serafinabrasil" },
    { name: "Wineyes", logo: "/assets/logos/wineyes-logo.png", description: "Importadora e curadora de vinhos especiais, trazendo rótulos exclusivos para o Brasil.", site: "https://wineyes.com.br", instagram: "https://instagram.com/wineyesvinhos" },
    { name: "Sagrado Savon", logo: "/assets/logos/ssavon-logo.png", description: "Marca de cosméticos artesanais, focada em experiências sensoriais e aromas únicos.", site: "https://sagradosavon.com.br", instagram: "https://instagram.com/sagradosavon" },
    { name: "Mondo Pane", logo: "/assets/logos/mondopane-logo.png", description: "Padaria artesanal e cafeteria, referência em pães de fermentação natural e ambiente rústico.", site: "https://mondopane.com.br", instagram: "https://instagram.com/mondopane" },
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
    "Oficina de arte com orientação profissional",
    "Degustação open wine com curadoria especial",
    "Jantar completo harmonizado",
    "Kit sensorial exclusivo",
  ],
  contact: {
    phone: "(11) 99999-9999",
    email: "contato@wineandsense.com.br",
    instagram: "https://www.instagram.com/wineesense",
  }
};

// Substituir PartnerLogo por PartnerCard animado
const PartnerCard = ({ partner, index }) => {
  const [open, setOpen] = React.useState(false);
  // Fecha o card ao clicar fora
  React.useEffect(() => {
    if (!open) return;
    const handle = (e) => {
      if (!e.target.closest('.partner-popup-card')) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);
  return (
    <div className={`relative flex flex-col items-center group cursor-pointer fade-slide-up delay-${100 + index * 100}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen((v) => !v)}>
      <div className={`transition-transform duration-300 ${open ? 'scale-110 z-20' : 'scale-100'} drop-shadow-xl bg-white rounded-xl p-4 flex items-center justify-center shadow-grow-on-hover`}>
        <img src={partner.logo} alt={partner.name} className="max-h-24 max-w-full object-contain transition-all duration-300" />
      </div>
      {/* Overlay escuro ao fundo */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)}></div>
      )}
      {/* Card animado, centralizado, FIXED, acima de tudo */}
      <div className={`partner-popup-card fixed left-1/2 top-1/2 w-[90vw] max-w-xs sm:max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-medium-gray flex flex-col items-center transition-all duration-500 ease-out z-50 ${open ? 'opacity-100 pointer-events-auto scale-105' : 'opacity-0 pointer-events-none scale-95'}`}>
        <h3 className="font-title-serif text-xl text-brand-purple mb-2 text-center">{partner.name}</h3>
        <p className="font-body-sans text-text-gray mb-4 text-center">{partner.description}</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
          <a href={partner.site} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-pink transition-colors w-full sm:w-auto text-center pulse-on-hover shadow-grow-on-hover">Site</a>
          <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="bg-brand-pink text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-purple transition-colors w-full sm:w-auto text-center pulse-on-hover shadow-grow-on-hover">Instagram</a>
        </div>
      </div>
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
        {/* --- Bloco 1: Hero --- */}
        <section id="home" className="h-screen min-h-[700px] flex flex-col items-center justify-center text-center p-4 relative hero-bg">
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center text-dark-gray">
            <h1 className="font-title-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 fade-slide-up">Wine & Sense</h1>
            <p className="font-body-sans text-lg md:text-xl max-w-2xl mb-8 fade-slide-up delay-200">Uma experiência sensorial imersiva onde arte, gastronomia, vinhos e aromas se encontram para criar memórias afetivas.</p>
            <a href="#proximo-evento" onClick={(e) => { e.preventDefault(); scrollTo('proximo-evento'); }} className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg fade-slide-up delay-400 pulse-on-hover shadow-grow-on-hover">GARANTIR MINHA VAGA</a>
          </div>
        </section>

        {/* --- Bloco 2: Sobre --- */}
        <AnimatedSection id="sobre" className="py-20 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left fade-slide-left">
              <h2 className="font-title-serif text-4xl md:text-5xl text-brand-purple mb-6">Uma experiência que desperta sentidos.</h2>
              <p className="font-body-sans text-lg text-text-gray leading-relaxed">O Wine & Sense é um convite para uma pausa, uma reconexão. Conduzimos os nossos convidados por uma jornada que combina a criatividade da arte, os sabores da alta gastronomia, a sofisticação dos vinhos e a memória dos aromas.</p>
            </div>
            <div className="h-80 bg-medium-gray rounded-lg overflow-hidden shadow-md fade-slide-right">
                <img src="/assets/images/concept-image.jpg" alt="Conceito Wine & Sense" className="w-full h-full object-cover rounded-xl shadow-lg mx-auto shadow-grow-on-hover"/>
            </div>
          </div>
        </AnimatedSection>
        
        {/* --- Bloco 3: Galeria --- */}
        <AnimatedSection id="galeria" className="py-20 md:py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-title-serif text-4xl md:text-5xl text-brand-purple mb-4">Momentos</h2>
                    <p className="font-body-sans text-lg text-text-gray">Veja os sorrisos e as criações das nossas últimas edições.</p>
                </div>
                <CoverFlowGallery images={CONFIG.galleryImages} />
            </div>
        </AnimatedSection>
        
        {/* --- Bloco 4: Próximo Evento --- */}
        <AnimatedSection id="proximo-evento" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="font-title-serif text-4xl md:text-5xl text-brand-purple mb-4">Próximo Evento</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-title-serif text-3xl text-dark-gray mb-4">{CONFIG.eventDetails.title}</h3>
                        <div className="space-y-4 text-text-gray text-lg mb-6">
                            <p className="flex items-center"><Calendar className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.date}</p>
                            <p className="flex items-center"><Clock className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.time}</p>
                            <p className="flex items-center"><MapPin className="mr-3 text-brand-purple"/> {CONFIG.eventDetails.location}</p>
                            <p className="font-bold text-dark-gray text-xl">{CONFIG.eventDetails.price}</p>
                        </div>
                         <a href={CONFIG.paymentLink} target="_blank" rel="noopener noreferrer" className="bg-brand-purple text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-pink transition-colors duration-300 shadow-lg inline-block">
                            RESERVAR AGORA
                        </a>
                    </div>
                    <div className="h-96 rounded-lg overflow-hidden shadow-md">
                        <iframe 
                            src={CONFIG.eventDetails.googleMapsEmbed}
                            width="100%" 
                            height="100%" 
                            style={{ border:0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </AnimatedSection>

        {/* --- Bloco 5: Parceiros --- */}
        <AnimatedSection id="parceiros" className="py-20 md:py-24 bg-light-gray">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-title-serif text-4xl md:text-5xl text-brand-purple mb-12 fade-slide-up">Assinado por especialistas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {CONFIG.partners.map((partner, idx) => (
                <PartnerCard key={partner.name} partner={partner} index={idx} />
              ))}
            </div>
          </div>
        </AnimatedSection>

      </main>
      <footer className="bg-white py-12 border-t border-medium-gray fade-slide-up">
        <div className="container mx-auto px-6 text-center text-text-gray font-body-sans">
            <h3 className="font-title-serif text-2xl text-brand-purple mb-6">Fale Conosco</h3>
            <div className="flex justify-center space-x-8 mb-6">
                <a href={`tel:${CONFIG.contact.phone}`} className="hover:text-brand-purple"><Phone/></a>
                <a href={`mailto:${CONFIG.contact.email}`} className="hover:text-brand-purple"><Mail/></a>
                <a href={CONFIG.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
          <p>&copy; {new Date().getFullYear()} Wine & Sense. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
