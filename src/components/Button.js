import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ButtonLink = props => (
    <span>
      {props.text ? props.text : null} <FontAwesomeIcon icon={props.icon} />
    </span>
);

export default ButtonLink;