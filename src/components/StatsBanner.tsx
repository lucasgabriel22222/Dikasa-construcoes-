import React from 'react';
import { Star, Layers, Truck, MessageSquare, CheckCircle } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const statsCards = [
    {
      id: 'rating',
      value: "4.7 / 5.0",
      label: "Nota no Google",
      desc: "Mais de 80 avaliações de clientes e profissionais em Cuiabá",
      icon: Star,
      iconColor: "text-amber-500",
      borderTop: "border-t-4 border-amber-500"
    },
    {
      id: 'variety',
      value: "Obra Completa",
      label: "Básico ao Acabamento",
      desc: "Tudo o que sua construção precisa em um só fornecedor",
      icon: Layers,
      iconColor: "text-slate-700",
      borderTop: "border-t-4 border-slate-700"
    },
    {
      id: 'delivery',
      value: "Entrega Rápida",
      label: "Logística Pontual",
      desc: "Transporte seguro para sua obra não ficar paralisada",
      icon: Truck,
      iconColor: "text-emerald-600",
      borderTop: "border-t-4 border-emerald-600"
    },
    {
      id: 'quote',
      value: "Orçamento Ágil",
      label: "Direto no WhatsApp",
      desc: "Envie sua lista e receba preços e condições em minutos",
      icon: MessageSquare,
      iconColor: "text-orange-600",
      borderTop: "border-t-4 border-orange-600"
    }
  ];

  return (
    <section id="estatisticas" className="py-14 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
            Credibilidade & Compromisso
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Construa com a Segurança de Quem Entende do Ramo
          </h2>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between ${card.borderTop}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {card.value}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {card.label}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garantia Dikasa</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
