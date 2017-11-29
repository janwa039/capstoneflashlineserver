var get = require('./mongoose');
var temp=require('mongoose')

var institution = new temp.Schema({
    name: {type: String, required: true},
    building: [
        {
            name: String,
            currentNumber: {type: Number},
            nowServing: Number,
            tickets: [{
                user: String,
                number: Number
            }],
            peopleWaiting: Number,
            estimatedTime: Number
        }
    ]
});

module.exports = get.model("uos", institution);

