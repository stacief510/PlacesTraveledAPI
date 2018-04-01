//seed.js 
var db = require("./models");

var real_place = [{
  photo:"./images/Paris.jpg",
  country: 'France',
  dateVisited: 'July 2003',
  notes:"Visited Paris, Provence, Nice, and Cassis."
}, {

  photo:"./images/Barcelona.jpg",
  country: 'Spain',
  dateVisited: 'July 2003',
  notes:"Visited Barcelona."
},{
  photo:"./images/Londo.jpg",
  country: 'England',
  dateVisited: 'December 2009',
  notes:"Visited London."
},{
  photo:"./images/Positano.jpg",
  country: 'Italy',
  dateVisited: 'July 2016',
  notes:"Visited the Almafi Coast: Naples, Sorrento, Pompeii, Positano, Almafi. Also visited Rome."
},{
  photo:"./images/Santorini.jpg",
  country: 'Greece',
  dateVisited: 'October 2017',
  notes:"Visited Mykonos, Santorini, Athens."
}];

db.Place.remove({}, function(err, place){
	// code in here runs after all places are removed
	 //  if (err) {
  //   console.log(`failed to remove all places in db: err = ${err}`);
  //   return;
  // }
  // console.log("successfully wiped out everything in the db");
  
  db.Place.create(real_place, function(err, place){
    // code in here runs after all places are created
    if (err) { 
    	return console.log('failed to create a place', err); 
    }
    console.log("successfully created place", place);
    console.log('created', place.length, 'places');
    process.exit();
  });
});