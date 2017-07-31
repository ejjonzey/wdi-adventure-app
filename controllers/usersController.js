const express = require('express');
const router = express.Router();

//var Adventure = require("../models/adventure");
var User = require("../models/users")


//index of categories
router.get('/', (req, res) => {
    res.render('categories');
})

// NEW USER.  ///////////////////////////

router.get("/new", (req, res) => {
    res.render('users/new');
})


// SHOW A USER

router.get("/:id", (req, res) => {
    const idOfUser = request.params.user;

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

router.put("/:id", (res, req) => {
    const idOfUser = req.params.user;
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


// EDIT USER  ///////////////////////////

router.get("/:id/:edit", (req, res) => {
    const userToFind = req.params.user;

    User.findById(userToFind)
        .then((user) => {
            res.render('users/edit',
                user
            )
        })
        .catch((err) => {
            console.log(`An Error has occured rendering update form for User ${userToFind}`);
            console.log(err);
        })
})


// CREATE NEW USER  /////////////////////

router.post("/", (req, res) => {
    const newUserInformation = req.body;

    User.create(newUserInformation)
        .then((user) => {
            response.render(
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
    const userToDelete = req.params.user;

    User.findByIdAndRemove(usecrToDelete)
        .then(() => {
            console.log(`User ${userToDelete} has been deleted`);

            res.redirect('/');
        })
})

module.exports = router;