import express from 'express';
import controller from './controller';

const router = express.Router();

// Connect controller methods to their corresponding routes
router.get('/drawball', controller.drawBall.get);
router.post('/verifytickets', controller.verifyTickets.post);
router.get('/newgame', controller.newGame.get);
router.get('/getballs', controller.getBalls.get);

module.exports = router;
