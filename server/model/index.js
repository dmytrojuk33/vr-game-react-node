import db from '../db';

export const helpers = {
  isFullBingo(ticket) {
    return ticket.every(row => row.every(number => db.has(number.val)));
  },
  isRowOrColOrDiagBingo(ticket) {
    return this.isRowBingo(ticket) || this.isColBingo(ticket)
      || this.isMajDiagBingo(ticket) || this.isMinDiagBingo(ticket);
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
  isMajDiagBingo(ticket) {
    let row = 0;
    let col = 0;
    while (col < ticket.length && row < ticket.length) {
      if (!db.has(ticket[row][col].val)) {
        return false;
      }
      row++;
      col++;
    }
    return true;
  },
  isMinDiagBingo(ticket) {
    let row = 0;
    let col = ticket.length - 1;
    while (col >= 0 && row < ticket.length) {
      if (!db.has(ticket[row][col].val)) {
        return false;
      }
      row++;
      col--;
    }
    return true;
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
        : tickets.some(ticket => helpers.isRowOrColOrDiagBingo(ticket));
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
