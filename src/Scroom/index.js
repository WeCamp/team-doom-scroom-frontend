import React from 'react';
import Card from './components/Cards/Card';
import { Container, Row, Col } from 'reactstrap';
import './index.scss';

class Scroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { value: '1', preselected: false },
        { value: '2', preselected: false },
        { value: '3', preselected: false },
        { value: '5', preselected: false },
        { value: '8', preselected: false },
        { value: '13', preselected: false },
        { value: '20', preselected: false },
        { value: '40', preselected: false },
        { value: '100', preselected: false },
        { value: '?', preselected: false },
        { value: 'infinity', preselected: false },
        { value: 'coffee', preselected: false }
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
        <Row>
          {this.state.cards.map(card => (
            <Col xs="6" sm="4" key={card.value}>
              <Card card={card} onClick={() => this.handleCardClick(card.value)} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Scroom;
