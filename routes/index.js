var express = require('express');
var router = express.Router();
const institution = require(__dirname + '/../servingpage');

const institution = require(__dirname + '/../user');



//get the current number
router.get('/institutions/:institution/buildings/:build', function(req, res) {



    var theinstitution=req.params.institution;
    var thebuilding=req.params.build;

    institution.findOne({"_id": theinstitution},  function(err, actualNumber) {

        console.log(actualNumber);
    if (err) {
        console.log(err);
    }else{

        if ( actualNumber){

            const buildings = actualNumber.building;
            var currentNumber = -1;

            for (var i = 0; i < buildings.length; i++) {

                if(buildings[i]._id == thebuilding)
                {
                    console.log(buildings[i]);
                    const build = buildings[i];

                    currentNumber=build.currentNumber;

                }
                else
                {
                    console.log(err);
                }
            }
            res.json({
                actualNumber: currentNumber
            })
        }else{
            res.status(404).json({messsage: "NOT FOUND"})
        }

    }})

});


//post the updated number and saves the new number in the data database
router.post('/institutions/:institution/buildings/:build', function(req, res) {

    console.log(req.param.build);
    var theupdatedinstitution=req.params.institution;
    var theupdatedbuilding=req.params.build;
   // console.log(req.param.theupdatedinstitution);

     institution.findOne({"_id": theupdatedinstitution}, function(err, updateNumber) {
         //console.log(updateNumber);
         if (err) {
             console.log(err.message)
         }
         else {
             const updatedbuildings = updateNumber.building;
             //console.log(updateNumber.building);

             var update= -1;

             for (var i = 0; i < updatedbuildings.length; i++) {


                 if (updatedbuildings[i]._id == theupdatedbuilding) {

                     update=updatedbuildings[i].currentNumber;
                 }
                 else
                 {
                     console.log("this is an" + err);
                 }
             }
             update = update + 1;

             res.json({

                 updateNumber: update
             })

             institution.findOne({_id: theupdatedinstitution}, function (err, found) {
                 console.log("FOUND INSTITUTIONS: ");
                 console.log(found)

                 if (found) {

                     for(var i=0; i<found.building.length; i++){

                         if(found.building[i]._id == theupdatedbuilding){

                             found.building[i].currentNumber=update;
                         }
                     }
                     found.save()

                 }

             })

         };
     });
});

//get firstname, lastname, email
router.post('/users, function(req, res) {

    var user= new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studentNumber: req.body.studentNumber
    })

    user.save(function(err, information){
        if(!err){
            res.status(200).json({message:"now saved"});
        }
        else
        {
            res.status(500).json({message:"no informartion found"});
        }
    })


    res.end();
});

//GET all the buildings in an institution
router.get('/institutions/:institution/buildings', function(req, res) {
    console.log(req.params.institution);
    res.end();
});

//GET the current ticket number in a building
router.get('/institutions/:institution/buildings/:building/current_ticket', function(req, res) {
    console.log(req.params.institution);
    var thename=req.params.institution;



});

//Update an institution
router.put('/institutions/:institution', function(req, res) {
    res.end();
});

//Update a building in an institution
router.post('/institutions/:institution/buildings/:building', function(req, res) {
    console.log(req.params.institution);



});

module.exports = router
