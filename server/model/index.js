import db from '../db';

const model = {
  drawBall: {
    get() {
      let nextBall;
      do {
        nextBall = Math.floor(Math.random() * 100) + 1;
      } while (db.has(nextBall) && db.size < 100);
      db.set(nextBall, true);
      return Array.from(db.keys());
    },
  },
  verifyTickets: {
    post(tickets) {
      return tickets.some(ticket => ticket.every(row => row.every(number => db.has(number.val))));
    },
  },
  newGame: {
    get() {
      return db.clear();
    },
  },
  getBalls: {
    get() {
      return Array.from(db.keys());
    },
  },
};

export default model;
