var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stus Node Skeleton' });
});

module.exports = router;
