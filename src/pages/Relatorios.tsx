import { FileText, Download } from 'lucide-react';

export const Relatorios = () => {
    const reports = [
        { name: 'DRE Gerencial', date: '01/10/2023', type: 'Financeiro' },
        { name: 'Relatório de Vendas', date: '02/10/2023', type: 'Comercial' },
        { name: 'Análise de Custos', date: '05/10/2023', type: 'Operacional' },
        { name: 'Fluxo de Caixa', date: '10/10/2023', type: 'Financeiro' },
    ];

  return (
    <div className="space-y-6">
       <div className="bg-surface rounded-card border border-border overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="font-medium text-text-primary">Relatórios Disponíveis</h3>
                <div className="flex gap-2">
                     <input 
                        type="text" 
                        placeholder="Buscar relatório..." 
                        className="px-3 py-1.5 text-sm border border-border rounded-input focus:outline-none focus:border-primary"
                     />
                </div>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-background text-text-secondary font-medium">
                    <tr>
                        <th className="px-6 py-3">Nome do Relatório</th>
                        <th className="px-6 py-3">Categoria</th>
                        <th className="px-6 py-3">Data de Geração</th>
                        <th className="px-6 py-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {reports.map((report, index) => (
                        <tr key={index} className="hover:bg-background/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-text-primary flex items-center gap-2">
                                <FileText className="w-4 h-4 text-muted" />
                                {report.name}
                            </td>
                            <td className="px-6 py-4 text-text-secondary">{report.type}</td>
                            <td className="px-6 py-4 text-text-secondary">{report.date}</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-primary hover:text-primary-hover font-medium text-sm flex items-center justify-end gap-1 w-full">
                                    <Download className="w-4 h-4" /> Baixar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </div>
    </div>
  );
};
