const express = require('express');
const router = express.Router();
const gpuController = require('../controllers/gpu');

router.post('/gpu', gpuController.newGPU);
router.get('/gpu', gpuController.allGPU);
router.delete('/gpu', gpuController.deleteAll);
router.put('/gpu/:pn', gpuController.updateGPU);
router.get('/gpu/:pn', gpuController.getGPU);
router.delete('/gpu/:pn', gpuController.deleteGPU);

module.exports = router;