import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
  // 1. Implement parent component with isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to update the state to true
  const handleLoginStatus = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Lifting State Up Demo</h1>
      
      {/* Conditionally render based on the parent's state */}
      {isLoggedIn ? (
        <div>
          <h2 style={{ color: 'green' }}>Welcome back! You are logged in.</h2>
        </div>
      ) : (
        /* 2 & 3. Render child and pass down the state-updating function as a prop */
        <LoginForm onLogin={handleLoginStatus} />
      )}
    </div>
  );
};

export default App;