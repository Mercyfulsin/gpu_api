const GPU = require('../models/gpu');

const newGPU = (req,res,next) => {
    GPU.findOne({ pn: req.body.pn }, (e, data) => {
        const info = req.body;
        console.log(info.review[0]);
        if(!data){

            const newGPU = new GPU({
                name: info.name,
                pn: info.pn,
                image: info.image,
                info1: info.info1,
                info2: info.info2,
                info3: info.info3,
                info4: info.info4,
                info5: info.info5,
                review: [{ text: info.review[0], date: new Date() }]
            });
            console.log(newGPU);

            newGPU.save((e,data)=>{
                if(e) return res.json({Error:e});
                return res.json(data);
            });
        }else{
            e ? res.json(`Error: ${e}`) : res.json({message:'Item already exists!'}); 
        }
    });
};
const allGPU = (req,res,next) => {
    GPU.find({}, (e,data)=>{
        e ? res.json({Error:e}) : res.json(data);
    });
};
const deleteAll = (req,res,next) => {
    GPU.deleteMany({}, e => {
        e ? res.json({Error: e}) : res.json({Message: 'All items deleted!'});
    });
};
const updateGPU = (req,res,next) => {
    console.log(req.body, req.params.pn);
    GPU.findOneAndUpdate({pn: req.params.pn}, {review: req.body.review}, (e, data) => {
        e || !data ? res.json({Error: e}) : res.json(data);
    });
};
const getGPU = (req,res,next) => {
    let pn = req.body.pn;
    GPU.findOne({pn: pn}, (e,data)=>{
        e || !data ? res.json({Error: e}) : res.json(data);
    });
};
const deleteGPU = (req,res,next) => {

};
const postReview = (req,res,next) => {
    const pn = req.params.pn;
    const review = req.body.review;

};

module.exports = { newGPU, allGPU, deleteAll, updateGPU, getGPU, deleteGPU, postReview };