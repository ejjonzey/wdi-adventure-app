const express = require('express');
const router = express.Router();
var Adventure = require("../models/adventure");
//var User = require("../models/user")
//index of categories
router.get('/', (req, res) => {
        res.render('categories');
    })
    //new adventure
router.get("/new", (req, res) => {
        res.render('adventures/new');
    })
    //edit adventure
router.get("/edit/:adventure/", (req, res) => {
        const adventureToFind = req.params.adventure;
        Adventure.findById(adventureToFind)
            .then((adventure) => {
                console.log(adventure);
                res.render('adventures/edit', {
                    adventure,
                });
            })
            .catch((err) => {
                console.log(`An Error has occured rendering update form of adventure ${adventureToFind}`);
                console.log(err);
            })
    })
    //delete an adventure
router.get("/delete/:adventure/", (req, res) => {
        const adventureToDelete = req.params.adventure;
        Adventure.findByIdAndRemove(adventureToDelete)
            .then(() => {
                console.log(`Adventure ${adventureToDelete} has been deleted`);
                res.redirect('/adventures/');
            })
            .catch((err) => {
                console.log("error deleting from database");
                console.log(err);
            })
    })
    //index of subcategories
router.get('/:oneCategory', (req, res) => {
        const categoryToSearch = req.params.oneCategory;
        //pull all adventures that match the category
        Adventure.find({ 'categories': categoryToSearch })
            //pull from that array to return all the subcategories a user could select
            .then((adventures) => {
                var subcats = [];
                //for each adventure
                adventures.forEach((value) => {
                    if (!subcats.includes(value.subCategories)) {
                        subcats.push(value.subCategories);
                    }
                })
                res.render('adventures/subcats', {
                    subcats,
                    category: categoryToSearch
                })
            })
            //draw a list of all the subcategories.
    })
    //show an adventure
router.get("/:oneCategory/:adventure", (req, res) => {
    const subCatOfAdventure = req.params.adventure;
    const catOfAdventure = req.params.oneCategory;
    Adventure.find({ 'categories': catOfAdventure, 'subCategories': subCatOfAdventure })
        .then((adventures) => {
            var randomAdventure = Math.floor(Math.random() * adventures.length);
            var yourChosenAdventure = adventures[randomAdventure];
            res.render('adventures/show', {
                adventure: yourChosenAdventure
            })
        })
});
//update an adventure
router.put("/edit/:adventureId", (req, res) => {
    console.log(req.params.adventureId);
    const idOfAdventure = req.params.adventureId;
    const adventureInfo = req.body;
    Adventure.findByIdAndUpdate(
            idOfAdventure,
            adventureInfo, { new: true })
        .then((adventure) => {
            console.log(`Adventure ${idOfAdventure} has been updated`);
            res.render('adventures/show', {
                adventure
            });
        })
        .catch((err) => {
            console.log(`An Error has occured during update of adventure ${idOfAdventure}`);
            console.log(err);
        });
});
//create new adventure
router.post("/", (req, res) => {
    const newAdventureInformation = req.body;
    console.log(newAdventureInformation);
    Adventure.create(newAdventureInformation)
        .then((adventure) => {
            res.render(
                'categories',
                adventure
            )
        })
        .catch((err) => {
            console.log("Error saving new adventure to database");
            console.log(err);
        })
})
    
module.exports = router;