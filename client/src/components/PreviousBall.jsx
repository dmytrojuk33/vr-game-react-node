import React from 'react';
import PropTypes from 'prop-types';

const divPreviousBallStyle = {

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
