const getRandomNums = (count, minRange, maxRange) => {
  const availNums = Array.from(new Array(maxRange), (val, idx) => idx + minRange);
  let c = count;
  let last = availNums.length;
  while (c > 0) {
    const rand = Math.floor(Math.random() * last--); // eslint-disable-line no-plusplus
    [availNums[last], availNums[rand]] = [availNums[rand], availNums[last]];
    c--; // eslint-disable-line
  }
  return availNums.slice(-count);
};

const makeTicket = (maxRange) => {
  const ticket = [];
  const bingoCols = {
    0: 'b', 1: 'i', 2: 'n', 3: 'g', 4: 'o',
  };
  const randomNums = getRandomNums(25, 1, maxRange);
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
};

export default makeTicket;
