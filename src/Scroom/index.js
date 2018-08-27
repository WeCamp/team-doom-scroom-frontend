import React from 'react';
import { Container } from 'reactstrap';

import Room from './components/Room';

import './index.scss';

class Scroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      server: 'http://192.168.1.78:8000',
      roomId: 'd625229f-8b12-4089-93d0-d1ac217159bb',
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
        { value: 'infinite', preselected: null },
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

  enterRoom() {
    const url = this.state.server + '/room/' + this.state.roomId + '/enter';

    fetch(url, {
      method: 'post',
      body: JSON.stringify({})
    })
      .then(rawResult => rawResult.json())
      .then(
        result => {
          console.log(result);

          let newState = Object.assign({}, this.state);
          newState.me = result.id;

          this.setState(newState);
          this.interval = setInterval(() => this.poll(), 1000);
        },
        error => {
          console.log(error);
        }
      );
  }

  pickCard(loon) {
    const url = this.state.server + '/room/' + this.state.roomId + '/card';

    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        id: loon.id,
        pickedCard: loon.pickedCard
      })
    })
      .then(rawResult => rawResult.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  }

  poll() {
    const url = this.state.server + '/room/' + this.state.roomId + '/poll';

    fetch(url, {
      method: 'post',
      body: JSON.stringify({})
    })
      .then(rawResult => rawResult.json())
      .then(
        result => {
          console.log(result);

          let newState = Object.assign({}, this.state);
          newState.loons = result.loons;

          this.setState(newState);
        },
        error => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    this.enterRoom();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleCardClick(value) {
    let newState = Object.assign({}, this.state);
    let loon = this.findMe(newState.me, newState.loons);

    loon.pickedCard = value;

    newState.cards.forEach(function(card) {
      if (card.value === value) {
        card.preselected = true;
      } else {
        card.preselected = false;
      }
    });

    this.setState(newState);
    this.pickCard(loon);
  }

  render() {
    return (
      <Container>
        <Room cards={this.state.cards} loons={this.state.loons} me={this.state.me} onCardClick={value => this.handleCardClick(value)} />
      </Container>
    );
  }
}

export default Scroom;
