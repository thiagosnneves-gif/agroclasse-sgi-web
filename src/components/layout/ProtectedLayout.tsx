import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../core/auth/AuthContext';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
