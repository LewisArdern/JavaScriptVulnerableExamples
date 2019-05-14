var express = require('express');
const uuidv4 = require('uuid/v4')
var router = express.Router();



const nonce = uuidv4()
router.get('/', function (req, res) {
  res.render('index', { payload: req.query.payload || '', csp: `` });
});

router.get('/challenge1', function (req, res) {
  res.render('csp1', { payload: req.query.payload || '', csp: `script-src 'nonce-${nonce}' 'unsafe-inline'; object-src 'none'; style-src 'nonce-${nonce}'`, nonce: nonce });
});

router.get('/challenge2', function (req, res) {
  res.render('csp2', { payload: req.query.payload || '', csp: `object-src 'none'; base-uri 'none'; script-src 'nonce-${nonce}'`, nonce: nonce });
});

router.get('/challenge3', function (req, res) {
  res.render('csp3', {
    payload: req.query.payload || '', csp: `script-src 'self' data:; object-src 'none'; base-uri 'none'`
  });
});

router.get('/challenge4', function (req, res) {
  res.render('csp4', {
    payload: req.query.payload || '', csp: `script-src 'self' ajax.googleapis.com`
  });
});

router.get('/solution1', function (req, res) {
  res.render('solution1');
});
router.get('/solution2', function (req, res) {
  res.render('solution2');
});
router.get('/solution3', function (req, res) {
  res.render('solution3');
});
router.get('/solution4', function (req, res) {
  res.render('solution4');
});


module.exports = router;
