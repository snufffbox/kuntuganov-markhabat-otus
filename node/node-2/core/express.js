const express = require('express');
const compression = require('compression');
const logger = require('./logger');

const app = express();

app.use(compression());
app.use(express.json());

app.use('/', express.static('view'));

function startServer(port){
  port = port || 3000;

  app.listen(port, function () {
    logger.debug('App listening on port ' + port + '!');
  });
}

module.exports = {
  app: app,
  startOnPort: startServer
};