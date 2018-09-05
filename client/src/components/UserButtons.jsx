import React from 'react';
import PropTypes from 'prop-types';

const divButtonsContainer = {
  paddingTop: '20px',
  width: '100%',
  textAlign: 'center',
};

const buttonDrawBallStyle = {
  display: 'block',
  margin: '2px auto',
};

const buttonVerifyTicketsStyle = {
  display: 'block',
  margin: '2px auto',
};

const UserButtons = ({ drawBall, verifyTickets }) => (
  <div style={divButtonsContainer}>
    <button
      type="button"
      style={buttonDrawBallStyle}
      onClick={drawBall}
    >
      Draw Ball
    </button>
    <button
      type="button"
      style={buttonVerifyTicketsStyle}
      onClick={verifyTickets}
    >
      Verify Tickets
    </button>
  </div>
);

UserButtons.propTypes = {
  drawBall: PropTypes.func.isRequired,
  verifyTickets: PropTypes.func.isRequired,
};

export default UserButtons;
