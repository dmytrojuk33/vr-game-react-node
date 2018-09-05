const router = require('express').Router();
const controller = require('./controller');

// Connect controller methods to their corresponding routes
router.get('/drawball', controller.drawBall.get);
router.post('/verifytickets', controller.verifyTickets.post);

module.exports = router;
