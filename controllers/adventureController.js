const express = require('express');
const router = express.Router();

var Adventure = require("../models/adventure");

module.exports = router;

router.get('/', (req, res) => {
    res.render("adventures/index");
})

router.get('/:subcat', (req, res) => {
    res.send("We made it to the subcategory page!");
})