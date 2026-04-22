import React, { useState } from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin();
  };

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
      {isLoggedIn && (
        <div style={{ padding: '10px', backgroundColor: '#d4edda', color: '#155724', marginBottom: '15px', borderRadius: '4px' }}>
          <strong>Success!</strong> You are logged in!.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Log In
        </button>
      </form>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Parent Component</h1>

      <LoginForm 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin} 
      />
    </div>
  );
}

export default App;