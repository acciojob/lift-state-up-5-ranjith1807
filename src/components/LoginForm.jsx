import React from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin();
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#d4edda', color: '#155724', marginTop: '20px' }}>
        <h3>You are logged in!.</h3>
      </div>
    );
  }

  return (
    
     <div>
        <h1>Parent Component</h1>
    <form onSubmit={handleSubmit} style={{padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
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

export default LoginForm;