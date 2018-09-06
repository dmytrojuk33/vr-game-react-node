import React, { Component } from 'react';
import exampleTickets from '../../../assets/exampleData';
import makeTicket from '../helpers';
import GMDraws from './GMDraws';
import UserButtons from './UserButtons';
import TicketDisplay from './TicketDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickets: exampleTickets,
      recentBalls: [],
      isJumped: false,
      isWinner: false,
    };
    this.drawBall = this.drawBall.bind(this);
    this.markTicket = this.markTicket.bind(this);
    this.verifyTickets = this.verifyTickets.bind(this);
    this.newGame = this.newGame.bind(this);
    this.autoMarkTickets = this.autoMarkTickets.bind(this);
  }

  componentDidMount() {
    this.makeTickets(4, 100);
    this.getBalls();
  }

  getBalls() {
    fetch('gm/getballs')
      .then(response => response.json())
      .then(recentBalls => this.setState({ recentBalls, isJumped: false }))
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  makeTickets(count, maxRange) {
    const tickets = [];
    for (let i = 0; i < count; i += 1) {
      tickets.push(makeTicket(maxRange));
    }
    this.setState({ tickets });
  }

  newGame() {
    fetch('gm/newgame')
      .then(() => {
        this.setState({ recentBalls: [], isJumped: false, isWinner: false });
        this.makeTickets(4, 100);
      })
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  drawBall() {
    fetch('gm/drawball')
      .then(response => response.json())
      .then(recentBalls => this.setState({ recentBalls, isJumped: false }))
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  markTicket(ticketId, rowIdx, numberIdx, number) {
    const { recentBalls, tickets } = this.state;
    if (recentBalls.includes(number.val)) {
      tickets[ticketId][rowIdx][numberIdx].isMarked = true;
      this.setState({ tickets, isJumped: false });
    }
  }

  autoMarkTickets() {
    const { recentBalls, tickets } = this.state;
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
      .then(isBingo => (isBingo ? this.congratulateWinner() : this.setState({ isJumped: true })))
      .catch(error => console.error('Error:', error)); // eslint-disable-line no-console
  }

  congratulateWinner() {
    this.setState(({ isWinner: true }));
  }

  render() {
    const {
      tickets, recentBalls, isJumped, isWinner,
    } = this.state;
    return (
      <div data-test="component-app">
        <GMDraws
          recentBalls={recentBalls.slice(-5).reverse()}
        />
        <h1 style={{ textAlign: 'center' }}>
          Bingo
        </h1>
        <UserButtons
          drawBall={this.drawBall}
          verifyTickets={this.verifyTickets}
          newGame={this.newGame}
          autoMarkTickets={this.autoMarkTickets}
          isJumped={isJumped}
          isWinner={isWinner}
        />
        <TicketDisplay
          tickets={tickets}
          markTicket={this.markTicket}
        />
      </div>
    );
  }
}


export default App;
