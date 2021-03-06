import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const UnknownCard = props => (
  <div className={'card-pick' + props.selectedClass} onClick={props.onClick}>
    <FontAwesomeIcon icon={faQuestion} />
  </div>
);

UnknownCard.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired,
    preselected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default UnknownCard;
