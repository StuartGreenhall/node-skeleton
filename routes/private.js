var router = require('express').Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(200).send("pong");
});

module.exports = router;
