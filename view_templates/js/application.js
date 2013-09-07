$(document).ready(function() {
	var movies = 10;

	// Test function
	$('.btn').click(function(){
		console.log("Clicked a button.");
	});

	// Turn vertical scrolling into horizontal.
	$('body').mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});




	// When hovering over movie, show information.

	
	for (var i = 0; i < movies; i++) {
		showMovie(i);
	}



});

function showMovie(movie_num) {
	$('#movie' + movie_num).hover(function() {
		$('#Info-movie' + movie_num).removeAttr('hidden');
	},
	function() {
		$('#Info-movie' + movie_num).attr('hidden', '');
	});
}
