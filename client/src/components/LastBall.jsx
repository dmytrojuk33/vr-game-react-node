import React from 'react';
import PropTypes from 'prop-types';


const divContainerStyle = {
  minHeight: '100px',
  display: 'inline-block',
  margin: '0 20%',
};

const headerStyle = {
  display: 'inline-block',
};

const divLastBallStyle = {
  display: 'inline-block',
  margin: '0 10px',
};

const LastBall = ({ number }) => (
  <div style={divContainerStyle} data-test="component-last-ball">
    <h4 style={headerStyle}>
      Last Ball
    </h4>
    <div style={divLastBallStyle}>
      {number}
    </div>
  </div>
);

LastBall.propTypes = {
  number: PropTypes.number.isRequired,
};

export default LastBall;
