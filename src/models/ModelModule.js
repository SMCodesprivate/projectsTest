const mongoose = require("mongoose");

const module = new mongoose.Schema({
  name: String,
  number: Number,
  aulas: Number,
  curse: String
});

module.exports = module.model("Module", module);