
(function ($) {
	"use strict";

	var windowOn = $(window)

	//  PreLoader Js
	windowOn.on('load',function () {
		$('#loading').fadeOut(500);
	});

	
	//  wow animation
	var wow = new WOW(
		{
		  mobile: true,
		}
	  );
	  wow.init();
	var windowOn = $(window);

	
	//  Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


$(window).on('load', function () {

	$('#preloader').delay(350).fadeOut('slow');

	$('body').delay(350).css({ 'overflow': 'visible' });

})
	

	



})(jQuery);