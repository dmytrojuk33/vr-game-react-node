import React from 'react';
import PropTypes from 'prop-types';


const divContainerStyle = {
  background: 'rgba(225, 230, 234, 1)',
  width: '100%',
  minHeight: '100px',
};

const headerStyle = {

};

const divLastBallStyle = {

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
