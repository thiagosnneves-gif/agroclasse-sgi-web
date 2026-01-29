import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../core/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/app/dashboard');
    } catch (err: any) {
      console.error(err);
      setError('Credenciais inválidas. Verifique seu e-mail e senha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
            <div className="mb-6">
                 <img src="/images/logo_vertical.svg" alt="Logo Agroclasse" className="h-24 w-auto" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                SGI | Agroclasse
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
                Gestão Gerencial Integrada
            </p>
        </div>

        <div className="bg-surface p-8 rounded-card shadow-sm border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-danger text-sm rounded-input flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-border rounded-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                  Senha
                </label>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-hover">
                  Esqueci minha senha
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-border rounded-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full flex justify-center py-2.5 px-4 border border-transparent rounded-input text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Entrar"}
            </button>
          </form>
        </div>
        
        <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Agroclasse. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};
