import React, { useState } from 'react';
import { X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-slate-700">
          <span>Faça seu orçamento no WhatsApp!</span>
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteData.company.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da Dikasa Construção"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Official WhatsApp Icon */}
        <svg 
          className="w-7 h-7 fill-current relative z-10" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.495 2 2 6.496 2 12.032c0 1.977.574 3.824 1.564 5.385L2 22l4.735-1.527a9.972 9.972 0 0 0 5.296 1.49h.005c5.534 0 10.03-4.496 10.03-10.031A10.007 10.007 0 0 0 12.031 2zm0 18.362h-.004a8.297 8.297 0 0 1-4.23-1.157l-.304-.18-2.809.905.92-2.738-.198-.315a8.27 8.27 0 0 1-1.27-4.445c0-4.57 3.719-8.29 8.295-8.29a8.27 8.27 0 0 1 5.86 2.428 8.267 8.267 0 0 1 2.43 5.865c0 4.572-3.719 8.29-8.29 8.29zm4.542-6.208c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.232-.738-.659-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.372-.435.124-.145.166-.248.248-.414.083-.166.042-.31-.02-.435-.063-.124-.56-1.35-.767-1.848-.201-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.406 1.015 2.572.124.166 1.753 2.678 4.248 3.755.594.256 1.058.409 1.42.525.596.19 1.139.163 1.568.099.479-.071 1.468-.6 1.675-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z"/>
        </svg>

        {/* Small Notification Indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </div>
  );
};
