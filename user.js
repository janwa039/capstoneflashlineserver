var mongoose = require("mongoose");
var connection = require("./mongoose");

var usermodel= new mongoose.Schema({

    firstName: String,
    lastName: String,
    studentNumber: String
});

module.exports = connection.model("Users", usermodel);

