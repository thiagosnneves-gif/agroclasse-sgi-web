import { NavLink } from "react-router-dom";
import { useState } from "react";

const modules = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Cadastros", path: "/cadastros" },
  { label: "Comercial", path: "/comercial" },
  { label: "Despesas", path: "/despesas" },
  { label: "Estoque", path: "/estoque" },
  { label: "Financeiro", path: "/financeiro" },
  { label: "Relatórios", path: "/relatorios" },
  { label: "Configurações", path: "/configuracoes" },
];

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setMobileOpen((value) => !value);
  };

  const handleNavigate = () => {
    setMobileOpen(false);
  };

  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true" />
          <span>SGI Agroclasse</span>
        </div>
        <nav className="nav-links" aria-label="Menu principal">
          {modules.map((module) => (
            <NavLink
              key={module.path}
              to={module.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {module.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="mobile-toggle" onClick={handleToggle}>
          Menu
        </button>
      </div>
      {mobileOpen && (
        <nav className="mobile-menu" aria-label="Menu mobile">
          {modules.map((module) => (
            <NavLink
              key={module.path}
              to={module.path}
              onClick={handleNavigate}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {module.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default TopNav;
