//seed.js 
var db = require("./models");

var placeList =[
  // data here soon!
];

db.Place.remove({}, function(err, place){
  // code in here runs after all places are removed
  db.Place.create(placeList, function(err, place){
    // code in here runs after all places are created
    if (err) { return console.log('ERROR', err); }
    console.log("all places:", place);
    console.log("created", place.length, "places");
    process.exit();
  });
});