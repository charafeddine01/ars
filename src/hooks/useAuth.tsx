import React from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as needed

function LoginButton() {
  const { login } = useAuth();

  const handleLogin = () => {
    // You would get the email and password from your form inputs here
    const email = 'your-email@example.com'; 
    const password = 'your-password';
    login(email, password);
  };

  return (
    <button onClick={handleLogin}>
      Sign In
    </button>
  );
}