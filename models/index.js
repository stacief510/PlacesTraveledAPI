var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/PlacesTraveledAPI' );

module.exports.Place = require("./places.js");