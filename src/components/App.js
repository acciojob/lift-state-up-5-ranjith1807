import React, { useState } from 'react';

// --- CHILD COMPONENT ---
function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Trigger the function passed from the parent to update the state
    onLogin(); 
  };

  // If the user is logged in, show a success message instead of the form
  if (isLoggedIn) {
    return (
      <div className="login-success">
        <p>You are logged in!</p>
      </div>
    );
  }

  // Otherwise, render the login form
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// --- PARENT COMPONENT ---
export default function App() {
  // 1. Define the state in the parent component
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Create a handler to update the state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Parent Component</h1>
      
      
      

      {/* 3. Pass the state and the updater function as props to the child */}
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}