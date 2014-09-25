var debug = require('debug')('multiverseminer-back'),
  gameApp = require('./sites/game-app'),
  homepageApp = require('./sites/homepage-app'),
  http = require('http'),
  vhostess = require('vhostess')(),
  server,
  settings = require('./settings.json');

if (!settings.debug_mode) {
  process.env.NODE_ENV = 'production';
}

vhostess.use('www' + settings.domain, homepageApp);
/**
 * @todo replace this with a database lookup to get a collection of all the game worlds
 */
vhostess.use('dev' + settings.domain, gameApp);


server = http.createServer(vhostess).listen(settings.port, function () {
  debug('Express server listening on port ' + server.address().port);
});
