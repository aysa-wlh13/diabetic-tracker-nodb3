import React from 'react';
import './Header.css';
import newLogoSmall from './newLogoSmall.png'

function Header(){
    return(
        <div className='header'>
            <img src={newLogoSmall} alt='logo' height='50'/>

        </div>
    )
}

export default Header;