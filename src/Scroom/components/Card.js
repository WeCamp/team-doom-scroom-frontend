import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = props => (
  <div className="card" onClick={props.onClick}>
    {props.card.value}
  </div>
)

Card.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Card
