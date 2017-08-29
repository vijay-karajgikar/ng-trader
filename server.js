const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = 1368 || process.env.PORT;
const app = express();
const userRouter = require('./routes/userRoutes');
const userModel = require('./models/user');

mongoose.connect("mongodb://localhost:27017/ngtrader");
mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mongo db");
});
mongoose.connection.on('connected', () => {    
    console.log("Connection to mongodb successful");
    console.log("**************************************************");
});

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log("**************************************************");
    console.log("ng-trader application - http://localhost:" + port);    
});