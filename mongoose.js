
var mongoose=require('mongoose');

var mongoDb='mongodb://jennyb:tukab2@ds259255.mlab.com:59255/basseysdatabase';

mongoose.connect(mongoDb, {useMongoClient:true});

var db=mongoose.connection;

db.on('error', function(err){
    console.log('the error is:' , err.message);
});

db.on('open', function(){
    console.log('we are connected');
});

module.export=mongoose;