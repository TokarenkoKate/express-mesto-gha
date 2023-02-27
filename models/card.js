const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: [String, 'Название карточки должно быть строкой.'],
    required: [true, 'Название карточки должно быть заполнено.'],
    minLength: [2, 'Название карточки должно содержать минимум 2 символа вместо {VALUE}.'],
    maxLength: [2, 'Название карточки должно содержать максимум 30 символов вместо {VALUE}.'],
  },
  link: {
    type: [String, 'Ссылка на изображение должна быть строкой.'],
    required: [true, 'Ссылка на изображение должна быть заполнена.'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
