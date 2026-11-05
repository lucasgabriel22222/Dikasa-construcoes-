import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Star, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shadow-md border border-slate-800">
                <Building2 className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">DIKASA</span>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-500 ml-2">
                  Construção
                </span>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  & Acabamento • Cuiabá - MT
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Materiais de construção do básico ao acabamento de alto padrão. 
              Variedade em cimento, ferro, areia, brita, porcelanatos, tintas e linhas completas de elétrica e hidráulica com entrega segura para sua obra em Cuiabá e região.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.7 no Google (80+ avaliações)</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Produtos & Categorias</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliações Google</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Nossa Loja</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Departments Shortcuts (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Básico & Fundação</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Pisos & Porcelanatos</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Louças & Metais</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Rede Hidráulica</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Materiais Elétricos</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Tintas & Pintura</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Atendimento & Endereço
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {siteData.company.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a 
                  href={`tel:${siteData.company.rawPhone}`}
                  className="text-white hover:text-amber-400 font-semibold"
                >
                  {siteData.company.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-300">
                  {siteData.company.workingHoursDisplay}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteData.company.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {currentYear} <strong>DIKASA CONSTRUÇÃO E ACABAMENTO</strong>. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Avenida A, esquina com Av. I, Qd 14 Lote 08 - I, Cuiabá - MT • CEP 78096-385
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 cursor-pointer text-xs"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
