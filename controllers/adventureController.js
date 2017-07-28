const express = require('express');
const router = express.Router();

var Adventure = require("../models/adventure");

module.exports = router;

router.get('/', (req, res) => {
    res.send("we made it!");
})