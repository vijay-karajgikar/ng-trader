const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');

userRouter.get('/', (req, res) => {
    User.find( (err, users) => {
        if(err) throw err;
        res.json(users);
    });
});

userRouter.post('/details', (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err) {
            console.log(err);
            res.json({"success": false, "message": "User not found"});
        } else if (user == null) {
            res.json({"success": false, "message": "User not found"});
        } else {
            res.json(user);
        }
    });
});

userRouter.post('/register', (req, res) => {    
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    newUser.location = req.body.location;
    newUser.meta = req.body.meta;

    User.findOne({username: newUser.username}, (err, user) => {
        if(err) {
            console.log(err);
            res.json({"success": false, "message": "error while registering the user"});
        } 
        
        if (user != null) {
            console.log("user already exists");
            res.json({"success": false, "message": "A user with same username already exists"});
        }
    });

    User.create(newUser, (err, newUser) => {
        if(err) {
            console.log(err);
            res.json({"success" : false, "message": "User registration failed. Check logs for more details."})            
        } else {
            res.json({"success": true, "message": "User Registered successfully" });
        }
    });
});

userRouter.post('/delete', (req, res) => {
    
    const userToDelete = new User();
    userToDelete.name = req.body.name;
    userToDelete.username = req.body.username;
    userToDelete.name = req.body.name;
    userToDelete.username = req.body.username;
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
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username, password: password}, (err, userFound) => {
        if(err) {
            console.log(err);
            res.json({"success": false, "message": "Login failed. Please check the username and password and try again"});
        } 
        
        if (!userFound) {
            console.log("user not found");
            res.json({"success": false, "message": "user not found"});
        } else {
            res.json( {"success": true, "message": "Login successful" });
        }
    });
});

userRouter.post('/edit', (req, res) => {
    User.findOne({username: req.body.username}, (err, userFound) => {
        if(err) {
            console.log(err);
            res.json({"success": false, "message": "Error locating the user"});
        }

        if (!userFound) {
            console.log("user not found");
            res.json({"success": false, "message": "user not found"});
        }

        userFound.name = req.body.name;
        userFound.password = req.body.password;
        userFound.email = req.body.email;
        userFound.location = req.body.location;
        userFound.meta = req.body.meta;
        User.update(userFound, (err) => {
            res.json({"success": true, "message": "user updated"});
        });
    });
});

module.exports = userRouter;
