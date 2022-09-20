const router = require('express').Router();
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    Index page for the API
// @route   GET /api/v1/
// @access  Public
router.get('/', isAuthenticated, isAdmin, async (req, res, next) => {;
  res.send('REST API')
});

module.exports = router;