var express = require('express');
var router = express.Router();

const request = require('request');

router.get('/', (req, res, next) => {
  const url = new URL(req.query.url);

  request.get({url}).pipe(res);
});

module.exports = router;
