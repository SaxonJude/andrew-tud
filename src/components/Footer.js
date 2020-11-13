import React from 'react';

import footerStyles from './styles/footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footer}>
                <p>@2020 ANDREW TUDDERS - <a href="https://www.saxondp.me">crafted by Saxon</a>.</p>
                <a href="#top_of_index" className={footerStyles.link}>BACK TO TOP ^</a>
                {/* <i className="fab fa-dribbble"></i>
                <i className="fab fa-codepen"></i>
                <i className="fab fa-github"></i> */}
            </div>
        </footer>
    )
}

export default Footer;