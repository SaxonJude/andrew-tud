import React from 'react';

import iconStyles from './styles/iconCard.module.scss';

import '../utils/fontawesome';
import ButtonLink from '../components/Button';

const IconCard = props => {
    return (
        <div className={iconStyles.card}>
            <span><ButtonLink icon={`${props.icon}`} /></span>
            <h3>{props.title}</h3>
            <p>Maecenas tempus, tellus eget 
condimentum rhoncus, sem quam 
semper, sit amet adipisc.</p>
        </div>
    );
}

export default IconCard;