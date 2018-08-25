import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Deck from './Deck';

import './Room.scss';

const Room = props => (
  <Row className="room">
    <Col xs="12" md="8">
      <Deck cards={props.cards} onCardClick={props.onCardClick} />
    </Col>
    <Col className="loons" xs="12" md="4">
      {props.loons.map(loon => (
        // <Loon/>
        <div key={loon.id}>
          {loon.id}: {loon.pickedCard}
        </div>
      ))}
    </Col>
  </Row>
);

Room.propTypes = {
  loons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pickedCard: PropTypes.string
    })
  ),
  onCardClick: PropTypes.func.isRequired
};

export default Room;
