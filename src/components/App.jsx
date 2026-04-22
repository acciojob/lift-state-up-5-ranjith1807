import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const handleLoginStatus = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      
     
      {isLoggedIn ? (
        <div>
          <h2 style={{ color: 'green' }}>You are logged in!.</h2>
        </div>
      ) : (

        <LoginForm onLogin={handleLoginStatus} />
      )}
    </div>
  );
};

export default App;