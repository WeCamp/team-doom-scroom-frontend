import React from 'react';
import PropTypes from 'prop-types';

import NumberCard from './NumberCard';
import UnknownCard from './UnknownCard';
import InfinityCard from './InfinityCard';
import CoffeeCard from './CoffeeCard';

import './Card.scss';

const Card = props => {
  if (props.card.value === '?') {
    return <UnknownCard card={props.card} onClick={props.onClick} />;
  } else if (props.card.value === 'infinity') {
    return <InfinityCard card={props.card} onClick={props.onClick} />;
  } else if (props.card.value === 'coffee') {
    return <CoffeeCard card={props.card} onClick={props.onClick} />;
  } else {
    return <NumberCard card={props.card} onClick={props.onClick} />;
  }
};

Card.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
