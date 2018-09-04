import React from 'react';
import PropTypes from 'prop-types';

const ulStyle = {
  border: '1px solid rgba(226, 226, 228, 1)',
  listStyleType: 'none',
  margin: '20px',
  padding: 0,
  height: '320px',
  width: '320px',
};

const liStyle = {
  background: 'white',
  color: 'rgba(129, 138, 140, 1)',
  border: '1px solid rgba(226, 226, 228, 1)',
  display: 'inline-block',
  verticalAlign: 'top',
  width: '20%',
  height: '20%',
  textAlign: 'center',
  lineHeight: '62px',
  boxSizing: 'border-box',
};

const liStyleMarked = {
  ...liStyle,
  background: 'rgba(2, 112, 185, 1)',
  color: 'white',
};

const Ticket = ({ ticket }) => (
  <ul style={ulStyle} data-test="ticket">
    {ticket.map(row => (
      row.map(number => (
        <li
          style={number.marked ? liStyleMarked : liStyle}
          data-test="ticket-number"
          key={`${number.col}-${number.num}`}
        >
          {number.num < 10 ? `0${number.num}` : number.num}
        </li>
      ))
    ))}
  </ul>
);

Ticket.propTypes = {
  ticket: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        num: PropTypes.number,
        marked: PropTypes.bool,
        col: PropTypes.string,
      }),
    ),
  ).isRequired,
};

export default Ticket;
