import { LucideIcon, DollarSign, TrendingUp, TrendingDown, ShoppingBag, PieChart } from 'lucide-react';
import { cn } from '../lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: LucideIcon;
  iconColor?: string;
}

const StatCard = ({ title, value, trend, trendUp, icon: Icon, iconColor = "text-primary" }: StatCardProps) => (
  <div className="bg-surface p-6 rounded-card border border-border shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-text-secondary">{title}</p>
        <h3 className="text-2xl font-bold text-text-primary mt-1">{value}</h3>
      </div>
      <div className={cn("p-3 rounded-full bg-opacity-10", iconColor.replace('text-', 'bg-'))}>
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>
    </div>
    {trend && (
        <div className="mt-4 flex items-center text-sm">
            <span className={cn("font-medium flex items-center", trendUp ? "text-success" : "text-danger")}>
                {trendUp ? <TrendingUp className="w-4 h-4 mr-1"/> : <TrendingDown className="w-4 h-4 mr-1"/>}
                {trend}
            </span>
            <span className="text-muted ml-2">vs. mês anterior</span>
        </div>
    )}
  </div>
);

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Receita Total" 
            value="R$ 1.250.000" 
            trend="+12%" 
            trendUp={true} 
            icon={DollarSign}
            iconColor="text-success"
        />
        <StatCard 
            title="CMV" 
            value="R$ 850.000" 
            trend="-2%" 
            trendUp={true} 
            icon={ShoppingBag}
            iconColor="text-info"
        />
        <StatCard 
            title="Despesas Operacionais" 
            value="R$ 150.000" 
            trend="+5%" 
            trendUp={false} 
            icon={PieChart}
            iconColor="text-warning"
        />
        <StatCard 
            title="Resultado Líquido" 
            value="R$ 250.000" 
            trend="+8%" 
            trendUp={true} 
            icon={TrendingUp}
            iconColor="text-primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Placeholder Charts */}
        <div className="bg-surface p-6 rounded-card border border-border shadow-sm min-h-[300px] flex items-center justify-center text-muted">
            Gráfico de Receita x Despesas (Placeholder)
        </div>
        <div className="bg-surface p-6 rounded-card border border-border shadow-sm min-h-[300px] flex items-center justify-center text-muted">
            Distribuição de Custos (Placeholder)
        </div>
      </div>
    </div>
  );
};
