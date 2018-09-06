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
  maxWidth: '700px',
  width: '100%',
};

const TicketDisplay = ({ tickets, markTicket }) => (
  <div style={divStyle} data-test="component-ticket-display">
    { tickets.map((ticket, idx) => (
      <Ticket
        ticket={ticket}
        markTicket={markTicket}
        ticketId={idx}
        key={idx} // eslint-disable-line react/no-array-index-key
      />
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
  markTicket: PropTypes.func.isRequired,
};

export default TicketDisplay;
