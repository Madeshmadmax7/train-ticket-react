import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import img from './user2.png';

function HomePage({ onLogout }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const navigate = useNavigate();

    // Checking if the user is logged in (for frontend purposes only)
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('token') ? true : false;
        setIsLoggedIn(loggedInStatus);
    }, []);

    // Handle clicking on the user icon
    const handleUserIconClick = () => {
        if (isLoggedIn) {
            navigate('/user-account'); // If logged in, navigate to the user's account page
        } else {
            navigate('/login'); // If not logged in, navigate to the login page
        }
    };

    return (
        <div className='homepage-container'>
            <nav className="navbar">
                <div className="logo">BookTrains</div>
                <div className="navbar-links">
                    <a href="/home" className="navbar-link">Home</a>
                    <a href="/about-us" className="navbar-link">About Us</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                    <a href="/notifications" className="navbar-link">Notification</a>
                    <a className='navbar-link' onClick={handleUserIconClick}>
                        <img src={img} alt="User Icon" className="navbar-img" />
                    </a>
                </div>
            </nav>
            <div className="home-banner-area">
                <h2>Book Your Tickets Here!</h2>
                <div className="home-banner-area-buttons">
                    <button className="home-btn" onClick={() => navigate('/route-search')}>Book here</button>
                    <button className="home-btn" onClick={() => navigate('/train-map')}>See routes</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
