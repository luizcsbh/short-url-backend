const express = require('express');
const router = express.Router();
const shortURLController = require('../controllers/shortURLController');

router.post('/encurtar', shortURLController.encurtarURL);
router.get('/:shortURL', shortURLController.redirecionarURL);

module.exports = router;
