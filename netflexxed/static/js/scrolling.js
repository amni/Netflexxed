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