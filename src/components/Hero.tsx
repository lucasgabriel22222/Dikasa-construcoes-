import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  ChevronDown, 
  ArrowRight, 
  Check, 
  ClipboardList, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Building2 
} from 'lucide-react';
import { siteData } from '../data/siteData';

interface HeroProps {
  onOpenQuickList: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickList }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Real, Beautiful Construction / Warehouse Background Image with Visible Presence */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%'
        }}
      />

      {/* Balanced, cinematic dark overlay - image remains visibly clear and authentic */}
      <div className="absolute inset-0 bg-slate-950/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full text-center">
        
        {/* Subtle, Professional Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>Loja de Materiais de Construção em Cuiabá - MT</span>
        </div>

        {/* High-Impact Headline - Solid, crisp, authoritative typography */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Do Básico ao Acabamento:{' '}
          <span className="text-amber-400">
            Tudo Para a Sua Obra
          </span>{' '}
          com Entrega Rápida
        </h1>

        {/* Clear Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed">
          Fornecemos cimento, ferro, areia, brita, porcelanatos, tintas, elétrica e hidráulica completa. 
          Atendimento técnico consultivo, preço competitivo e cotação prática direto pelo WhatsApp para Cuiabá e região.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={siteData.company.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Enviar Lista de Materiais no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenQuickList}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <ClipboardList className="w-4 h-4 text-amber-400" />
            <span>Montar Lista Rápida</span>
          </button>

          <a
            href="#produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-slate-300 hover:text-white font-semibold text-sm transition-colors"
          >
            <span>Ver Departamentos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Clean, Grounded Feature Bar */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/40 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Frota própria e pontual</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/40 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Do alicerce ao telhado</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/40 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">100% com Nota Fiscal</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/40 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">Nota 4.7 no Google</span>
          </div>
        </div>

      </div>

      {/* Clean Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 text-xs">
        <a 
          href="#estatisticas" 
          className="p-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
