// src/pages/admin/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';          // <-- add
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { SEO } from '../../utils/seo';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();                        // <-- add
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, user } = useAuth();                    // <-- make sure user is exposed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login(email, password);                      // resolves = success
      navigate('/admin');                                // <-- redirect where you want (e.g., /admin or /dashboard)
    } catch (err: any) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  // Optional: auto-redirect if already logged in
  useEffect(() => {
    if (user) navigate('/admin');
  }, [user, navigate]);

  // ...rest of your component
};
