import { Save } from 'lucide-react';

export const Configuracoes = () => {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="bg-surface p-6 rounded-card border border-border space-y-6">
        <div>
            <h3 className="text-lg font-medium text-text-primary">Perfil da Empresa</h3>
            <p className="text-sm text-text-secondary mt-1">Atualize as informações da sua empresa.</p>
        </div>
        
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">Nome da Empresa</label>
                    <input type="text" className="w-full px-3 py-2 border border-border rounded-input" defaultValue="Agroclasse Demo" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">CNPJ</label>
                    <input type="text" className="w-full px-3 py-2 border border-border rounded-input" defaultValue="00.000.000/0001-00" />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Endereço</label>
                <input type="text" className="w-full px-3 py-2 border border-border rounded-input" defaultValue="Av. Principal, 1000 - Centro" />
            </div>
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
             <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-input hover:bg-primary-hover transition-colors">
                <Save className="w-4 h-4" />
                Salvar Alterações
             </button>
        </div>
      </div>
    </div>
  );
};
