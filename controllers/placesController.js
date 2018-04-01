// controllers/placessController.js
//inside here put var placeList =[{ _id: x, country:x, datesVisited:x}] as hard coded place data for now
var db = require("../models");

// var placeList = [{
//   _id:132,
//   photo:"./images/Barcelona.jpg",
//   country: 'Spain',
//   dateVisited: 'July 2003',
//   notes:"Visited Barcelona."
// },
// {
//   _id:133,
//   photo:"./images/Paris.jpeg",
//   country: 'France',
//   dateVisited: 'July 2003',
//   notes:"Visited Paris, Provence, Nice, and Cassis."
// }];


// GET /api/places
function index(req, res) {
  // send back all places as JSON
  db.Place.find({}, function(err, place){
            
              if (err){
                return console.log('failed because you suck.');
              }
              res.json(place);
              });
}

// POST /api/places
function create(req, res) {
  // create a place based on request body and send it back as JSON
  console.log(req.body);
  db.Place.create(req.body, function(err, place){
    if (err){
      res.status(500).send(err);
            return;
    }
    res.json(place);
  });
}

// GET /api/places/:placeId
function show(req, res) {
  // find one place by id and send it back as JSON
}

// DELETE /api/places/:placeId
function destroy(req, res) {
  // find one place by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/places/:placeId
function update(req, res) {
  // find one place by id, update it based on request body,
  // and send it back as JSON
}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};