$(document).ready(function() {
	var scrolledLeft = false;

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if  ($(window).scrollTop() >= 700) {
			if ($(window).scrollLeft > 0) {
				scrolledLeft = true;
			}
			
			if (scrolledLeft && $(window).scrollLeft === 0) {
$(function() {
					scrolledLeft = false;
					$('body').mousewheel(function(event, delta) {
						this.scrollTop -= (delta * .2);
						event.preventDefault();
					});
				});
}

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
	});
});