import React from 'react';
import { Link } from 'gatsby';

import './styles/header.module.scss';
import headerStyles from './styles/header.module.scss';
import logo from '../images/logo.svg';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = (props) => {
    return(
        <div className={`${headerStyles.navContainer} navbar navbar-expand-lg`}>
            <Link to="/"><img src={logo} className={headerStyles.logo} alt="logo"/></Link>
            <div className={headerStyles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header;