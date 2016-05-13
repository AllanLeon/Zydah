app.controller('videosController', function($scope, $location, $routeParams, filterFilter) {
    $scope.videos = [
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

	if ($routeParams.query != "") {
		$scope.videos = filterFilter($scope.videos, {'title': $routeParams.query})
	}

	$scope.secondsToMinSec = secondsToMinSec;
	$scope.showVideo = showVideo;

	function secondsToMinSec(x) {
		var minutes = Math.floor(x / 60);
		var seconds = x % 60;
		return minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	}

	function showVideo(id) {
		$location.path('/video/' + id);
	}
});