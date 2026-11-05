import React from 'react';
import { MessageSquare, ClipboardList, ShieldCheck, Truck, Phone, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

interface CtaSectionProps {
  onOpenQuickList: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuickList }) => {
  return (
    <section className="py-20 relative bg-slate-900 overflow-hidden border-t border-slate-800">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
          <Star className="w-4 h-4 fill-amber-400" />
          Atendimento Consultivo e Rápido em Cuiabá
        </div>

        {/* Big Direct Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Vai construir ou reformar?{' '}
          <span className="text-amber-400">
            Envie sua lista de materiais!
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Fale diretamente com a equipe da <strong className="text-white font-semibold">Dikasa Construção e Acabamento</strong> pelo WhatsApp. 
          Garantimos o melhor preço, atendimento com especialistas e entrega rápida na sua obra.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteData.company.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <button
            type="button"
            onClick={onOpenQuickList}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white font-bold text-sm sm:text-base border border-slate-700 transition-all cursor-pointer"
          >
            <ClipboardList className="w-5 h-5 text-amber-400" />
            <span>Montar Lista de Materiais</span>
          </button>
        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-400" />
            Entrega ágil em Cuiabá e região
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Nota 4.7 no Google (80+ avaliações)
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-slate-300" />
            {siteData.company.phoneDisplay}
          </span>
        </div>

      </div>
    </section>
  );
};
