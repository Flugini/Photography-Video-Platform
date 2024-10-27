const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

//Route zum Hochladen eines Fotos 
router.post('/', photoController.uploadPhoto);

//Route zum Abrufen aller Fotos
router.get('/', photoController.getAllPhotos);

module.exports = router;