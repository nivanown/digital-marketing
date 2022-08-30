$(document).ready(function(){
	
	/*- main-navi-btn -*/
	var siteToggle = $('.main-navi-btn'),
		layer=$('.site__layer'),
		siteMenu= $('.header__right-col');


	siteToggle.on('click', function(){
		layer.toggleClass('active');
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hidden');
	});
	
	$('.site__layer').on('click', function(){
		layer.removeClass('active');
		siteToggle.removeClass('collapsed');
		siteMenu.removeClass('show');
		$('body').removeClass('overflow-hidden');
	});
	
	/*- project-slider -*/
	$('.project-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1050,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 950,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '58px',
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '58px',
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '58px',
			  }
			},
			{
			  breakpoint: 0,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '58px',
			  }
			}
		]
	});

	/*- compare-slider -*/
	$('.compare-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1050,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 481,
			  settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 0,
			  settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		]
	});

	/*- share-link -*/
    $('.share-link__text').click(function(e) {
        
        if($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open');
        }
    });

	/*- scroll-wrap -*/
	$(".scroll-wrap").mCustomScrollbar();
	
	/*- auto height -*/
	function equalHeight(elem) {

	    var highestBox = 0;
	    var heightAuto = 'auto'
	    $(elem).height(heightAuto);
	    $(elem).each(function(){

	      if($(this).height() > highestBox) {
	        highestBox = $(this).height(); 
	      }
	      
	    });  
	    $(elem).height(highestBox);
	}

	equalHeight('.compare__col_1');
	equalHeight('.compare__col_2');
	equalHeight('.compare__col_3');
	equalHeight('.compare__col_4');
	equalHeight('.compare__col_5');
		
});











