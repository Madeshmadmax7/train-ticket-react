import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditAccount.css';

function EditAccount() {
    const [accountDetails, setAccountDetails] = useState({ username: '', email: '', phone: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone');

        if (username && email) {
            setAccountDetails({
                username: username,
                email: email,
                phone: phone || '' // Fallback if phone is not set in localStorage
            });
        } else {
            console.error('User details not found in local storage.');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handleSaveChanges = () => {
        // Save updated details to localStorage
        localStorage.setItem('username', accountDetails.username);
        localStorage.setItem('email', accountDetails.email);
        localStorage.setItem('phone', accountDetails.phone);

        alert('Account details updated successfully');
        navigate('/account-management'); // Redirect to account management after saving changes
    };

    return (
        <div className='poi-edit-account'>
            <nav className="navbar">
                <div className="logo">BookTrains</div>
                <div className="navbar-links">
                    <a href="/home" className="navbar-link">Home</a>
                    <a href="/about-us" className="navbar-link">About Us</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                    <a href="/notifications" className="navbar-link">Notification</a>
                </div>
            </nav>
            <div className="poi-account-details">
                <h2>Edit Account</h2>
                <div className="poi-input-field">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={accountDetails.username}
                        onChange={handleInputChange}
                        className="poi-input"
                    />
                </div>
                <div className="poi-input-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={accountDetails.email}
                        onChange={handleInputChange}
                        className="poi-input"
                    />
                </div>
                <div className="poi-input-field">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={accountDetails.phone}
                        onChange={handleInputChange}
                        className="poi-input"
                    />
                </div>
                <button onClick={handleSaveChanges} className='poi-buttons'>Save Changes</button>
            </div>
        </div>
    );
}

export default EditAccount;
