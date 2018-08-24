import React from 'react'
import Card from './components/Card'

class Scroom extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: [
        {value: '1', preselected: false},
        {value: '2'},
        {value: '3'},
        {value: '5'},
        {value: '8'},
        {value: '13'},
        {value: '20'},
        {value: '40'},
        {value: '100'},
        {value: '?'},
        {value: 'infinity'},
        {value: 'coffee'}
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
    }
  }

  handleCardClick (value) {
    let newState = Object.assign({}, this.state)
    newState.loons[0].pick = value
    this.setState(newState)
  }

  render () {
    return (
      <div className="cardcontainer">
        <div>Pick: {this.state.loons[0].pick}</div>
        {this.state.cards.map(card => (
          <Card card={card} onClick={() => this.handleCardClick(card.value)}/>
        ))}
      </div>
    )
  }
}

export default Scroom
