import { useLocation } from 'react-router-dom';
import { useAuth } from '../../core/auth/AuthContext';
import { User } from 'lucide-react';

const PAGE_TITLES: Record<string, string> = {
  '/app/dashboard': 'Dashboard',
  '/app/importacoes': 'Importações',
  '/app/relatorios': 'Relatórios',
  '/app/configuracoes': 'Configurações',
};

export const Topbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const title = PAGE_TITLES[location.pathname] || 'SGI Agroclasse';

  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-6 shrink-0">
      <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-text-secondary">
          <span className="font-medium">Empresa:</span> Agroclasse Demo
        </div>
        <div className="h-8 w-px bg-border mx-2" />
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-tint flex items-center justify-center text-primary">
                <User size={18} />
            </div>
            <div className="text-sm">
                <p className="font-medium text-text-primary">{user?.email}</p>
            </div>
            <button 
                onClick={signOut}
                className="text-xs text-muted hover:text-danger ml-2"
            >
                Sair
            </button>
        </div>
      </div>
    </header>
  );
};
