const express = require('express');
const router = express.Router();

//var Adventure = require("../models/adventure");
var User = require("../models/user")


//index of categories
router.get('/', (req, res) => {
    res.render('categories');
})

// NEW USER.  ///////////////////////////

router.get("/new", (req, res) => {
    res.render('users/new');
})


// EDIT USER  ///////////////////////////

router.get("/:id", (req, res) => {
        console.log("You hit the user edit route");
      const userToFind = req.params.id;
      console.log( `finding this user id ${userToFind}`)
    User.findById(userToFind)
        .then((user) => {
            res.render('users/edit', {
                user
            })
        })
        .catch((err) => {
            console.log(`An Error has occured rendering update form for User ${userToFind}`);
            console.log(err);
        })
})
// SHOW A USER  /////////////////////////

router.get("/:id", (req, res) => {
    const idOfUser = req.params.id;

    User.findById(idOfUser)
        .then((user) => {
            res.render('users/show', {
                user
            })
        })
        .catch((err) => {
            console.log(`An Error has occured showing User ${idOfUser}`);
            console.log(err);
        });
});

// UPDATE A USER   ///////////////////////

router.put("/:id", (req, res) => {
    const idOfUser = req.params.id;
    const userInfo = req.body;

    User.findByIdAndUpdate(
        idOfUser,
        userInfo,
        {new: true})
        .then((user) => {
            console.log(`User ${idOfUser} has been updated`);

            res.render('users/show', {
                user
            });
        })
        .catch((err) => {
            console.log(`An Error has occured during update of User ${idOfUser}`);
            console.log(err);
        });
});


// CREATE NEW USER  /////////////////////

router.post("/", (req, res) => {
    const newUserInformation = req.body;

    User.create(newUserInformation)
        .then((user) => {
            res.render(
                'users/show',
                user
            )
        })  
        .catch((err) => {
            console.log("Error saving new user to database");
            console.log(err);
        })
})

// DELETE NEW USER.  ///////////////////

router.get("/:id/delete", (req, res) => {
    const userToDelete = req.params.id;

    User.findByIdAndRemove(userToDelete)
        .then(() => {
            console.log(`User ${userToDelete} has been deleted`);

            res.redirect('/');
        })
})

module.exports = router;