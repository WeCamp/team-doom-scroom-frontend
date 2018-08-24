import React from 'react';
import { Container, Row } from 'reactstrap';

import Deck from './components/Deck';

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
          key: 'foo',
          name: 'Foo',
          email: '',
          position: 0,
          pick: null
        }
      ]
    };
  }

  handleCardClick(value) {
    let newState = Object.assign({}, this.state);

    newState.loons[0].pick = value;

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
        <Row>Pick: {this.state.loons[0].pick}</Row>
        <Deck cards={this.state.cards} onCardClick={value => this.handleCardClick(value)} />
      </Container>
    );
  }
}

export default Scroom;
