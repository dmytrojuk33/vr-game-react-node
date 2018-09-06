import React from 'react';
import PropTypes from 'prop-types';
import LastBall from './LastBall';
import PreviousBall from './PreviousBall';

const divContainerStyle = {
  background: 'rgba(225, 230, 234, 1)',
  width: '100%',
  minHeight: '100px',
};

const divPrevioussBalls = {
  display: 'inline-block',
  margin: '0 auto',
};

const GMDraws = ({ recentBalls }) => (
  <div style={divContainerStyle} data-test="component-gmdraws">
    { recentBalls[0]
    && <LastBall number={recentBalls[0]} />
    }
    { recentBalls[1]
    && (
    <div style={divPrevioussBalls} data-test="component-previous-balls">
      <h4 style={{ display: 'inline-block' }}>
        Previous Balls
      </h4>
      { recentBalls.slice(1).map(num => (
        <PreviousBall number={num} key={`pb${num}`} />
      ))
      }
    </div>
    ) }
  </div>
);

GMDraws.propTypes = {
  recentBalls: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GMDraws;
