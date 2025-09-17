import React, { useState } from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as needed

function LoginForm() {
  const { login } = useAuth();
  // State variables to hold the user's input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // This function is called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    // Pass the state variables to the login function
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email} // The value of the input is controlled by the state
        onChange={(e) => setEmail(e.target.value)} // Update state on every change
        placeholder="Email"
      />
      <input
        type="password"
        value={password} // The value of the input is controlled by the state
        onChange={(e) => setPassword(e.target.value)} // Update state on every change
        placeholder="Password"
      />
      <button type="submit">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;