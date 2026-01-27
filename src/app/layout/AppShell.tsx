import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const AppShell = () => {
  return (
    <div className="app-shell">
      <TopNav />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppShell;
