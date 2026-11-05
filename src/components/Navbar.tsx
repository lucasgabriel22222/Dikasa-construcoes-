import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  ClipboardList 
} from 'lucide-react';
import { siteData, buildWhatsAppLink, isStoreOpenNow } from '../data/siteData';

interface NavbarProps {
  onOpenQuickList: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickList }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, statusText: 'Aberto Agora' });

  useEffect(() => {
    setStoreStatus(isStoreOpenNow());
    const interval = setInterval(() => {
      setStoreStatus(isStoreOpenNow());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 h-1 bg-amber-500 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top micro bar for direct contact & operating status */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Avenida A, esquina com Av. I, Qd 14 Lote 08 - I, Cuiabá - MT
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Seg a Sáb: 07h30 às 18h
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-medium ${
              storeStatus.isOpen ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-slate-800 text-slate-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400' : 'bg-slate-500'}`} />
              {storeStatus.statusText}
            </span>
            <a 
              href={`tel:${siteData.company.rawPhone}`} 
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              {siteData.company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed top-0 lg:top-7 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-sm py-2.5' 
            : 'backdrop-blur-md bg-white/90 border-b border-slate-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-amber-500 shadow-md group-hover:scale-105 transition-transform duration-200 border border-slate-700">
                <Building2 className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900">DIKASA</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    Construção
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  & Acabamento • Cuiabá - MT
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenQuickList}
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-300/80 transition-all cursor-pointer shadow-xs"
                title="Montar lista rápida de materiais"
              >
                <ClipboardList className="w-4 h-4 text-amber-600" />
                Montar Lista
              </button>

              <a
                href={siteData.company.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs md:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="py-2 border-b border-slate-100 mb-3 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                {storeStatus.statusText}
              </span>
              <a href={`tel:${siteData.company.rawPhone}`} className="text-amber-600 font-semibold">
                {siteData.company.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickList();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-300"
              >
                <ClipboardList className="w-4 h-4 text-amber-600" />
                Montar Lista de Materiais
              </button>

              <a
                href={siteData.company.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
