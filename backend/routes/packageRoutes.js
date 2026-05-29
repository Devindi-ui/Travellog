const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json([
        {
            title: "Bellwood Adventure",
            location: "Sri Lanka",
            price: 5000,
        },

        {
            title: "Maskeliya Adventure",
            location: "Sri Lanka",
            price: 5000,
        },

        {
            title: "Baththalangunduwa Adventure",
            location: "Sri Lanka",
            price: 5000,
        },

        {
            title: "Sudagala Jungle Glamping",
            location: "Sri Lanka",
            price: 5000,
        },

        {
            title: "Loolkandura Adventure",
            location: "Sri Lanka",
            price: 5000,
        },
    ]);

});

module.exports = router;