import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, MessageSquare, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Google Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-14">
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1 rounded-full">
              Prova Social Verificada
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Depoimentos reais de quem constrói e reforma com a Dikasa em Cuiabá. 
              Transparência, rapidez e confiança comprovadas.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.41 7.34 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.59 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900">4.7</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Classificação baseada em <strong>80 avaliações no Google</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header with stars and Google Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    {review.stars < 5 && (
                      <Star className="w-4 h-4 text-slate-300" />
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Avaliação Verificada no Google
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-slate-100 absolute -top-3 -left-2 -z-0" />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {review.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Todas as avaliações são registradas publicamente no perfil da <strong>Dikasa Construção</strong> no Google Meu Negócio em Cuiabá - MT.
          </p>
        </div>

      </div>
    </section>
  );
};
