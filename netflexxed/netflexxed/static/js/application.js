$(document).ready(function() {
	var scrolledLeft = false;
	var num_movies = 100;
	// Alternate scrolling.

	$(window).scroll(function(){
		if  ($(window).scrollTop() >= 900) {
			if ($(window).scrollLeft() === 0) {
				if (scrolledLeft) {
					scrolledLeft = false;
					$(window).scrollTop(899);
					$('body').mousewheel(function(event, delta) {
						this.scrollTop -= (delta * .2);
					});
				}
				else {
					scrolledLeft = true;
					$(window).scrollLeft(1);

				}
				
			}

			else if ($(window).scrollLeft() > 0) {

				$(function() {
					$('#triangle').css({position: 'fixed', top: '0px', 'z-index': '60'});
					$('#back').css({position: 'fixed', top: '-700px'});
					$('#scroll-objects').css({'margin-top': '700px'});
					$('body').mousewheel(function(event, delta) {
						this.scrollLeft -= (delta * .3);
						event.preventDefault();
					});
				});
			}
		}
	});

	// Lightboxes
	
	for (var i = 0; i < num_movies; i++) {
		toggleLightbox(i);
	}

	function toggleLightbox(movie_id) {
		$('#movie' + movie_id).hover(function() {
			$('#lightbox' + movie_id).fadeIn(3000);
		},
		function() {
			$('#lightbox' + movie_id).attr('hidden', '');
		});
	}
});