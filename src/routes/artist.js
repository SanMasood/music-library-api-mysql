const express = require('express');
const artistController = require('../controllers/artist');


const router = express.Router();

router.route('/artists').post(artistController.create);

module.exports = router;