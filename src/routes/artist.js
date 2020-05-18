const express = require('express');
const artistController = require('../controllers/artist');


const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.getter);

router.get('/:id', artistController.getById);

module.exports = router;