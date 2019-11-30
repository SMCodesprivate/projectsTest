const Aulas = require("../models/ModelAulas");

module.exports = {
  async store(req, res) {
    var { module, name, curse, id } = req.body;
    var created = await Aulas.create({
      name,
      path: `https://ddl-backend.glitch.me/upload/videos/curses/${req.file.filename}`,
      user_id: id,
      module,
      number: 1
    });
    return res.json(created);
  }
}