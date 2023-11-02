
$(function() {

	var siteSticky = function() {
		  $(".js-sticky-header").sticky({topSpacing:0});
	  };
	  siteSticky();
  
	  var siteDropdown = function() {
  
		  $('nav .dropdown').hover(function(){
			  var $this = $(this);
			  $this.addClass('show');
			  $this.find('> a').attr('aria-expanded', true);
			  $this.find('.dropdown-menu').addClass('show');
		  }, function(){
			  var $this = $(this);
				  $this.removeClass('show');
				  $this.find('> a').attr('aria-expanded', false);
				  $this.find('.dropdown-menu').removeClass('show');
		  });
  
  
		  $('#dropdown04').on('show.bs.dropdown', function () {
			console.log('show');
		  });
  
		$('.navbar .dropdown > a').click(function(){
		  location.href = this.href;
		});
	  }; 
	  siteDropdown();
  
  });