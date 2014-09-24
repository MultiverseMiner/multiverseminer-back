var debug = require('debug')('multiverseminer-back');
var gameApp = require('../game-app');
var homepageApp = require('../homepage-app');
var http = require('http');
var vhostess = require('vhostess')();


var port = 3000;
var domain = '.multiverse.dev';

vhostess.use('www' + domain, homepageApp);

/**
 * @todo replace this with a database lookup to get a collection of all the game worlds
 */
vhostess.use('dev' + domain, gameApp);


var server = http.createServer(vhostess).listen(port, function () {
  debug('Express server listening on port ' + server.address().port);
});


