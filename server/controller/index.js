const model = require('../model');

module.exports = {
  drawBall: {
    get(req, res) {
      res.json(model.drawBall.get());
    },
  },
  verifyTickets: {
    post(req, res) {
      res.json(model.verifyTickets.post(req.body));
    },
  },
};
