$(document).ready(function() {
	var scrolledLeft = false;
	var num_movies = 100;

	$('#move-search').trigger('focus');
	// Alternate scrolling.
	$(window).scroll(function(){
		for (var i = 0; i < num_movies; i++) {
			animateMargins(i);
		}
		if  ($(window).scrollTop() >= 700) {
					
					$('.mainbox').css({position: 'fixed', height: '0px', top: '-1000px', 'z-index': '0px'});
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
					$('#scroll-objects').css({position: 'static', 'margin-top': '700px'});
					$('.mainbox').css({position: 'fixed', top: '-1000px'});
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

	
});

function toggleLightbox(movie_id) {
	$('#movie' + movie_id).hover(function() {
		$('#lightbox' + movie_id).fadeIn(500);
		$('#shade').fadeIn(500);
	},
	function() {
		$('#lightbox' + movie_id).fadeOut(200);
	});
}

function animateMargins(movie_id) {
	$('#movie' + movie_id).animate({marginLeft: '+=10px'}, 0);

}
