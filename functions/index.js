const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //recebendo json

app.use(bodyParser.urlencoded({ extended: false })); //decodando url

//Importando rotas
require("../functions/routes/users")(app); //passando app como parâmetro

exports.app = functions.https.onRequest(app);
