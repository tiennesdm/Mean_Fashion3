const Carousel = require("../models/carousel");
exports.createCarousel = (req, res, next) => {
    console.log(req.body);
    console.log(req.body.carousel);

    //for(let i=0; i<)
    const url = req.protocol + "://" + req.get("host");
}