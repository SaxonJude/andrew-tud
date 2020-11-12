import React from 'react';
import Header from './Header';
import Footer from './Footer';

import layoutStyles from './styles/layout.module.scss';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = props => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Header tab={props.tab} />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;