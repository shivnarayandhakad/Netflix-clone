import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix Logo"
            />
            <div className="header_right">
                <select className="header_language">
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
                <button className="header_signin">Sign In</button>
            </div>
        </div>
    );
}

export default Header;

