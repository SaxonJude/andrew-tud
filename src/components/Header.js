import React from 'react';
import { Link } from 'gatsby';

import './styles/header.module.scss';
import headerStyles from './styles/header.module.scss';
import logo from '../images/logo.svg';

const Header = props => {
    return(
        <div className={`${headerStyles.navContainer} navbar navbar-expand-lg`}>
            <Link to="/"><img src={logo} className={headerStyles.logo} alt="logo"/></Link>
            <div className={headerStyles.navLinks}>
                <Link to="/" className={`${props.tab === 'home' ? headerStyles.active : ''}`}>Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
                <Link to="/about" className={`${props.tab === 'about' ? headerStyles.active : ''}`}>About</Link>
            </div>
        </div>
    )
}

export default Header;