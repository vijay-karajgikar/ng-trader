const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const userRouter = express.Router();
const User = require('../models/user');


userRouter.post('/register', (req, res) => {

    User.findOne({email: req.body.email}, (err, user) => {

       if(err) {
           console.log("error validating the user");
           return res.json({"success": false, "message": "Error validating the user"});
       } else {
           
           if(user) {
               console.log("user exists");
               return res.json({"success": false, "message": "User already exists"});
           } else {
               console.log("user does not exist");

               const newUser = new User();
               newUser.email = req.body.email;
               newUser.name = req.body.name;
               newUser.location = req.body.location;
               newUser.meta = req.body.meta;
               bcrypt.hash(req.body.password, null, null, (err, hash) => {
                   if(err) {
                       console.log("error creating the hash for the password");
                       return res.json({"success": false, "message": "Error registering the user while creating the hash for the password"});
                   } else {
                       newUser.password = hash;
                   }
               });
               console.log("creating the new user");

               User.create(newUser, (error, newUser) => {
                   if(error) {
                       console.log("error creating the new user");
                       console.log(error);
                       return res.json({"success": false, "message": "Error registering the user"});
                   } else {
                       console.log("User creation successful");
                       return res.json({"success": true, "message": "User creted."});
                   }
               });
           }
       }
    });
});


/*
userRouter.post('/delete', (req, res) => {

    const userToDelete = new User();
    userToDelete.name = req.body.name;
    userToDelete.password = req.body.password;
    userToDelete.email = req.body.email;
    userToDelete.location = req.body.location;
    userToDelete.meta = req.body.meta;

    User.findOne(userToDelete, (err, userFound) => {
        if(err) {
            console.log(err);
            res.json({"success": false, "message": "User not found"});
        }

        User.remove(userFound, (err) => {
                if(err) {
                    console.log(err);
                    res.json({"success": false, "message": "Error deleting the user"});
                } else {
                    res.json({"success": true, "message":"User unregistered"});
                }
            });
    });
});

userRouter.post('/login', (req, res) => {

    User.findOne({email: req.body.email, password: req.body.password}, (err, userFound) => {
        if(err) {
            console.log(err);
            return res.json({"success": false, "message": "Login failed. Check logs for more details."});
        }

        if (!userFound) {
            console.log("user not found");
            return res.json({"success": false, "message": "User with this email does not exist."});
        } else {
            return res.json( {"success": true, "message": "Login successful" });
        }
    });
});


userRouter.post('/edit', (req, res) => {

    User.findOne({email: req.body.email}, (err, userFound) => {
        if(err) {
            console.log(err);
            return res.json({"success": false, "message": "Error locating the user"});
        }

        if (!userFound) {
            console.log("user not found");
            return res.json({"success": false, "message": "user not found"});
        }

        userFound.name = req.body.name;
        userFound.password = req.body.password;
        userFound.email = req.body.email;
        userFound.location = req.body.location;
        userFound.meta = req.body.meta;
        User.update(userFound, (err) => {
            if(err) return next(err);
            return res.json({"success": true, "message": "user updated"});
        });
    });
});
*/

module.exports = userRouter;
