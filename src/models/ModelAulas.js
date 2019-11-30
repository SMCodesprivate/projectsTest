const mongoose = require("mongoose");


const aulas = new mongoose.Schema({
  name: String,
  path: String,
  user_id: String,
  module: Number,
  number: Number,
  curse: String
});


module.exports = mongoose.model("Aulas", aulas);