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
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
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
	'id': {
		'type': String,
		'unique': true
	},
	'tags': [String],
	'comments': Array/*,
	'likes': Array,
	'dislikes': Array*/
} ));

var Users = mongoose.model('users', new Schema( {
	'firstName': String,
	'lastName': String,
	'email': {
		'type': String,
		'unique': true
	},
	'password': String,
	'photo': String
} ));
/*
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
*/
/*var video = new Videos({
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
});*/
/*
var testVideos = [
        {
            "title": "I QUIT FOR A NEW JOB! - HTC Vive 04",
            "description": "HTC VIve once again!",
            "tags": ["simulator", "VR", "cooking"],
            "rating": 222864,
            "duration": 123,
            "id": "e7Ru2x4qHlI"
        },
        {
            "title": "BEST GAME 2016!!!!!!!!!!!!!!!!!!!!!!!!!!! - Bear Simulator",
            "description": "Bear Simulator, such a beautiful game...",
            "tags": ["simulator", "bear", "2016"],
            "rating": 136928,
            "duration": 678,
            "id": "hbVUF5b307s"
        },
        {
            "title": "NASA HIRE ME!!! (Scrap Mechanic)",
            "description": "Scrap Mechanic=Better then minecraft?",
            "tags": ["nasa", "scrap", "mechanic"],
            "rating": 168482,
            "duration": 324,
            "id": "NrvfFmpdcG0"
        },
        {
            "title": "MAKING FLAWLESS BRIDGES! || Bridge Constructor",
            "description": "Making bridges is my life. Its what I do, its what I breathe. Its what I eat.",
            "tags": ["bridge", "constructor", "builder"],
            "rating": 159131,
            "duration": 1372,
            "id": "prt1bk2B-gs"
        },
        {
            "title": "PIMPS 4 LYF (Japan World Cup #3)",
            "description": "Professor Pimp: http:/www.twitch.tv/bradwoto",
            "tags": ["japan", "world", "cup"],
            "rating": 138269,
            "duration": 434,
            "id": "bngSPcW8zcI"
        },
        {
            "title": "DONT TOUCH THE BALLS! (Gmod)",
            "description": "Dont touch my balls please",
            "tags": ["gmod"],
            "rating": 105309,
            "duration": 964,
            "id": "vValtBioF0I"
        },
        {
            "title": "BETTER THAN FIVE NIGHTS AT FREDDYS?! (Boogeyman)",
            "description": "Boogeyman vs. Five Nights at Freddys?",
            "tags": ["boogeyman"],
            "rating": 169268,
            "duration": 712,
            "id": "C8o6udnHNlw"
        },
        {
            "title": "DO YOU EVEN ARCHER BRO?! - Probably Archery",
            "description": "Please: Respect each other in the comments.",
            "tags": ["probably", "archery"],
            "rating": 187691,
            "duration": 983,
            "id": "9TyU2gIRgtI"
        },
        {
            "title": "STEALING JETS! (GTAV Funny Moments Online #2)",
            "description": "WATCH ALL EPISODES: youtube.com/watch?v=vjqCs... LIKE A BRO!",
            "tags": ["GTA", "stealing", "jets", "online"],
            "rating": 147790,
            "duration": 123,
            "id": "B1Fdg8VVTec"
        },
        {
            'title': 'A Love Story.',
            'description': 'Falcon Fan realized broke up with his girlfriend Fedora Lover.',
            'tags': ['comedy', 'romance'],
            'rating': 231236,
            'duration': 38,
            'id': 'hHOt7eEzbxo'
        }
    ];

for (i = 0; i < testVideos.length; i++) {
	testVideos[i].comments = [];
	var video = new Videos(testVideos[i]);

	video.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Video saved');
		}
	});
}
*/
app.get('/api/videos', function(req, res) {
	Videos.find(function(err, videos) {
		if (err) {
			res.send(err);
		} else {
			res.json(videos);
		}
	});
});

app.get('/api/tags', function(req, res) {
	var tags = [];
	Videos.find(function(err, videos) {
		if (err) {
			res.json(tags);
		} else {
			for (i = 0; i < videos.length; i++) {
				tags = tags.concat(videos[i].tags);
			}
			tags = tags.filter(function(item, pos, self) {
    			return self.indexOf(item) == pos;
			});
			res.json(tags);
		}
	});
});

app.get('/api/video', function(req, res) {
	var query = {
		'id': req.query.id
	};
	Videos.findOne(query, function(err, video) {
		if (err) {
			res.send(err);
		} else {
			res.json(video);
		}
	});
});

app.get('/api/user', function(req, res) {
	var query = {
		'email': req.query.email
	};
	Users.findOne(query, function(err, user) {
		if (err) {
			res.send(err);
		} else {
			if (user) {
				if (user.password === req.query.password) {
					res.json(user);
				} else {
					res.send('Incorrect password!');
				}
			} else {
				res.send('Incorrect email!');
			}
		}
	});
});

app.post('/api/video/rating', function(req, res) {
	var query = {
		'id': req.body.id
	};

	Videos.update(query, {
		'rating': req.body.rating
	}, {'safe': true, 'upsert': false},
	    function(err, model) {
    	if (err) {
        	res.send(err);
    	} else {
    		res.json({'resp': true});
    	}
    });
});

app.post('/api/video/newComment', function(req, res) {
	var query = {
		'id': req.body.id
	};

	Videos.update(query, {
		'$push': {'comments': req.body.newComment}
	}, {'safe': true, 'upsert': false},
	    function(err, model) {
    	if (err) {
        	res.send(err);
    	} else {
    		res.json({'resp': true});
    	}
    });
});

/*app.post('/api/video', function(req, res) {
	var query = {
		'id': req.query.id,
		'rating': req.query.rating,
		'newComment': req.query.newComment
	};

	Videos.update({'id': query.id}, {
		'rating': query.rating,
		'$push': {'comments': query.newComment}
	}, {'safe': true, 'upsert': false},
	    function(err, model) {
    	if (err) {
        	console.log(err);
    	} else {
    		console.log('Video successfully updated! :D');
    	}
    });
});*/

app.post('/api/user', function(req, res) {
	console.log(req.body);
	Users.create(req.body, function(err) {
		if (err) {
        	res.send(err);
    	} else {
    		res.json({'resp': true});
    	}
	});
});