const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');

userRouter.get('/', (req, res) => {
    User.getUsers((err, users) => {
        if(err) throw err;
        res.json(users);
    });
});

userRouter.post('/register', (req, res) => {
    // res.json({"message": "register successful"});
    res.send("user register page");
});

userRouter.post('/login', (req, res) => {
    // res.json({"message": "login successful"});
    res.send("user login page");
});

module.exports = userRouter;
