const router = require('express').Router();

const { handleInvalidRoute } = require('../controllers/invalidRoutes');

router.get('*', handleInvalidRoute);
router.post('*', handleInvalidRoute);
router.patch('*', handleInvalidRoute);
router.delete('*', handleInvalidRoute);

module.exports = router;
