var debug = require('debug')('multiverseminer-back'),
  gameApp = require('./sites/game-app'),
  homepageApp = require('./sites/homepage-app'),
  http = require('http'),
  vhostess = require('vhostess')(),
  port = 3000,
  domain = '.multiverse.dev',
  server;


vhostess.use('www' + domain, homepageApp);
/**
 * @todo replace this with a database lookup to get a collection of all the game worlds
 */
vhostess.use('dev' + domain, gameApp);


server = http.createServer(vhostess).listen(port, function () {
  debug('Express server listening on port ' + server.address().port);
});
