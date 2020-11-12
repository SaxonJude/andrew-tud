import React from 'react';

import footerStyles from './styles/footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <p  className={footerStyles.footer}>
            @2020 ANDREW TUDDERS - <a href="https://www.saxondp.me">crafted by Saxon</a>.
                {/* <i className="fab fa-dribbble"></i>
                <i className="fab fa-codepen"></i>
                <i className="fab fa-github"></i> */}
            </p>
        </footer>
    )
}

export default Footer;