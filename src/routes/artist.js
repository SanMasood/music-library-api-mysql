const express = require('express');
const artistController = require('../controllers/artist');

const albumController = require ('../controllers/album');


const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.getter);

router.get('/:id', artistController.getById);

router.patch('/:id', artistController.updateArtistById);

router.delete('/:id', artistController.deleteArtistById);


router.post('/:artistId/albums', albumController.createAlbum);
router.get('/:artistId/albums', albumController.getAlbumByArtist);

module.exports = router;