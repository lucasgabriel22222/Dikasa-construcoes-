import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Plus, Minus } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Perguntas Frequentes Sobre Nossos Serviços
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Respostas diretas e transparentes sobre entregas, orçamentos, pagamentos e atendimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteData.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Support Box */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-slate-900 text-base">
              Ainda tem alguma dúvida sobre a sua lista de materiais?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Nossa equipe em Cuiabá está a postos para responder prontamente no WhatsApp.
            </p>
          </div>

          <a
            href={siteData.company.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Falar com Atendente</span>
          </a>
        </div>

      </div>
    </section>
  );
};
