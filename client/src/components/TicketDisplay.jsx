import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const divStyle = {
  alignItems: 'center',
  background: 'rgba(238, 242, 245, 1)',
  display: 'flex',
  flexWrap: 'wrap',
  height: '88%',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: '800px',
  paddingTop: '10px',
  width: '100%',
};

const TicketDisplay = ({ tickets }) => (
  <div style={divStyle} data-test="component-ticket-display">
    { tickets.map((ticket, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Ticket ticket={ticket} key={`ticketNumber${idx}`} />
    ))}
  </div>
);

TicketDisplay.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          num: PropTypes.number,
          marked: PropTypes.bool,
          col: PropTypes.string,
        }),
      ),
    ),
  ).isRequired,
};

export default TicketDisplay;
