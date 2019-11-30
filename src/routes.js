const express = require("express");
const SessionController = require("./controllers/SessionController");
const CurseController = require("./controllers/CurseController");
const AulaController = require("./controllers/AulaController");
const multer = require("multer");
const uploadConfig = require("./config/multer.js");
const upload = multer(uploadConfig);
const uploadAula = require("./config/aula.js");
const upaula = multer(uploadConfig);
const routes = express.Router();


routes.post('/addcurse', SessionController.update);
routes.post('/delete', SessionController.destroy);
routes.post('/register', SessionController.store);
routes.post('/is', SessionController.index);
routes.post('/verificar', SessionController.verificationPassword)
routes.post('/searchuser', SessionController.search)
routes.post('/createcurse', upload.single('image'), CurseController.store);
routes.get('/iscurse', CurseController.index);
routes.post('/createaula', upaula.single('video'), AulaController.store);



routes.post('/beta', SessionController.beta);

module.exports = routes;