const user = require("../models/ModelUser");
const bcrypt = require('bcryptjs');
const functions = require("../functions/transformation");

module.exports = {
    async search(req, res) {
      const { user_id } = req.body;
      var userInfo = await user.findOne({ _id: user_id });
      if(!userInfo) return res.json({ error: true });
      return res.json(userInfo);
    },
    async index(req, res) {
      const { username } = req.body;
      var userInfo = await user.findOne({ username });
      if(!userInfo) return res.json({ error: true });
      return res.json({ returno: userInfo });
    },
    async destroy(req, res) {
        const { username } = req.body;
        var userInfo = await user.findOne({ username });
        if(!userInfo) return res.json({ returno: null });
        userInfo = await user.findOneAndRemove({ username });
        return res.json(userInfo);
    },
    async update(req, res) {
        const { username, curse } = req.body;
        var infoUser = await user.findOne({ username });
        if(infoUser) {
            var { curses } = infoUser;
            var teste = curses.indexOf(curse);
            if(teste != -1) return res.json({ returno: null });
            var newCurses = curses.push(curse);
            infoUser = await user.findOneAndUpdate({ username }, {
                curses,
                active: true
            });
            teste = await user.findOne({ username });
            return res.json(teste);
        } else {
            return res.json({ retorno: null });
        }
    },
    async store(req, res) {
        const { username, password } = req.body;
        var teste = await user.findOne({ username });
        var encrypted = bcrypt.genSaltSync(10);
        console.log(encrypted);
        var a = bcrypt.hashSync(password, encrypted);
        console.log(a);
        if(!teste) {
            teste = await user.create({
                username: username,
                password: a,
                level: 0,
                active: false
            });
            return res.json(teste);
        } else {
            return res.json({ response: "exist" });
        }
    },
    async verificationPassword(req, res) {
      const { username, password } = req.body;
      if(!password) {
        return res.json({ error: true });
      }
      if(!username) {
        return res.json({ error: true });
      }
      var teste = await user.findOne({ username });
      var tt = bcrypt.compareSync(password, teste.password);
      return res.json({ state: tt });
    },
    async beta(req, res) {
      var { filter } = req.body;
      var enviate = await user.find();
      var users = [];
      enviate.map(user => {
        var filte = user.username.toLowerCase().indexOf(filter.toLowerCase());
        console.log(filte);
        var cargo = functions.transformation(user.level);
        if(filte === -1 || filte > filter.length-1) return console.log("Não tem");
        users.push({ name: user.username, level: user.level, cargo });
      });
      return res.json(users);
    }
};