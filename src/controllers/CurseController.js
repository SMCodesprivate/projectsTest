const Curse = require("../models/ModelCurse");
const user = require("../models/ModelUser");
module.exports = {
  async index(req, res) {
    var todos = await Curse.find();
    console.log(todos);
    return res.json({ information: todos });
  },
  async store(req, res) {
    var date = new Date();
    var dats = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDay()
    };
    var { name, required, suports, proff, description }  = req.body;
    console.log("name: "+name)
    console.log("required: "+required)
    console.log("suports: "+suports)
    console.log("proff: "+proff)
    console.log("description: "+description)
    var asd = await user.findOne({ username: proff });
    console.log(asd);
    var a = await Curse.create({
      name,
      path: `${name.toLowerCase()}/`,
      aulas: 0,
      professor_id: asd._id,
      suports,
      image: `https://ddl-backend.glitch.me/upload/images/curses/${req.file.filename}`,
      required,
      module: 0,
      date: dats,
      alunos: 0,
      description: description
    });
    return res.json({ DB: a, FILE: req.file });
  }
};
