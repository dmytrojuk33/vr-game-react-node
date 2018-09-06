import React from 'react';
import PropTypes from 'prop-types';


const divButtonsContainer = {
  color: 'rgba(90, 102, 113, 1)',
  minHeight: '65px',
  paddingTop: '10px',
  textAlign: 'center',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: 'white',
  border: '1px solid transparent',
  borderRadius: '2px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
  color: 'rgba(90, 102, 113, 1)',
  cursor: 'pointer',
  display: 'inline',
  margin: '5px',
  userSelect: 'none',
};

const divJumpedStyle = {
  color: 'rgba(90, 102, 113, 1)',
};

const divWinnerStyle = {
  color: 'rgba(90, 102, 113, 1)',
};

const UserButtons = ({
  drawBall, verifyTickets, newGame, autoMarkTickets, isJumped, isWinner,
}) => (
  <div style={divButtonsContainer} data-test="component-user-buttons">
    <button
      style={buttonStyle}
      type="button"
      onClick={drawBall}
    >
      Draw Ball
    </button>
    <button
      style={buttonStyle}
      type="button"
      onClick={verifyTickets}
    >
      Call Bingo
    </button>
    <button
      style={buttonStyle}
      type="button"
      onClick={autoMarkTickets}
    >
      Auto Mark
    </button>
    <button
      style={buttonStyle}
      type="button"
      onClick={newGame}
    >
      New Game
    </button>
    {isJumped
    && (
      <div style={divJumpedStyle}>
        You jumped the gun.
        <br />
        You need all numbers marked on a ticket to win.
      </div>
    )}
    {isWinner
    && (
      <div style={divWinnerStyle}>
        Congratulations!!!
        <br />
        You Won!!!
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
