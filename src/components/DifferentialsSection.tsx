import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Calculator, 
  Truck, 
  MessageSquare, 
  MapPin, 
  CheckCircle2,
  Clock,
  Banknote
} from 'lucide-react';
import { siteData } from '../data/siteData';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Building2,
    Calculator,
    Truck,
    MessageSquare,
    MapPin
  };

  return (
    <section id="diferenciais" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full">
            Por Que Escolher a Dikasa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Diferenciais Práticos Para a Sua Obra Avançar
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sem enrolação ou promessas vazias. Trabalhamos com compromisso real de prazos, 
            materiais certificados e atendimento consultivo que gera economia no final da obra.
          </p>
        </div>

        {/* 6 Differential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={index}
                className="group p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-500/70 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 border border-amber-300/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Vantagem garantida para sua construção</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Conditions Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">
                Condições Comerciais Flexíveis
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Aceitamos Pix, cartões em até 12x e faturamento para construtoras cadastradas.
              </p>
            </div>
          </div>

          <a
            href={siteData.company.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Consultar Condições</span>
          </a>
        </div>

      </div>
    </section>
  );
};
