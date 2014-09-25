var express = require('express');
var router = express.Router();

/**
 * @todo must be logged in, so perform auth check here once registration site is complete
 */


router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
