import React from 'react';
import headerLady from '../images/header-lady.png';
import headerLogo from '../images/header-logo.png';
import '../styles/components/header.css';

function Header () {
    return ( 
    <header>
        <img className='header-lady' src={headerLady} alt="" />
        <img src={headerLogo} alt="" className="header-logo" />
    </header> );
}

export default Header ;