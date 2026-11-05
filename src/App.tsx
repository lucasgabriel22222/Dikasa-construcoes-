import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ProductsSection } from './components/ProductsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MaterialListModal } from './components/MaterialListModal';

export default function App() {
  const [isQuickListOpen, setIsQuickListOpen] = useState(false);

  const handleOpenQuickList = () => {
    setIsQuickListOpen(true);
  };

  const handleCloseQuickList = () => {
    setIsQuickListOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. NAVBAR (Header Fixo com barra de progresso) */}
      <Navbar onOpenQuickList={handleOpenQuickList} />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal com Parallax Real via JS) */}
        <Hero onOpenQuickList={handleOpenQuickList} />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (BANNER PARALLAX) */}
        <StatsBanner />

        {/* 4. SEÇÃO PRODUTOS & CATEGORIAS */}
        <ProductsSection onOpenQuickList={handleOpenQuickList} />

        {/* 5. SEÇÃO DIFERENCIAIS */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <ReviewsSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS */}
        <LocationHoursSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <CtaSection onOpenQuickList={handleOpenQuickList} />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />

      {/* Interactive Material List Quote Builder Modal */}
      <MaterialListModal 
        isOpen={isQuickListOpen} 
        onClose={handleCloseQuickList} 
      />
    </div>
  );
}
