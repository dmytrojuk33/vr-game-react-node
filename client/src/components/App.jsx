import React, { Component } from 'react';
import exampleTickets from '../../../assets/exampleData';
import GMDraws from './GMDraws';
import UserButtons from './UserButtons';
import TicketDisplay from './TicketDisplay';

class App extends Component {
  static makeTicket(maxRange) {
    const ticket = [];
    const bingoCols = {
      0: 'b', 1: 'i', 2: 'n', 3: 'g', 4: 'o',
    };
    const randomNums = this.getRandomNums(25, 1, maxRange);
    for (let i = 0; i < 5; i += 1) {
      ticket.push([]);
      for (let j = 0; j < 5; j += 1) {
        ticket[i].push({
          val: randomNums[i * 5 + j],
          isMarked: false,
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
      recentBalls: [],
    };
    this.drawBall = this.drawBall.bind(this);
    this.verifyTickets = this.verifyTickets.bind(this);
  }

  componentDidMount() {
    this.makeTickets(4, 100);
    this.drawBall();
  }

  static getRandomNums(count, minRange, maxRange) {
    const availNums = Array.from(new Array(maxRange), (val, idx) => idx + minRange);
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

  makeTickets(count, maxRange) {
    const tickets = [];
    for (let i = 0; i < count; i += 1) {
      tickets.push(App.makeTicket(maxRange));
    }
    this.setState({ tickets });
  }

  drawBall() {
    fetch('gm/drawball')
      .then(response => response.json())
      .then(recentBalls => this.markTickets(recentBalls))
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  markTickets(recentBalls) {
    const { tickets } = this.state;
    tickets.forEach(ticket => ticket.forEach(row => row.forEach((number) => {
      if (recentBalls.includes(number.val)) {
        number.isMarked = true; // eslint-disable-line no-param-reassign
      }
    })));
    this.setState({ tickets });
  }

  verifyTickets() {
    const { tickets } = this.state;
    fetch('gm/verifytickets', {
      method: 'POST',
      body: JSON.stringify(tickets),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((isBingo) => {
        console.log(isBingo); // eslint-disable-line no-console
        if (isBingo) {
          // this.congratulateWinner();
        } else {
          this.drawBall();
        }
      })
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  // congratulateWinner() {

  // }

  render() {
    const { tickets, recentBalls } = this.state;
    return (
      <div data-test="component-app">
        <GMDraws recentBalls={recentBalls.slice(-5)} />
        <UserButtons drawBall={this.drawBall} verifyTickets={this.verifyTickets} />
        <TicketDisplay tickets={tickets} />
      </div>
    );
  }
}


export default App;
