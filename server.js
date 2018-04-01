var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');

//line below allows localhost to use public files 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

//line below sends index.html to localhost.
app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});

});

app.get('/api', controllers.api.index);

app.get('/api/places', controllers.places.index);

app.post('/api/places', controllers.places.create);

// app.get('/api/places' controllers.places.create);

app.get('/api/profile', function(req, res) {
  res.json({
    name: "Stacie Fraser",
    githubUserName: "stacief510",
    githubLink: "https://github.com/stacief510",
    // githubProfileImage: "https://avatars2.githubusercontent.com/u/30161498?v=4&u=9f3d9d4479e61b9a8ed9ff4b8ca7440ec432ad54&s=400",
    personalSiteLink: "",
    currentCity: "Danville"
    });
});





app.listen(3000);