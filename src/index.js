const express = require('express');
const config = require('./config');
const routes = require('./app/route');

const app = express();
const { port } = config;

routes(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));
