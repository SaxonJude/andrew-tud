import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import aboutStyles from './styles/about.module.scss';
import imgOne from '../images/imgOne.jpg';
import ButtonLink from '../components/Button';

const About = () => {
    return (
        <div>
            <Layout tab="about">
                <div className={aboutStyles.aboutContainer}>
                    <div className={aboutStyles.aboutCard}>
                        <div className={aboutStyles.aboutLeft}>
                            <img src={imgOne} alt="Andrew"/>    
                        </div>
                        <div className={aboutStyles.aboutRight}>
                            <section>
                                <h5>25</h5>
                                <h4>About Me</h4>
                            </section>
                            <h3>Andrew Tudders</h3>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. 
                                </p>
                                <p>​
                                    Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                    occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                    </p> 
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            <a href='/#contact_form' className={aboutStyles.smallButton}>Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;