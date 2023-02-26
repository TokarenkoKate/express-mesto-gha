module.exports.handleInvalidRoute = (req, res) => {
  res.status(404).send({ message: 'Такой адрес не существует.' });
};
