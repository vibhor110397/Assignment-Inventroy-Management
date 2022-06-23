const express = require('express');

const router = express.Router()
const brandController = require('../controller/brandController');

router.post('/brand', brandController.brand);
router.get('/getAll',brandController.getAll);
router.get('/getId/:id',brandController.getId);
router.patch('/putId/:id',brandController.putId);
router.delete('/deleteOne/:id',brandController.deleteOne);

module.exports = router;