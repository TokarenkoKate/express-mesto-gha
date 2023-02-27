const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя пользователя должно быть заполнено.'],
    minLength: [2, 'Имя пользователя должно содержать минимум 2 символа.'],
    maxLength: [30, 'Имя пользователя должно содержать максимум 30 символов.'],
  },
  about: {
    type: String,
    required: [true, 'Информация о пользователе должна быть заполнена.'],
    minLength: [2, 'Информация о пользователе должна содержать минимум 2 символа.'],
    maxLength: [30, 'Информация о пользователе должна содержать максимум 30 символов.'],
  },
  avatar: {
    type: String,
    required: [true, 'Ссылка на изображение должна быть заполнена.'],
  },
});

module.exports = mongoose.model('user', userSchema);
