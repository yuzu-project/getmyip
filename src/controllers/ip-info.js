
function get(request, response) {
  const ip = request.ip || request.connection.remoteAddress;
  const statusCode = ip ? 200 : 500;
  response.status(statusCode)
    .json({
      ipAddress: ip,
    });
}

module.exports = {
  get,
};
