function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const payload = {
    error: err.message || 'Internal Server Error'
  };
  if (process.env.NODE_ENV !== 'production') {
    payload.details = err.details || err.stack;
  }
  res.status(status).json(payload);
}

module.exports = errorHandler;
