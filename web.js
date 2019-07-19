'use strict';

const connect = require('connect');
const serveStatic = require('serve-static');

const port = process.env.PORT || 8080;
const dir = './www';

exports.Run = function()
{   
    connect()
        .use(serveStatic(dir))
        .listen(port);
}
