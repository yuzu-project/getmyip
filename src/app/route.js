const ip = require('../controllers/ip-info');

function buildRoutes(app) {
  app.get('/myip', (request, response) => ip.get(request, response));
}

module.exports = buildRoutes;
