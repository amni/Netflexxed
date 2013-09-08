	var num_movies = 500;
	var cur_lightbox = -1;
	var top = true;

	$(document).ready(function() {
		// Scroller arrow animation.
		scrollTriangle();

		$('#triangle').click(function() {
			$('#triangle').hide();
			$('html,body').animate({ scrollTop: 1000}, 3000);
			return false; 
		});

		$(window).scroll(function() {
			if ($(window).scrollTop() > 400) {
				$('#triangle').hide();
				$('#team-info').fadeOut(fadeLength);
				$('#use-info').fadeOut(fadeLength);
				$('#default').fadeIn(fadeLength);					
			}
			else {
				$('#triangle').show();
			}

		});
		
		var fadeLength = 1000;
		
		$('#to-top').click(function() {
			$('#team-info').fadeOut(fadeLength);
			$('#use-info').fadeOut(fadeLength);
			$('#default').fadeIn(fadeLength);
			$('html,body').animate({ scrollTop: 0}, 3000);
			return false; 
		});

		$('#to-use').click(function() {
			$('#default').fadeOut(fadeLength, function() {
				$('#use-info').fadeIn(fadeLength);
			});
			$('#team-info').fadeOut(fadeLength, function() {
				$('#use-info').fadeIn(fadeLength);
			});
		});

		$('#the-team').click(function() {

			$('#default').fadeOut(fadeLength, function() {
				$('#team-info').fadeIn(fadeLength);

			});
			$('#use-info').fadeOut(fadeLength, function() {
				$('#team-info').fadeIn(fadeLength);

			});
		});

		// Flashing posters.
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

	// Play icon.
	$('.poster').hover(function() {
		$('#play-icon').show();
	});

});
	function scrollTriangle() {
		$('#triangle').animate({bottom: '350px'}, 1000, function() {
			$('#triangle').animate({bottom: '300px'}, 1000, function() {
				scrollTriangle();
			});
		});
	}

	function blink(movie_id) {
		$('#blink' + movie_id).animate({opacity: '.36'}, 1000 * Math.random(), function() {
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
			console.log(movie_id);
			for (var i = 0; i < num_movies; i++) {
				$('#lightbox' + i).hide();	
			}

			$('#lightbox' + movie_id).fadeIn(500);
			cur_lightbox = movie_id;
		});
		$('#audience' + movie_id).click(function() {
			console.log(movie_id);
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