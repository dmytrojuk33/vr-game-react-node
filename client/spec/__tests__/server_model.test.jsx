import { helpers } from '../../../server/model';
import db from '../../../server/db';

describe('Test the model with different game types', () => {
  test('should respond true given a bingo row', () => {
    db.clear();
    db.set(1, true);
    db.set(2, true);
    db.set(3, true);
    db.set(4, true);
    db.set(5, true);
    const ticket = [
      [{val: 1}, {val: 2}, {val: 3}, {val: 4}, {val: 5}],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const bingo = helpers.isRowBingo(ticket);
    expect(bingo).toBe(true);
  });

  test('should respond true given a bingo column', () => {
    db.clear();
    db.set(2, true);
    db.set(7, true);
    db.set(12, true);
    db.set(17, true);
    db.set(22, true);
    const ticket = [
      [1, {val: 2}, 3, 4, 5],
      [6, {val: 7}, 8, 9, 10],
      [11, {val: 12}, 13, 14, 15],
      [16, {val: 17}, 18, 19, 20],
      [21, {val: 22}, 23, 24, 25],
    ];
    const bingo = helpers.isColBingo(ticket);
    expect(bingo).toBe(true);
  });
  test('should respond true given a bingo major diagonal', () => {
    db.clear();
    db.set(1, true);
    db.set(7, true);
    db.set(13, true);
    db.set(19, true);
    db.set(25, true);
    const ticket = [
      [{val: 1}, 2, 3, 4, 5],
      [6, {val: 7}, 8, 9, 10],
      [11, 12, {val: 13}, 14, 15],
      [16, 17, 18, {val: 19}, 20],
      [21, 22, 23, 24, {val: 25}],
    ];
    const bingo = helpers.isMajDiagBingo(ticket);
    expect(bingo).toBe(true);
  });
  test('should respond true given a bingo minor diagonal', () => {
    db.clear();
    db.set(5, true);
    db.set(9, true);
    db.set(13, true);
    db.set(17, true);
    db.set(21, true);
    const ticket = [
      [1, 2, 3, 4, {val: 5}],
      [6, 7, 8, {val: 9}, 10],
      [11, 12, {val: 13}, 14, 15],
      [16, {val: 17}, 18, 19, 20],
      [{val: 21}, 22, 23, 24, 25],
    ];
    const bingo = helpers.isMinDiagBingo(ticket);
    expect(bingo).toBe(true);
  });
});