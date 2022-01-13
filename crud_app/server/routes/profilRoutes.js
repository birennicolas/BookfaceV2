const express = require('express');
const profilController = require('../controller/profilControllers');

const router = express.Router();

router.get('/', profilController.all_profils)

router.get('/', profilController.create_profil_get)
router.post('/', profilController.create_profil_post)

router.get('/:id', profilController.find_profil)
router.put('/:id', profilController.update_profil)
router.delete('/:id', profilController.delete_profil)

// Exporter //
module.exports = router;