import React from 'react';

const LoginForm = ({ onLogin }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>UserName:</label>
                  
                    <input id='username' type='text' /> 
                </div>
                
                <div>
                    <label htmlFor='pass'>Password:</label>
                    
                    <input id='pass' type='password' /> 
                </div>
                
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;