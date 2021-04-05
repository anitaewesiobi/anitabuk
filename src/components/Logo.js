import React from 'react';
import logo from '../assets/abc_logo.svg'

function Logo(props) {
    return (
        <header>
        <img src={`${logo}`} alt='website logo'></img>
        <button>Contact Us</button>
    </header>
    );
}

export default Logo;