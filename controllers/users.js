const { NOT_FOUND, INCORRECT_DATA, SERVER_ERROR } = require('../constants/statuses');
const { getValidationErrorMessages } = require('../utils/utils');
const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.status(200).send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка.' }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId).exec()
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(NOT_FOUND).send({ message: 'Пользователь по указанному _id не найден.' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(INCORRECT_DATA).send({ message: 'Некорректный _id пользователя' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Произошла ошибка.' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INCORRECT_DATA).send({ message: getValidationErrorMessages(err) });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Произошла ошибка.' });
      }
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INCORRECT_DATA).send({ message: getValidationErrorMessages(err) });
      } else if (err.name === 'CastError') {
        res.status(NOT_FOUND).send({ message: 'Пользователь по указанному _id не найден.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Произошла ошибка.' });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INCORRECT_DATA).send({ message: getValidationErrorMessages(err) });
      } else if (err.name === 'CastError') {
        res.status(NOT_FOUND).send({ message: 'Пользователь по указанному _id не найден.' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Произошла ошибка.' });
      }
    });
};
