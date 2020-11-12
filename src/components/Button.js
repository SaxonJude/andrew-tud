import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';

const ButtonLink = props => (
    <Link to={props.url}>
      {props.text ? props.text : null} <FontAwesomeIcon icon={props.icon} />
    </Link>
);

export default ButtonLink;