const express = require('express');

const artistRouter = require('./routes/artist');
//const albumRouter = require('./routes/album');


const app = express();
app.use(express.json());


//const artistController = require('./controllers/artist');
app.use('/artists', artistRouter);

module.exports = app;
