import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Menu structure definition
const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    children: [] 
  },
  {
    label: "Cadastros",
    path: "/cadastros",
    children: [
      { label: "Clientes", path: "/cadastros/clientes" },
      { label: "Fornecedores", path: "/cadastros/fornecedores" },
      { label: "Produtos", path: "/cadastros/produtos" },
    ]
  },
  {
    label: "Comercial",
    path: "/comercial",
    children: [
      { label: "Pedidos", path: "/comercial/pedidos" },
      { label: "Orçamentos", path: "/comercial/orcamentos" },
    ]
  },
  {
    label: "Despesas",
    path: "/despesas",
    children: [
      { label: "Contas a Pagar", path: "/despesas/contas-pagar" },
    ]
  },
  {
    label: "Estoque",
    path: "/estoque",
    children: [
      { label: "Movimentações", path: "/estoque/movimentacoes" },
      { label: "Saldos", path: "/estoque/saldos" },
    ]
  },
  {
    label: "Financeiro",
    path: "/financeiro",
    children: [
      { label: "Fluxo de Caixa", path: "/financeiro/fluxo-caixa" },
      { label: "Bancos", path: "/financeiro/bancos" },
    ]
  },
  {
    label: "Relatórios",
    path: "/relatorios",
    children: [
      { label: "Geral", path: "/relatorios/geral" },
    ]
  },
  {
    label: "Configurações",
    path: "/configuracoes",
    children: [
      { label: "Usuários", path: "/configuracoes/usuarios" },
      { label: "Sistema", path: "/configuracoes/sistema" },
    ]
  },
];

const TopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="bg-gray-700 border-b border-gray-600 shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-end h-20 items-center"> 
          
          {/* Logo and Brand - Positioned Absolute to overlap the header */}
          <div className="absolute -top-9 left-4 z-50">
            <img 
              className="h-40 w-auto object-contain drop-shadow-md" 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/xiN0ar6vO5xH3oeO/agroclasse_logo_final-QVi7WNIYzK7iom96.png" 
              alt="Agroclasse Logo" 
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 items-center justify-end space-x-1" ref={navRef}>
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center
                    ${activeDropdown === item.label || location.pathname.startsWith(item.path)
                      ? "text-white bg-gray-900"
                      : "text-gray-300 hover:text-white hover:bg-gray-600"
                    }`}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? "transform rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children.length > 0 && activeDropdown === item.label && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn z-50">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary ${isActive ? "bg-gray-50 text-primary font-medium" : ""}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
                
                {/* Fallback for items with no children */}
                {item.children.length === 0 && (
                  <NavLink
                     to={item.path}
                     className="absolute inset-0 opacity-0"
                     aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => { alert('Menu mobile em construção'); }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
