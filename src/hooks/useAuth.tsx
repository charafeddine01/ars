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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
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
    try {
      // First, check if an admin user with the provided email exists.
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (adminError || !adminUser) {
        throw new Error('Invalid credentials');
      }

      // This is the key change for your demo. It bypasses the password check,
      // allowing you to log in as long as the email exists in the database.
      // Remember to replace this with a proper password hashing check later.
      
      // The original password check has been commented out to allow any password.
      // if (password !== 'admin') {
      //   throw new Error('Invalid credentials');
      // }

      // Set the user state to simulate a successful login.
      setUser({
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role
      });

      // Update the last login timestamp for the user.
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
    await supabase.auth.signOut();
  };

  const value = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};