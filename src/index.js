const express = require('express');
const requestIp = require('request-ip');
const config = require('./config');
const routes = require('./app/route');

const app = express();
const { port } = config;

app.use(requestIp.mw());

routes(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));
