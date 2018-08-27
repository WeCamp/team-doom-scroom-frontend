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
      {props.loons
        .sort(function(a, b) {
          if (a.pickedCard !== null) {
            return -1;
          } else if (b.pickedCard !== null) {
            return 1;
          } else {
            return 0;
          }
        })
        .map(loon => {
          // <Loon/>
          if (loon.id === props.me) {
            return (
              <div key={loon.id}>
                <strong>
                  {loon.id}: {loon.pickedCard}
                </strong>
              </div>
            );
          } else {
            return (
              <div key={loon.id}>
                {loon.id}: {loon.pickedCard}
              </div>
            );
          }
        })}
    </Col>
  </Row>
);

Room.propTypes = {
  me: PropTypes.string.isRequired,
  loons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pickedCard: PropTypes.string
    })
  ),
  onCardClick: PropTypes.func.isRequired
};

export default Room;
