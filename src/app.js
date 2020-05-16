const express = require('express');

const artistRouter = require('./routes/artist');

const app = express();
app.use(express.json());

//const albumRouter = require('./routes/album');

//const artistController = require('./controllers/artist');
app.use('/artists', artistRouter);

module.exports = app;
