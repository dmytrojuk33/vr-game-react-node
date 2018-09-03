const router = require('express').Router();
const controller = require('./controller');

// Connect controller methods to their corresponding routes
router.get('/drawball', controller.drawBall.get);
router.post('/verifyticket', controller.verifyTicket.post);

module.exports = router;
