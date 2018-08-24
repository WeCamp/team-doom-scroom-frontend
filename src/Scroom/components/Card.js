import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faInfinity } from '@fortawesome/free-solid-svg-icons'

import './Card.scss'

const Card = props => {

  if (props.card.value === 'coffee') {
    return (
      <div className={'cardpick'} onClick={props.onClick}>
        <FontAwesomeIcon icon={faCoffee}/>
      </div>
    )
  }
  else if (props.card.value === 'infinity') {
    return (
      <div className={'cardpick'} onClick={props.onClick}>
        <FontAwesomeIcon icon={faInfinity}/>
      </div>
    )
  } else {
    return (
      <div className={'cardpick'} onClick={props.onClick}>
        {props.card.value}
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Card
