import { UploadCloud } from 'lucide-react';

export const Importacoes = () => {
  return (
    <div className="space-y-6">
      <div className="bg-surface p-8 rounded-card border border-border text-center">
        <div className="mx-auto w-16 h-16 bg-primary-tint rounded-full flex items-center justify-center mb-4">
            <UploadCloud className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-medium text-text-primary">Importação de Dados</h3>
        <p className="text-muted mt-2 max-w-md mx-auto">
            Em breve você poderá importar dados de planilhas CSV ou Excel diretamente para o sistema.
        </p>
        <button disabled className="mt-6 px-4 py-2 bg-muted text-white rounded-input cursor-not-allowed">
            Funcionalidade em Desenvolvimento
        </button>
      </div>
    </div>
  );
};
