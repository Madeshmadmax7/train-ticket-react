import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Store dummy data in localStorage to simulate successful login
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        onLogin(); // Simulate login action
        navigate('/home'); // Redirect to home page
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className='login-container'>
            <div className="login-ring">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="login-form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="login-inputBx">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-inputBx">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-inputBx">
                            <input type="submit" value="Sign in" />
                        </div>
                    </form>
                    <div className="login-links">
                        <a onClick={() => navigate('/forgot-password')} style={{ cursor: 'pointer' }}>Forget Password</a>
                        <button onClick={handleSignup} className="signup-button">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
