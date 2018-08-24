import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

const InfinityCard = props => (
  <div className={'cardpick'} onClick={props.onClick}>
    <FontAwesomeIcon icon={faInfinity} />
  </div>
);

InfinityCard.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default InfinityCard;
