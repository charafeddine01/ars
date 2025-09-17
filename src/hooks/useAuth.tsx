import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// Supabase is no longer needed for login since we're bypassing the DB
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

  // We are skipping the database check and assuming no user on mount
  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // 🔴 Bypassing all database connections and logic for demo purposes.
      // This hardcodes a 'logged-in' state with a dummy user.
      const dummyUser: User = {
        id: 'demo-user-1234',
        email: email, // Use the email provided by the user
        role: 'admin' // Hardcode the role to 'admin'
      };

      // Simulate a successful login by setting the dummy user.
      setUser(dummyUser);

      // No database calls are made here.
      // The update to 'last_login' has been removed.
    } catch (error) {
      // Since there are no DB calls, this catch block is unlikely to be triggered.
      throw error;
    }
  };

  const logout = async () => {
    // Clear the user state to simulate logging out.
    setUser(null);
    // The Supabase logout call is removed as we're not using it.
    // await supabase.auth.signOut();
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