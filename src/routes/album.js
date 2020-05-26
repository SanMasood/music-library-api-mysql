const express = require('express');
const albumController = require('../controllers/album');


const router = express.Router();

router.post('/:id', albumController.createAlbum);
router.get('/:albumId', albumController.getAlbumByArtist);
router.patch('/:albumId', albumController.updateAlbumById);


module.exports = router;
