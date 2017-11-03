const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const port = 1368 || process.env.PORT;
const app = express();
const userRouter = require('./routes/userRoutes');
const userModel = require('./models/user');


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/ngtrader", {
    useMongoClient: true, promiseLibrary: global.Promise
});
var database = mongoose.connection;
database.on('error', (err) => {
   console.log('Error connecting to mongo database');
   console.log(err);
});
database.once('open', () => {
    console.log("**************************************************");
    console.log("Connected to mongoDB - ngtrader");
    console.log("**************************************************");
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log("**************************************************");
    console.log("ng-trader application - http://localhost:" + port);
});
