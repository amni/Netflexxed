$(document).ready(function() {
	// Test function
	$('.btn').click(function(){
		console.log("Click");
	});

	
	$(function() {
		$('body').mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
	});



});