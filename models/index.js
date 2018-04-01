var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PlacesTraveledAPI');


module.exports.Places = require("./places.js");