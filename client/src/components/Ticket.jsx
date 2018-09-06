import React from 'react';
import PropTypes from 'prop-types';

const ulStyle = {
  border: '1px solid rgba(226, 226, 228, 1)',
  height: '200px',
  listStyleType: 'none',
  margin: '20px',
  padding: 0,
  width: '200px',
};

const liStyle = {
  background: 'white',
  border: '1px solid rgba(226, 226, 228, 1)',
  boxSizing: 'border-box',
  color: 'rgba(129, 138, 140, 1)',
  display: 'inline-block',
  height: '20%',
  lineHeight: '50px',
  textAlign: 'center',
  verticalAlign: 'top',
  width: '20%',
  cursor: 'pointer',
};

const liStyleMarked = {
  ...liStyle,
  background: 'rgba(2, 112, 185, 1)',
  color: 'white',
};

const Ticket = ({ ticket, ticketId, markTicket }) => (
  <ul style={ulStyle} data-test="component-ticket">
    {ticket.map((row, rowIdx) => (
      row.map((number, numberIdx) => (
        <li
          style={number.isMarked ? liStyleMarked : liStyle}
          data-test="component-ticket-number"
          key={`${number.col}-${number.val}`}
        >
          <div
            onClick={() => markTicket(ticketId, rowIdx, numberIdx, number)}
            role="presentation"
            style={{ userSelect: 'none' }}
          >
            {number.val < 10 ? `0${number.val}` : number.val}
          </div>
        </li>
      ))
    ))}
  </ul>
);

Ticket.propTypes = {
  ticket: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        val: PropTypes.number,
        isMarked: PropTypes.bool,
        col: PropTypes.string,
      }),
    ),
  ).isRequired,
  markTicket: PropTypes.func.isRequired,
  ticketId: PropTypes.number.isRequired,
};

export default Ticket;
