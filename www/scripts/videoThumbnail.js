app.directive('videoThumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			video: "="
		},
		template: '<article class="video_info">' +
			'<div class="video_thumbnail" style="background-image: url(assets/images/thumbnails/{{ video.id }}.jpg);">' +
			'<h3 class="video_title">{{ video.title }}</h3><br>' +
			'<h4 class="video_duration">{{ secondsToMinSec(video.duration) }}</h4><br>' +
		'</div>' +
		'<div class="video_bottom_info">' +
			'<h5 class="video_rating">{{ video.rating }}</h5>' +
			'<h5 class="video_tags">' +
				'<span ng-repeat="tag in video.tags">{{ tag }}{{$last ? "" : ","}}</span>' +
			'</h5>' +
		'</div>' +
	'</article>',
	}
});