import model from '../model';

const controller = {
  drawBall: {
    get(req, res) {
      res.json(model.drawBall.get());
    },
  },
  newGame: {
    get(req, res) {
      model.newGame.get();
      res.sendStatus(200);
    },
  },
  getBalls: {
    get(req, res) {
      res.json(model.getBalls.get());
    },
  },
  verifyTickets: {
    post(req, res) {
      res.json(model.verifyTickets.post(req.body));
    },
  },
};

export default controller;
