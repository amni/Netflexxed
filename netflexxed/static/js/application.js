	var num_movies = 1000;
	var cur_lightbox = -1;


	$(document).ready(function() {
		blink(1);
		blink(2);
		blink(3);
		blink(4);
		blink(5);

		

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

	function blink(movie_id) {
		console.log(movie_id);
		$('#blink' + movie_id).animate({opacity: '.2'}, 1000 * Math.random(), function() {
			var rand  = movie_id + 5;
			if (rand >= 30) {
				rand -= 29;
			}
			$('#blink' + movie_id).animate({opacity: '1'}, 1000 * Math.random(), function() {
				blink(rand)
			});
		});
	}

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