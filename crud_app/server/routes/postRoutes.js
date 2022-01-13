const express = require('express');
const postController = require('../controller/postControllers');

const router = express.Router();

// Voir les données
router.get('/', postController.all_posts)

// Remplir le formulaire pour changer les données...
router.get('/', postController.add_post_get)
// ... et sauvegarder
router.post('/', postController.add_post_post)

// Select a single post (edit)
router.get('/:id', postController.post_details)
router.delete('/:id', postController.post_delete)
router.put('/:id', postController.post_update)


// Exporter //
module.exports = router;