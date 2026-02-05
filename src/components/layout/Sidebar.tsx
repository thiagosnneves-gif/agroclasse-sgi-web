import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileInput, FileText, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../core/auth/AuthContext';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Importações', path: '/app/importacoes', icon: FileInput },
  { label: 'Relatórios', path: '/app/relatorios', icon: FileText },
  { label: 'Configurações', path: '/app/configuracoes', icon: Settings },
];

export const Sidebar = () => {
  const { signOut } = useAuth();

  return (
    <aside className="w-64 bg-surface border-r border-border flex flex-col h-full">
      <div className="h-32 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/xiN0ar6vO5xH3oeO/agroclasse_logo_final-QVi7WNIYzK7iom96.png" alt="Agroclasse" className="h-24" />
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-input text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary-tint text-primary"
                  : "text-text-secondary hover:bg-background hover:text-text-primary"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button 
          onClick={signOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-danger hover:bg-red-50 rounded-input transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>
    </aside>
  );
};
