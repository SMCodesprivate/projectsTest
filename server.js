const express = require("express");
const routes = require('./src/routes');
const mongoose = require("mongoose");
const app = express();
const fs = require("fs");
const cors = require("cors");

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@omnistack9-kbth1.mongodb.net/ddlacademy?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use(routes);

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
