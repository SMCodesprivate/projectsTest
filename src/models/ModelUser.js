const mongoose = require("mongoose");

const user = new mongoose.Schema({
  mail: String,
  username: String,
  password: String,
  active: Boolean,
  curses: Array,
  level: Number
});

module.exports = mongoose.model('user', user);