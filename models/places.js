var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
	photo: String,
	country: String,
	dateVisited: String,
	notes: String
});

var Place = mongoose.model('Place', PlacesSchema);

module.exports = Place;