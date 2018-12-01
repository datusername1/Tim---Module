const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/routes');

const db = require('../database/index.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/shoedidas', router);

module.exports = app;
