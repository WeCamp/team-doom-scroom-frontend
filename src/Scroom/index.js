import React from 'react';
import { Container } from 'reactstrap';

import Room from './components/Room';

import './index.scss';

class Scroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { value: '1', preselected: null },
        { value: '2', preselected: null },
        { value: '3', preselected: null },
        { value: '5', preselected: null },
        { value: '8', preselected: null },
        { value: '13', preselected: null },
        { value: '20', preselected: null },
        { value: '40', preselected: null },
        { value: '100', preselected: null },
        { value: '?', preselected: null },
        { value: 'infinity', preselected: null },
        { value: 'coffee', preselected: null }
      ],
      loons: [
        {
          id: '1',
          pickedCard: null
        },
        {
          id: '2',
          pickedCard: null
        }
      ],
      me: '1'
    };
  }

  findMe(me, loons) {
    return loons.find(loon => {
      return loon.id === me;
    });
  }

  handleCardClick(value) {
    let newState = Object.assign({}, this.state);

    this.findMe(newState.me, newState.loons).pickedCard = value;

    newState.cards.forEach(function(card) {
      if (card.value === value) {
        card.preselected = true;
      } else {
        card.preselected = false;
      }
    });

    this.setState(newState);
  }

  render() {
    return (
      <Container>
        <Room cards={this.state.cards} loons={this.state.loons} onCardClick={value => this.handleCardClick(value)} />
      </Container>
    );
  }
}

export default Scroom;
