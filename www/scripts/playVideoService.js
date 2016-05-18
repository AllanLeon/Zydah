app.service('PlayVideoService', function() {
	this.video = {};

	this.setVideo = setVideo;
	this.getVideo = getVideo;

	function setVideo(video) {
		this.video = video;
	}

	function getVideo() {
		return this.video;
	}
});