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

		}
/*
	$(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
		$("#scroll-movies").animate({top: "-=9px"}, 0);
          }
          else {
             //Replace this with your function call for upward-scrolling
		$("#scroll-movies").animate({top: "+=9px"}, 0);
          }
          //Updates scroll position
          lastScroll = st;
      });
    });
	*/

	// Alternate scrolling.
	



	// Lightboxes
	for (var i = 0; i < num_movies; i++) {
		toggleLightbox(i);
	}

	$('.x-button').click(function() {
						$('#lightbox' + cur_lightbox).hide();	

	})
});

	function toggleLightbox(movie_id) {
		$('#movie' + movie_id).click(function() {
			
			for (var i = 0; i < num_movies; i++) {
				$('#lightbox' + i).hide();	
			}
			
			$('#lightbox' + movie_id).fadeIn(500);
			cur_lightbox = movie_id;
		// $('#shade').fadeIn(500);
	});
	}

	function hideLightbox(movie_id) {
		$('#lightbox' + movie_id).attr('hidden', '');
	}
	function animateMargins(movie_id) {
		$('#movie' + movie_id).animate({marginLeft: '+=10px'}, 0);

	}
