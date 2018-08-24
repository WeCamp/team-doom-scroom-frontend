import React from 'react';
import PropTypes from 'prop-types';

const NumberCard = props => (
  <div className={'card-pick' + props.selectedClass} onClick={props.onClick}>
    {props.card.value}
  </div>
);

NumberCard.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired,
    preselected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default NumberCard;
