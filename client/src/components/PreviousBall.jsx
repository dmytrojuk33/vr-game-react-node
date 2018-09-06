import React from 'react';
import PropTypes from 'prop-types';

const divPreviousBallStyle = {
  display: 'inline',
  margin: '0 10px',
  minHeight: '100px',
};

const PreviousBall = ({ number }) => (
  <div style={divPreviousBallStyle} data-test="component-previous-ball">
    {number}
  </div>
);

PreviousBall.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PreviousBall;
