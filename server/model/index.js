const db = require('../db');

module.exports = {
  drawBall: {
    get() {
      const nextBall = Math.floor(Math.random() * 100) + 1;
      db.set(nextBall, true);
      return Array.from(db.keys()).reverse(); // or .slice(-5)
    },
  },
  verifyTickets: {
    post(tickets) {
      return tickets.some(ticket => ticket.every(row => row.every(number => db.has(number))));
    },
  },
};
