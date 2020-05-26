const express = require('express');
const albumController = require('../controllers/album');


const router = express.Router();

router.post('/:id', albumController.createAlbum);
router.get('/:albumId', albumController.getAlbumByArtist);


module.exports = router;
