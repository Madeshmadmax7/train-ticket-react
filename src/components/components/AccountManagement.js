import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountManagement.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

function AccountManagement() {
    const [accountDetails, setAccountDetails] = useState({});
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (username && email && storedPassword) {
            setAccountDetails({
                username,
                email,
                password: storedPassword
            });
        } else {
            console.error('User details not found in local storage.');
        }
    }, []);

    const handleDeleteAccount = () => {
        const storedPassword = localStorage.getItem('password');

        if (password !== storedPassword) {
            alert('Password does not match.');
            return;
        }

        // Remove user data from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('password');

        alert('Account deleted successfully');
        navigate('/login'); // Redirect to login page after deletion
    };

    const handleEditAccount = () => {
        navigate('/edit-account');
    };

    return (
        <div className='jkl-account-management'>
            <nav className="navbar">
                <div className="logo">BookTrains</div>
                <div className="navbar-links">
                    <a href="/home" className="navbar-link">Home</a>
                    <a href="/about-us" className="navbar-link">About Us</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                    <a href="/notifications" className="navbar-link">Notification</a>
                </div>
            </nav>
            <div className="jkl-account-details">
                <h2>Account Management</h2>
                <p><strong>Username:</strong> {accountDetails.username}</p>
                <p><strong>Email:</strong> {accountDetails.email}</p>
                <p><strong>Password:</strong> {accountDetails.password}</p>
                <div className="jkl-account-actions">
                    <button onClick={handleEditAccount} className='jkl-buttons'><FaEdit /></button>
                    <button onClick={handleDeleteAccount} className='jkl-buttons'><FaTrash /></button>
                </div>
                <div className="jkl-password-confirmation">
                    <h4>Confirm Password to Delete</h4>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='jkl-password'
                    />
                </div>
            </div>
        </div>
    );
}

export default AccountManagement;
