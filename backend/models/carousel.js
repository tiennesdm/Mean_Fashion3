const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const carouselImageSchema = mongoose.Schema({
    carouselImage: { type: Array, required: true, unique: true },
});
carouselImageSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Carousel", carsouelImageSchema);