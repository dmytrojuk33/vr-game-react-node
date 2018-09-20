import db from '../db';

export const helpers = {
  isFullBingo(ticket) {
    return ticket.every(row => row.every(number => db.has(number.val)));
  },
  isRowOrColBingo(ticket) {
    return this.isRowBingo(ticket) || this.isColBingo(ticket);
  },
  isRowBingo(ticket) {
    return ticket.some(row => row.every(number => db.has(number.val)));
  },
  isColBingo(ticket) {
    for (let col = 0; col < ticket.length; col++) {
      let bingo = true;
      for (let row = 0; row < ticket.length; row++) {
        if (!db.has(ticket[row][col].val)) {
          bingo = false;
          break;
        }
      }
      if (bingo) {
        return true;
      }
    }
    return false;
  },
};

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
    post(verification) {
      const { tickets, gameType } = verification;
      return gameType === 'full'
        ? tickets.some(ticket => helpers.isFullBingo(ticket))
        : tickets.some(ticket => helpers.isRowOrColBingo(ticket));
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
