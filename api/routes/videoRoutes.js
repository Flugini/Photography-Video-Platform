const express = require('express');
const router = express.Router();
const photoController = require('../controllers/videoController');

//Route zum Hochladen eines Videos
router.post('/', videoController.uploadPhoto);

//Route zum Abrufen aller Videos
router.get('/', videoController.getAllPhotos);

module.exports = router;