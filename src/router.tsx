import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedLayout } from './components/layout/ProtectedLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Importacoes } from './pages/Importacoes';
import { Relatorios } from './pages/Relatorios';
import { Configuracoes } from './pages/Configuracoes';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'importacoes',
        element: <Importacoes />,
      },
      {
        path: 'relatorios',
        element: <Relatorios />,
      },
      {
        path: 'configuracoes',
        element: <Configuracoes />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);
