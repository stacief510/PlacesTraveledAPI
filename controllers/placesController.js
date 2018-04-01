// controllers/placessController.js
//inside here put var placeList =[{ _id: x, country:x, datesVisited:x}] as hard coded place data for now
var db = require("../models");


// GET /api/places
function index(req, res) {
  // send back all places as JSON
}

// POST /api/places
function create(req, res) {
  // create a place based on request body and send it back as JSON
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