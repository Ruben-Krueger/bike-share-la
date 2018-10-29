var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET top-metrics page. */
router.get('/top-metrics', function(req, res, next) {
    res.render('top-metrics');
});

/* GET stations page. */
router.get('/stations', function(req, res, next) {
    res.render('stations');
});


/* GET riders page. */
router.get('/distance', function(req, res, next) {
    res.render('distance');
});

/* GET riders page. */
router.get('/data-set', function(req, res, next) {
    res.render('data-set');
});


module.exports = router;
