
function get(request, response) {
  const ip = request.clientIp;
  const statusCode = ip ? 200 : 500;
  response.status(statusCode)
    .json({
      ipAddress: ip,
    });
}

module.exports = {
  get,
};
