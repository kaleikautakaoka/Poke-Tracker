import React from 'react';

export default function Nav() {
    const linkStyle = {border: '1px black', padding: '5px' };

    return (
        <nav className="navbar">
            <a href="#" style={linkStyle}>Home</a>
            <div class="dropdown">
                <button class="dropbtn" style={linkStyle}>Profile</button>
                <div class="dropdown-content">
                    <a href="#" style={linkStyle}>Login</a>
                    <a href="#" style={linkStyle}>Logout</a>
                    <a href="#" style={linkStyle}>Sign Up</a>
                </div>
            </div>
        </nav>
    );
}