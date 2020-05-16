const express = require('express');
const app = express();

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const artistController = require('./controllers/artist');
app.post('/artists', artistController.create);



app.use(express.json());

module.exports = app;
