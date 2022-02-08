const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const gpuController = require('../controllers/gpu');

router.get('/', (req,res,next) => res.json({
    Headers: req.headers,
    OG_URL: req.originalUrl,
    Method: req.method,
    Body: req.body,
    Time: req.requestTime,
    FrontEnd: {Status: 'Not Available'},
    BackeEnd: {Status: 'Uploaded on Heroku'},
    Routes: {
        root: {Methods: 'get'},
        gpu: {Methods: 'post,get,delete'},
        gpu_pn: {Methods: 'post,put,get,delete'}
    }
}));

router.post('/gpu', upload.none(), gpuController.newGPU);
router.get('/gpu', gpuController.allGPU);
router.delete('/gpu', gpuController.deleteAll);
router.post('/gpu/:pn', gpuController.postReview);
router.put('/gpu/:pn', upload.none(), gpuController.updateGPU);
router.get('/gpu/:pn', upload.none(), gpuController.getGPU);
router.delete('/gpu/:pn', gpuController.deleteGPU);

module.exports = router;