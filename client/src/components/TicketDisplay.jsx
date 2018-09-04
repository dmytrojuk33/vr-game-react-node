import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const divStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '1000px',
  background: 'rgba(238, 242, 245, 1)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  alignItems: 'center',
};

const TicketDisplay = ({ tickets }) => (
  <div style={divStyle} data-test="ticket-display">
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
