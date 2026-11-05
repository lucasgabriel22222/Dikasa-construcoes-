import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Send, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Building2, 
  Sparkles,
  ClipboardCheck
} from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';

interface MaterialListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedItem {
  id: string;
  name: string;
  quantity: string;
  unit: string;
}

export const MaterialListModal: React.FC<MaterialListModalProps> = ({ isOpen, onClose }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([
    { id: 'cimento', name: 'Cimento CP-II (50kg)', quantity: '30', unit: 'sacas' },
    { id: 'areia', name: 'Areia Média Lavada', quantity: '1', unit: 'caminhão' }
  ]);
  const [customItemName, setCustomItemName] = useState('');
  const [customItemQty, setCustomItemQty] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleToggleOption = (option: { id: string; name: string; unit: string }) => {
    const exists = selectedItems.find(i => i.id === option.id);
    if (exists) {
      setSelectedItems(selectedItems.filter(i => i.id !== option.id));
    } else {
      setSelectedItems([...selectedItems, {
        id: option.id,
        name: option.name,
        quantity: '1',
        unit: option.unit
      }]);
    }
  };

  const handleQuantityChange = (id: string, quantity: string) => {
    setSelectedItems(selectedItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemName.trim()) return;
    const newItem: SelectedItem = {
      id: `custom_${Date.now()}`,
      name: customItemName.trim(),
      quantity: customItemQty.trim() || '1',
      unit: 'unid/m²'
    };
    setSelectedItems([...selectedItems, newItem]);
    setCustomItemName('');
    setCustomItemQty('');
  };

  const handleRemove = (id: string) => {
    setSelectedItems(selectedItems.filter(i => i.id !== id));
  };

  const handleSendToWhatsApp = () => {
    let msg = `Olá, Dikasa Construção! Vim pelo site e gostaria de um orçamento para os seguintes materiais:\n\n`;
    
    if (selectedItems.length > 0) {
      selectedItems.forEach((item) => {
        msg += `• ${item.name}: ${item.quantity} ${item.unit}\n`;
      });
    } else {
      msg += `(Gostaria de consultar preços de materiais para minha obra)\n`;
    }

    if (neighborhood.trim()) {
      msg += `\n📍 Bairro/Local da Obra em Cuiabá: ${neighborhood.trim()}`;
    }

    if (notes.trim()) {
      msg += `\n📝 Observações adicionais: ${notes.trim()}`;
    }

    const url = buildWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Montador Rápido de Orçamento</h3>
              <p className="text-xs text-slate-300">Selecione ou digite seus materiais para envio no WhatsApp</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto space-y-6">
          
          {/* Quick Click Common Materials */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Selecione materiais frequentes com 1 clique:
            </label>
            <div className="flex flex-wrap gap-2">
              {siteData.quickListOptions.map((opt) => {
                const isSelected = selectedItems.some(i => i.id === opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleToggleOption(opt)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold border border-amber-600 shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{opt.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add custom custom item */}
          <form onSubmit={handleAddCustom} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Ou adicione outro material específico:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ex: Porcelanato 80x80 bege, Torneira Lorenzetti, etc."
                value={customItemName}
                onChange={(e) => setCustomItemName(e.target.value)}
                className="flex-1 px-3 py-2 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 focus:outline-hidden focus:border-amber-500"
              />
              <input
                type="text"
                placeholder="Qtd/Medida"
                value={customItemQty}
                onChange={(e) => setCustomItemQty(e.target.value)}
                className="w-24 px-3 py-2 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 focus:outline-hidden focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Adicionar</span>
              </button>
            </div>
          </form>

          {/* Selected List Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Sua lista para cotação ({selectedItems.length} itens):
              </label>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedItems([])}
                  className="text-xs text-rose-600 hover:text-rose-700 underline"
                >
                  Limpar lista
                </button>
              )}
            </div>

            {selectedItems.length === 0 ? (
              <div className="p-4 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-500">
                Nenhum material selecionado ainda. Clique nas opções acima ou adicione itens manualmente.
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs gap-3"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 flex-1">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 px-2 py-1 text-xs text-center border border-slate-300 rounded font-bold text-slate-800"
                        title="Quantidade"
                      />
                      <span className="text-xs text-slate-500 w-16 truncate">{item.unit}</span>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location / Neighborhood info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Bairro / Cidade da Obra (para frete):
              </label>
              <input
                type="text"
                placeholder="Ex: Jardim Industriário, Cuiabá"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Alguma dúvida ou especificação?
              </label>
              <input
                type="text"
                placeholder="Ex: Preciso da entrega para esta sexta-feira"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Footer with Big WhatsApp CTA */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            Ao clicar, abriremos o WhatsApp oficial da <strong>Dikasa Construção</strong> com a lista pronta para resposta rápida.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Enviar no WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
