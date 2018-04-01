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

app.listen(3000);