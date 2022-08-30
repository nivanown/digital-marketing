$(document).ready(function(){
	
	var headerHeight = 0;

	$(window).resize(function() {

	  setTimeout(function() {
		headerHeight = $('.header').innerHeight();
	  }, 3000) 
	  
	  $('.main-menu').css({'margin-top': $('.header').css('height'), 'height' : 'calc(100% - ' + headerHeight + 'px)'});

	})

	.resize();
	
	$(window).scroll(function () {
	 var distanceY = $(this).scrollTop(),
		 shrinkOn  = 0,
		 header    = $(".header");

	if (distanceY > shrinkOn) {
	  header.addClass("pos-sm");
	} else {
	  if (header.hasClass("pos-sm")) {
		header.removeClass("pos-sm");
	  }
	}
	}); 
	
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}
		
		lastScrollTop = st;
	}
		
});











