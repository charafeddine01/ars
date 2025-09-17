// AuthProvider.tsx  (DEMO VERSION)
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

/* -------------------- DEMO SWITCH --------------------
   Set to true for a demo that *bypasses* DB/auth entirely.
   Set to false to restore your original Supabase flow.
------------------------------------------------------ */
const DEMO_MODE = true;

const DEMO_USER: User = {
  id: 'demo-1',
  email: 'demo@example.com',
  role: 'admin',
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    try {
      if (DEMO_MODE) {
        // DEMO: instantly show the app as "logged in"
        setUser(DEMO_USER);
        return;
      }

      // --- ORIGINAL (kept intact for later) ---
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: adminUser } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', session.user.email)
          .single();

        if (adminUser) {
          setUser({
            id: adminUser.id,
            email: adminUser.email,
            role: adminUser.role
          });
        }
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    if (DEMO_MODE) {
      // DEMO: accept anything, or enforce a simple password if you prefer:
      // if (password !== 'demo') throw new Error('Invalid credentials');
      setUser({ ...DEMO_USER, email: email || DEMO_USER.email });
      return;
    }

    // --- ORIGINAL (kept intact for later) ---
    try {
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (adminError || !adminUser) {
        throw new Error('Invalid credentials');
      }

      if (password !== 'admin') {
        throw new Error('Invalid credentials');
      }

      setUser({
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role
      });

      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', adminUser.id);

    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    if (!DEMO_MODE) {
      await supabase.auth.signOut();
    }
  };

  const value = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
