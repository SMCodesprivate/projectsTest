const mongoose = require("mongoose");

const curse = new mongoose.Schema({
  name: String,
  path: String,
  aulas: Number,
  professor_id: String,
  image: String,
  suports: String,
  required: Number,
  date: {
    year: Number,
    month: Number,
    day: Number,
  },
  alunos: Number,
  description: String,
  module: Number
});

module.exports = mongoose.model("Curse", curse);