import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = (e) => {
        e.preventDefault();
        // Directly navigate to login page after the user clicks "Reset Password"
        navigate('/login'); // Navigates to the login page
    };

    return (
        <div className="forgot-password-container">
            <div className="back-icon" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                &lt;
            </div>
            <div className="login-ring">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="forgot-password-form-container">
                    <h2>Reset Password</h2>
                    <form onSubmit={handlePasswordReset}>
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
                                placeholder="Old Password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-inputBx">
                            <input
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-inputBx">
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-inputBx">
                            <input type="submit" value="Reset Password" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
