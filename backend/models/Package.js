const { number } = require("framer-motion");
const { title, image } = require("framer-motion/client");
const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    duration: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Package", packageSchema);