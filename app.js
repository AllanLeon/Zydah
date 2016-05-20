var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser({'type': 'application/vnd.api+json'}));
app.use(methodOverride());

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Max-Age', '86400');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
	next();
});

app.listen(process.env.PORT || 8080, function() {
	console.log("Express server listening on port %d in $s mode", this.address().port, app.settings.env);
});

var Schema = mongoose.Schema;

var uristring = 'mongodb://localhost/ZydahDB';

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log('Error connecting to: ' + uristring + ' --' + err);
	} else {
		console.log('Succeeded connecting to: ' + uristring);
	}
});

var Videos = mongoose.model('videos', new Schema( {
	'title': String,
	'description': String,
	'rating': Number,
	'duration': Number,
	'id': String,
	'tags': [String],
	'comments': Array
} ));

var Users = mongoose.model('users', new Schema( {
	'firstName': String,
	'lastName': String,
	'email': String,
	'password': String,
	'photo': String
} ));

var user = new Users({
	'firstName': 'test',
	'lastName': 'prueba',
	'email': 'a@b.c',
	'password': '123',
	'photo': 'http://images.8tracks.com/cover/i/001/550/687/pewdiepie_is_fabulous__by_nylah22-d5w7exz-2234.jpg?rect=226,0,900,900&q=98&fm=jpg&fit=max'
});

user.save(function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Firrrrrrst user! :D');
	}
});

var video = new Videos({
    'title': 'A Love Story.',
    'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
    'rating': 231236,
    'duration': 38,
    'id': 'hHOt7eEzbxo',
    'tags': ['comedy', 'romance'],
    'comments': [
		{
			'name': 'A',
			'img': 'assets/images/user_circle.png',
			'text': 'first comment'
		},
		{
			'name': 'b',
			'img': 'assets/images/user_circle.png',
			'text': 'wqert'
		},
		{
			'name': 'wqertyujh',
			'img': 'assets/images/user_circle.png',
			'text': 'qwertghjhgvcxz'
		},
		{
			'name': 'qqwq',
			'img': 'assets/images/user_circle.png',
			'text': 'rtyuiolkmnbv'
		},
		{
			'name': 'poqe',
			'img': 'assets/images/user_circle.png',
			'text': 'wqerghfdsa'
		},
		{
			'name': 'qwertyn',
			'img': 'assets/images/user_circle.png',
			'text': 'qwertglklm'
		}
	]
});

video.save(function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Firsssssst video! :D');
	}
});