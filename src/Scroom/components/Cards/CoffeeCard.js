import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const CoffeeCard = props => (
  <div className={'card-pick' + props.selectedClass} onClick={props.onClick}>
    <FontAwesomeIcon icon={faCoffee} />
  </div>
);

CoffeeCard.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired,
    preselected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default CoffeeCard;
