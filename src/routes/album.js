const express = require('express');
const albumController = require('../controllers/album');


const router = express.Router();

router.post('/:id/album', albumController.createAlbum);


module.exports = router;
