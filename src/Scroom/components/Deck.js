import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Card from './Cards/Card';

const Deck = props => (
  <Row>
    {props.cards.map(card => (
      <Col xs="4" sm="3" key={card.value}>
        <Card card={card} onClick={() => props.onCardClick(card.value)} />
      </Col>
    ))}
  </Row>
);

Deck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      preselected: PropTypes.bool
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Deck;
