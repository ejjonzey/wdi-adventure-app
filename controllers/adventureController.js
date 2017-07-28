const express = require('express');
const router = express.Router();

var Adventure = require("../models/adventure");
var User = require("../models/user")


//index of categories
router.get('/', (req, res) => {
    res.render("adventures/index");
})

//index of subcategories
router.get('/:oneCategory', (req, res) => {
    const catergoryToSearch = req.params.oneCategory;
    //pull all adventures that match the category
    Adventure.find({'categories': catergoryToSearch})
        //pull from that array to return all the subcategories a user could select
        .then((adventures) => {
            
                
            })

    //draw a list of all the subcategories.
})





module.exports = router;