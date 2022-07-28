const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      minlength: [2, 'Минимальное количество букв - 2'],
      maxlength: [30, 'Максимальное количество букв - 30'],
    },
    about: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      minlength: [2, 'Минимальное количество букв - 2'],
      maxlength: [30, 'Максимальное количество букв - 30'],
    },
    avatar: {
      type: String,
      required: [true, 'Добавьте ссылку на аватар'],
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('user', userSchema);
