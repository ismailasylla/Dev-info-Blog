const express = require('express');
const router = express.Router();

//@route   Get Api/users/test
//@desc    tests Users route
//@access  Public
router.get('/test', (req, res) => {
  res.json({ msg: 'Users Works' });
});

module.exports = router;
