var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PlacesTraveledAPI');


module.exports.Place = require("./places.js");