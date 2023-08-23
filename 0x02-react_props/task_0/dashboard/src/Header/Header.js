import logo from '../assets/Holberton-logo.jpg';
import './header.css';
import React from 'react';

function Header() {
    return (
        <div>
          <div className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1>
              School dashboard    
            </h1>
          </div>
        </div>
    )
    }
    
    export default Header;