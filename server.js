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

var uristring = 'mongodb://admin:admin@ds025232.mlab.com:25232/zydahdb';

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
	'firstName': 'Felix',
	'lastName': 'Kjellberg',
	'email': 'pew@die.pie',
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
		'title': 'Pewds Tries To Play: Muse - Plug In Baby (Rocksmith)',
		'description': 'Like for more guitar songs? :) I know it may not be for everyone but I think every once in a while it could be nice. ^^',
		'tags': ['rocksmith', 'muse'],
		'rating': 58707,
		'duration': 331,
		'id': 'E4eXuIU894g'
	},
	{
		'title': 'HOW TO DANCE!',
		'description': 'Man Im getting out of shape! Lol gotta dance more!',
		'tags': ['justdance', 'howto'],
		'rating': 211945,
		'duration': 346,
		'id': '9CCUwVh0Wzo'
	},
	{
		'title': 'WORLDS MOST OFFENSIVE GAME? - (Fridays With PewDiePie - Part 73)',
		'description': 'Game ► Cards Against Humanity. You can buy it online (Amazon) or play online for free (Google dat bitch)',
		'tags': ['worlds', 'offensive', 'game', 'fridays'],
		'rating': 700189,
		'duration': 490,
		'id': 'z-3xIw730pg'
	},
	{
		'title': 'FLAPPY BIRD - DONT PLAY THIS GAME!',
		'description': 'Changed the name on this because everyone kept asking me to play Flappy Bird even though I have already played it. :P',
		'tags': ['flappy', 'bird', 'game'],
		'rating': 770186,
		'duration': 585,
		'id': 'lQz6xhlOt18'
	},
	{
		'title': 'The Impossible Quiz.',
		'description': 'All Parts ► http://bit.ly/ImpossibleQuizPewDiePie',
		'tags': ['impossible', 'quiz'],
		'rating': 430093,
		'duration': 700,
		'id': 'rOZ0OHaPmnk'
	},
	{
		'title': 'SCARIEST GAME IN FOREVER!! - LAYERS OF FEAR (Full Game) (1)',
		'description': 'Welcome to the full playthrough the horror game layers of fear!',
		'tags': ['layers', 'fear', 'scary'],
		'rating': 73804,
		'duration': 1351,
		'id': 'C2kD4JrDZoQ'
	},
	{
		'title': 'FANFICTION GONE VIRAL GONE SEXUAL',
		'description': 'Fapping material. 100% free',
		'tags': ['fanfiction', 'john', 'cena'],
		'rating': 117264,
		'duration': 498,
		'id': 'buSxBpWbhCE'
	},
	{
		'title': 'MILK SODA? (5 Weird Stuff Online Part 23)',
		'description': 'Thank you Loot Crate for sponsoring this video',
		'tags': ['milk', 'soda', 'weird', 'stuff'],
		'rating': 242046,
		'duration': 557,
		'id': 'VGXTcXIY_ss'
	},
	{
		'title': 'EATING A SCORPION (5 Weird Stuff Online - Part 21)',
		'description': 'Thanks to Loot Crate for sponsoring this video!',
		'tags': ['scorpion', 'weird', 'stuff'],
		'rating': 215523,
		'duration': 600,
		'id': 'l9K2Qwbf8T0'
	},
	{
		'title': 'POKÉMON PACK OPENING - SICKEST REACTION!! (PARODY)',
		'description': 'Please enter code "Iloveass" over at www.pokemenscards.com and get 10^-5*50 % off your next purchase! WOW!',
		'tags': ['pokemon', 'pack', 'opening'],
		'rating': 299664,
		'duration': 244,
		'id': '7E0qBskfnNc'
	},
	{
		'title': 'HAPPY WHEELS - FUNNY MOMENTS MONTAGE #3',
		'description': 'Thanks for SUBSCRIBING!',
		'tags': ['happy', 'wheels', 'funny', 'moments'],
		'rating': 484868,
		'duration': 408,
		'id': 'tNwFexjnbyM'
	},
	{
		'title': 'POKÉMON VR // MY CHILDHOOD DREAM COMES TRUE!',
		'description': 'I cri',
		'tags': ['pokemon', 'vr'],
		'rating': 141204,
		'duration': 438,
		'id': 'yzo7HMHFR4c'
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
}*/

app.get('/api/videos', function(req, res) {
	Videos.find(function(err, videos) {
		if (err) {
			res.send(err);
		} else {
			res.json(videos);
		}
	});
});

app.get('/api/videos/filter', function(req, res) {
	req.query.title = new RegExp(req.query.title, "i");
	console.log(req.query);

	Videos.find(req.query, function(err, videos) {
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
			res.status(404).send(err);
		} else {
			if (user) {
				if (user.password === req.query.password) {
					res.json(user);
				} else {
					res.status(404).send('Incorrect password!');
				}
			} else {
				res.status(404).send('Incorrect email!');
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
	Users.create(req.body, function(err) {
		if (err) {
        	res.status(404).send(err);
    	} else {
    		res.json({'resp': true});
    	}
	});
});