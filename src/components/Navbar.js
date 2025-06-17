import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav style={{ left: '0', display: 'flex', justifyContent: 'flex-end', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
