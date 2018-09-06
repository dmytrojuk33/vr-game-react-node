import React from 'react';
import PropTypes from 'prop-types';

const divButtonsContainer = {
  paddingTop: '20px',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexwrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonDrawBallStyle = {
  display: 'block',
  margin: '5px',
  userSelect: 'none',
};

const buttonVerifyTicketsStyle = {
  display: 'block',
  margin: '5px',
  userSelect: 'none',
};

const buttonAutoMarkStyle = {
  display: 'block',
  margin: '5px',
  userSelect: 'none',
};

const buttonNewGameStyle = {
  display: 'block',
  margin: '5px',
  userSelect: 'none',
};

const UserButtons = ({
  drawBall, verifyTickets, newGame, autoMarkTickets, isJumped, isWinner,
}) => (
  <div style={divButtonsContainer} data-test="component-user-buttons">
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
      Call Bingo
    </button>
    <button
      type="button"
      style={buttonAutoMarkStyle}
      onClick={autoMarkTickets}
    >
      Mark All Drawn
    </button>
    <button
      type="button"
      style={buttonNewGameStyle}
      onClick={newGame}
    >
      New Game
    </button>
    {isJumped
    && (
      <div>
        You jumped the gun. You need all numbers marked on a ticket to win.
      </div>
    )}
    {isWinner
    && (
      <div>
        Congratulations! You Won!
      </div>
    )}
  </div>
);

UserButtons.propTypes = {
  drawBall: PropTypes.func.isRequired,
  verifyTickets: PropTypes.func.isRequired,
  autoMarkTickets: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
  isJumped: PropTypes.bool.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

export default UserButtons;
