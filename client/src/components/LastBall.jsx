import React from 'react';
import PropTypes from 'prop-types';


const divContainerStyle = {
  display: 'inline-block',
  height: '100px',
  margin: '0 auto',
  textAlign: 'center',
  width: '50%',
};

const headerStyle = {
  color: 'rgba(90, 102, 113, 1)',
  display: 'inline-block',
};

const divLastBallStyle = {
  background: 'white',
  border: '1px dotted rgba(90, 102, 113, 1)',
  borderRadius: '50%',
  color: 'rgba(90, 102, 113, 1)',
  display: 'inline-block',
  fontSize: '24px',
  lineHeight: '1.5rem',
  margin: '0 10px',
  padding: '4px',
};

const LastBall = ({ number }) => (
  <div style={divContainerStyle} data-test="component-last-ball">
    <h4 style={headerStyle}>
      Last Ball
    </h4>
    <div style={divLastBallStyle}>
      {number < 10 ? `0${number}` : number}
    </div>
  </div>
);

LastBall.propTypes = {
  number: PropTypes.number.isRequired,
};

export default LastBall;
