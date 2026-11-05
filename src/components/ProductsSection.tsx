import React, { useState } from 'react';
import { 
  Check, 
  MessageSquare, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ClipboardList 
} from 'lucide-react';
import { siteData, ProductItem, buildWhatsAppLink } from '../data/siteData';

interface ProductsSectionProps {
  onOpenQuickList: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuickList }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos' 
    ? siteData.products 
    : siteData.products.filter(p => p.category === activeCategory);

  return (
    <section id="produtos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            Catálogo Completo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nossos Departamentos de Materiais
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Variedade incomparável para atender sua obra do alicerce à pintura final. 
            Trabalhamos com marcas consagradas, laudos técnicos e condições facilitadas em Cuiabá.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {siteData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const quoteLink = buildWhatsAppLink(product.whatsappMessage);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Image Container with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm bg-slate-900/90 text-amber-400 backdrop-blur-md border border-slate-700">
                      {product.badge}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-slate-200 bg-slate-900/60 px-2.5 py-0.5 rounded backdrop-blur-xs">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[11px] text-amber-300 font-medium">
                      Pronta Entrega
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Key items checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Principais itens fornecidos:
                      </p>
                      <ul className="space-y-1.5">
                        {product.highlightItems.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <a
                      href={quoteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all group/btn"
                    >
                      <MessageSquare className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
                      <span>Orçar este Departamento</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Quote Banner within Products */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                Precisa de uma cotação com múltiplos itens?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Monte sua lista agora no nosso assistente interativo ou envie o arquivo/foto direto aos nossos vendedores em Cuiabá.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenQuickList}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Abrir Montador de Lista</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
