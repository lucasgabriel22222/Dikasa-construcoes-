import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Navigation, 
  Car, 
  Truck, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { siteData, isStoreOpenNow, buildWhatsAppLink } from '../data/siteData';

export const LocationHoursSection: React.FC = () => {
  const [storeStatus, setStoreStatus] = useState(isStoreOpenNow());

  useEffect(() => {
    setStoreStatus(isStoreOpenNow());
    const interval = setInterval(() => {
      setStoreStatus(isStoreOpenNow());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-800 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full">
            Visite Nossa Loja
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Nossa Loja em Cuiabá
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Localização estratégica com amplo estacionamento para clientes e doca rápida para retirada de materiais e carregamento de obras.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Practical Store Details (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              {/* Store Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 bg-slate-800 border border-slate-700">
                <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                <span className={storeStatus.isOpen ? 'text-emerald-400' : 'text-slate-300'}>
                  {storeStatus.statusText}
                </span>
              </div>

              {/* Address Block */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Endereço Completo
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-white mt-1 leading-snug">
                      {siteData.company.address}
                    </p>
                    <p className="text-xs text-amber-400 mt-1 font-medium">
                      CEP: {siteData.company.cep} • Cuiabá - MT
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-white mt-1">
                      {siteData.company.workingHoursDisplay}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Domingos e feriados: Fechado (Atendimento WhatsApp sob plantão)
                    </p>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Telefone & WhatsApp
                    </h3>
                    <a 
                      href={`tel:${siteData.company.rawPhone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors block mt-1"
                    >
                      {siteData.company.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Orçamentos e cotações com resposta rápida
                    </p>
                  </div>
                </div>
              </div>

              {/* Convenience Perks */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Car className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estacionamento Fácil</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doca de Carregamento</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.company.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (Maps)</span>
              </a>

              <a
                href={siteData.company.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Google Maps Iframe (7 cols) */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg min-h-[380px] lg:min-h-full flex flex-col">
            <div className="bg-slate-200/60 px-4 py-2.5 border-b border-slate-300/80 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                Mapa da Região • Cuiabá - MT (78096-385)
              </span>
              <a 
                href={siteData.company.googleMapsDirectionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full relative min-h-[350px]">
              <iframe
                title="Localização da Dikasa Construção e Acabamento em Cuiabá"
                src={siteData.company.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
