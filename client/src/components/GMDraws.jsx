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

};

const GMDraws = ({ recentBalls }) => (
  <div style={divContainerStyle} data-test="component-gmdraws">
    { recentBalls.map((num, idx) => (
      idx === 0
        ? <LastBall number={num} key={num} />
        : (
          <div style={divPrevioussBalls}>
            <h4>
              Previous Balls
            </h4>
            <PreviousBall number={num} key={num} />
          </div>
        )
    ))
    }
  </div>
);

GMDraws.propTypes = {
  recentBalls: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GMDraws;
