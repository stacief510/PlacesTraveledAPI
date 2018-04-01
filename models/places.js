var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
	country: String,
	dateVisited: String
})

var Place = mongoose.model('Place', PlacesSchema);

module.exports = Place;