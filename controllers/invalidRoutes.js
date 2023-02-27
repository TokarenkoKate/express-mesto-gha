const { NOT_FOUND } = require('../constants/statuses');

module.exports.handleInvalidRoute = (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Такой адрес не существует.' });
};
