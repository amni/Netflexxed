	var num_movies = 1000;
	var cur_lightbox = -1;


	$(document).ready(function() {

		$('#move-search').trigger('focus');

		$(window).bind('scroll', function(e) {
			parallaxScroll();
		});

		function parallaxScroll() {
			var scrolled = $(window).scrollTop();
			$('.parallax-1').css('top',(0-(scrolled*.4))+'px');
			$('.parallax-2').css('top',(0-(scrolled*.7))+'px');
			$('.parallax-3').css('top', (0-(scrolled*.7))+'px');

		}


	// Lightboxes
	for (var i = 0; i < num_movies; i++) {
		toggleLightbox(i);
	}

	$('.x-button').click(function() {
		$('#lightbox' + cur_lightbox).hide();	

	});
});

	function toggleLightbox(movie_id) {
		$('#movie' + movie_id).click(function() {
			for (var i = 0; i < num_movies; i++) {
				$('#lightbox' + i).hide();	
			}

			$('#lightbox' + movie_id).fadeIn(500);
			cur_lightbox = movie_id;
		});
	}

	function hideLightbox(movie_id) {
		$('#lightbox' + movie_id).attr('hidden', '');
	}