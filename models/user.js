const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    location: String,
    meta: { age: Number, website: String },
    created_date: { type: Date, default: Date.now },
    updated_date: Date
});
const User = module.exports = mongoose.model("User", userSchema);