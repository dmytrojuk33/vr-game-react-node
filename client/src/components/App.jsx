import React, { Component } from 'react';
import TicketDisplay from './TicketDisplay';
import exampleTickets from '../../../assets/exampleData';

class App extends Component {
  /**
   * makeTicket
   * @param {number} maxNum The maximum integer range for numbers in a ticket.
   * @returns {Array} Array of 5 row arrays containing objects with num, marked, and col properties.
  */
  static makeTicket(maxNum) {
    const ticket = [];
    const bingoCols = {
      0: 'b', 1: 'i', 2: 'n', 3: 'g', 4: 'o',
    };
    const randomNums = this.getRandomNums(25, 1, maxNum);
    for (let i = 0; i < 5; i += 1) {
      ticket.push([]);
      for (let j = 0; j < 5; j += 1) {
        ticket[i].push({
          num: randomNums[i * 5 + j],
          marked: false,
          col: bingoCols[j],
        });
      }
    }
    return ticket;
  }

  constructor() {
    super();
    this.state = {
      tickets: exampleTickets,
    };
  }

  componentDidMount() {
    this.makeTickets(4, 100);
  }

  /**
   * getRandomNums
   * @param {number} count The number of requested random integers.
   * @param {number} min The minimum integer range.
   * @param {number} max The maximum integer range.
   * @returns {Array} Array of [count] random integers.
   */
  static getRandomNums(count, min, max) {
    const availNums = Array.from(new Array(max), (val, idx) => idx + min);
    let c = count;
    let m = availNums.length;
    while (c) {
      const i = Math.floor(Math.random() * m);
      m -= 1;
      [availNums[m], availNums[i]] = [availNums[i], availNums[m]];
      c -= 1;
    }
    return availNums.slice(-count);
  }

  /**
   * makeTickets
   * @param {number} count The number of requested tickets.
   * @param {number} maxNum The maximum integer range for numbers in a ticket.
   */
  makeTickets(count, maxNum) {
    const tickets = [];
    for (let i = 0; i < count; i += 1) {
      tickets.push(App.makeTicket(maxNum));
    }
    this.setState({ tickets });
  }

  render() {
    const { tickets } = this.state;
    return (
      <div data-test="component-app">
        <TicketDisplay tickets={tickets} />
      </div>
    );
  }
}


export default App;
