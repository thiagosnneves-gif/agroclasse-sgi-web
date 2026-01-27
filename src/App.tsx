import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./app/layout/AppShell";
import Dashboard from "./app/routes/Dashboard";
import Cadastros from "./app/routes/Cadastros";
import Comercial from "./app/routes/Comercial";
import Despesas from "./app/routes/Despesas";
import Estoque from "./app/routes/Estoque";
import Financeiro from "./app/routes/Financeiro";
import Relatorios from "./app/routes/Relatorios";
import Configuracoes from "./app/routes/Configuracoes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cadastros" element={<Cadastros />} />
        <Route path="comercial" element={<Comercial />} />
        <Route path="despesas" element={<Despesas />} />
        <Route path="estoque" element={<Estoque />} />
        <Route path="financeiro" element={<Financeiro />} />
        <Route path="relatorios" element={<Relatorios />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
