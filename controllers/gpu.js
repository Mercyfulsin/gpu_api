const newGPU = (req,res,next) => {
    res.json({message: 'POST gpu route'});
};

const allGPU = (req,res,next) => {
    const reply = {
        Headers: req.headers,
        OG_URL: req.originalUrl,
        Method: req.method,
        Body: req.body,
        Time: req.requestTime
    };
    res.send(reply);
};
const deleteAll = (req,res,next) => {};
const updateGPU = (req,res,next) => {};
const getGPU = (req,res,next) => {};
const deleteGPU = (req,res,next) => {};
const postReview = (req,res,next) => {};
module.exports = { newGPU, allGPU, deleteAll, updateGPU, getGPU, deleteGPU, postReview };