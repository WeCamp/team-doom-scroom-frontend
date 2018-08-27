import React from 'react';
import PropTypes from 'prop-types';

import NumberCard from './NumberCard';
import UnknownCard from './UnknownCard';
import InfinityCard from './InfinityCard';
import CoffeeCard from './CoffeeCard';

import './Card.scss';

const Card = props => {
  let selectedClass = '';

  if (props.card.preselected === true) {
    selectedClass = ' pre-selected';
  } else if (props.card.preselected === false) {
    selectedClass = ' not-selected';
  }

  if (props.card.value === '?') {
    return <UnknownCard card={props.card} onClick={props.onClick} selectedClass={selectedClass} />;
  } else if (props.card.value === 'infinite') {
    return <InfinityCard card={props.card} onClick={props.onClick} selectedClass={selectedClass} />;
  } else if (props.card.value === 'coffee') {
    return <CoffeeCard card={props.card} onClick={props.onClick} selectedClass={selectedClass} />;
  } else {
    return <NumberCard card={props.card} onClick={props.onClick} selectedClass={selectedClass} />;
  }
};

Card.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired,
    preselected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
