const { Router } = require('express');
const { getPoints, insertPoints } = require('../controllers/points');
const router = Router();

router.get('/points', getPoints);
router.post('/insertPoints', insertPoints);

module.exports = router;