import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import './styles/header.module.scss';
import headerStyles from './styles/header.module.scss';
import logo from '../images/logo.svg';
import ButtonLink from './Button';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
  
    return windowSize;
}

const Header = props => {
    const size = useWindowSize();

    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    

    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(
                typeof window !== 'undefined' &&
                typeof window.addEventListener !== 'undefined'
            ) {
                window.addEventListener('scroll', scrolling);
            }
        }
    });

    const scrolling = () => {
        window.scrollY > 0 ? setScroll(true) : setScroll(false) ;
    };

    return(
        <div className={`${scroll ? headerStyles.sticky : headerStyles.navContainer} navbar navbar-expand-lg`}>
            <Link to="/"><img src={`${scroll ? logo : logo}`} className={headerStyles.logo} alt="logo"/></Link>
            <div className={` ${headerStyles.navLinks} ${menu && size.width < 860 ? headerStyles.menuToggle : ''}`}>
                <div 
                    onClick={() => {
                        setMenu(!menu);
                        console.log(size.width);
                    }}
                    className={headerStyles.hamburger}
                ><ButtonLink icon={'bars'} /></div>
                <section>
                    <Link to="/" className={`${props.tab === 'home' ? headerStyles.active : ''}`}>Home</Link>
                    <a href='/#services_section'>Services</a>
                    <a href='/#contact_form'>Contact</a>
                    <Link to="/about" className={`${props.tab === 'about' ? headerStyles.active : ''}`}>About</Link>
                </section>
            </div>
        </div>
    )
}

export default Header;
