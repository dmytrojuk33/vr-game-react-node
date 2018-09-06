import React from 'react';
import PropTypes from 'prop-types';

const divPreviousBallStyle = {
  background: 'white',
  border: '1px dotted rgba(90, 102, 113, 1)',
  color: 'rgba(90, 102, 113, 1)',
  display: 'inline',
  margin: '0 10px',
  padding: '3px',
  borderRadius: '50%',
};

const PreviousBall = ({ number }) => (
  <div style={divPreviousBallStyle} data-test="component-previous-ball">
    {number < 10 ? `0${number}` : number}
  </div>
);

PreviousBall.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PreviousBall;
