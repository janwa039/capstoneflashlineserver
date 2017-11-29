var servingpage=require('./servingpage');
var mongoose=require('mongoose');

//var first=mongoose.model('UO', servingpage);

var universityOfOttawa=new servingpage({
    name: 'UO',
        building: [{
                name: 'SITE 1020',
                currentNumber: 1,
                nowServing: 1,
                tickets: [{
                user: "",
                 number: " "
                }],
                peopleWaiting: "",
                estimatedTime: ""
        },
            {
                name: 'MARIE CURIE',
                currentNumber: 1,
                nowServing: 1,
                tickets: [{
                    user: "",
                    number: ""
                }],
                peopleWaiting: "",
                estimatedTime: ""
            },

            {
                name: 'INFO SERVICE',
                currentNumber: 1,
                nowServing: 1,
                tickets: [{
                    user: "",
                    number: ""
                }],
                peopleWaiting: "",
                estimatedTime: ""
            },

            {
                name: 'UPASS',
                currentNumber: 1,
                nowServing: 1,
                tickets: [{
                    user: "",
                    number: ""
                }],
                peopleWaiting: "",
                estimatedTime: ""
            },

            {
                name: 'FACULTY OF SCIENCE',
                currentNumber: 1,
                nowServing: 1,
                tickets: [{
                    user: "",
                    number: ""
                }],
                peopleWaiting: "",
                estimatedTime: ""
            }

        ]
})

universityOfOttawa.save();