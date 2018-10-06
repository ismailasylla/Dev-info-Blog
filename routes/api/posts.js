const express = require('express');
const router = express.Router();

//@route   Get Api/posts/test
//@desc    tests Post route
//@access  Public
router.get('/test', (req, res) => {
  res.json({ msg: 'Posts Works' });
});

module.exports = router;
