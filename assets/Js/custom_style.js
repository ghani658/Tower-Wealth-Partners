
/***** Custom_style Js *****/


/***** Who we Are Tabs *****/
$(function() {
			// Reference the tab links.
			const tabLinks = $('#tab-links li a');
	
			// Handle link clicks.
			tabLinks.click(function(event) {
				var $this = $(this);
		
				// Prevent default click behaviour.
				event.preventDefault();
		
				// Remove the active class from the active link and section.
				$('#tab-links a.active, section.active').removeClass('active');
		
				// Add the active class to the current link and corresponding section.
				$this.addClass('active');
				$($this.attr('href')).addClass('active');
			});
		});
/***** Who we Are Tabs *****/


// Mobile Tabs

$(document).ready(function() {
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});

// Mobile Our Team

$(document).ready(function() {
	$(".mobile-our-team > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".mobile-our-team > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});

$(document).ready(function() {
	$(".toggle-tabs-section > .toggle-tabs-inr.is-active").children(".open-discription").slideDown();
	
	$(".toggle-tabs-section > .toggle-tabs-inr").click(function() {
		// Cancel the siblings
		$(this).siblings(".toggle-tabs-inr").removeClass("is-active").children(".open-discription").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".open-discription").slideToggle("ease-out").active;});
});

$(document).ready(function() {
	$(".toggle-tabs-inr") .click(function(){
		if ($(".toggle-tabs-inr").hasClass("is-active")) {
			$(".toggle-tabs-inr.is-active a i").addClass("fa fa-minus");
		} else {
			$(".toggle-tabs-inr a i").removeClass("fa-minus");
		}
	});
});

$(document).ready(function() {
	$('.modal-toggle').on('click', function(e) {
  		e.preventDefault();
  		$('.modal-1').toggleClass('is-visible');
	});
});
$(document).ready(function() {
	$('.modal-toggle-2').on('click', function(e) {
  		e.preventDefault();
  		$('.modal-2').toggleClass('is-visible');
	});
});
$(document).ready(function() {
	$('.modal-toggle-3').on('click', function(e) {
  		e.preventDefault();
  		$('.modal-3').toggleClass('is-visible');
	});
});

  /***** Mobile Menu *****/

$(document).ready(function(){
	$(".menu-click").click(function(){
		$(".open-mobile-menu").slideToggle("slow");
	});
	$("#sub-menu1").click(function(){
		$("#open-sub-menu1").slideToggle("slow");
	});
	$("#sub-menu2").click(function(){
		$("#open-sub-menu2").slideToggle("slow");
	});
	$("#sub-menu-2").click(function(){
		$("#open-sub-menu2").slideToggle("slow");
	});
	$("#sub-menu3").click(function(){
		$("#open-sub-menu3").slideToggle("slow");
	});
	$("#sub-menu-3").click(function(){
		$("#open-sub-menu3").slideToggle("slow");
	});
	$("#sub-menu-4").click(function(){
		$("#open-sub-menu4").slideToggle("slow");
	});
	$(".menu-click").click(function(){
		$("a.menu-click").toggleClass("active");
	});
});

/***** Banner Title animate *****/

/***** Team Member list *****/

$(document).ready(function(){
	$("#member1").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-1").offset().top
    	}, 600);
	});
	$("#member2").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-2").offset().top
    	}, 600);
	});
	$("#member3").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-3").offset().top
    	}, 600);
	});
	$("#member4").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-4").offset().top
    	}, 600);
	});
	$("#member5").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-5").offset().top
    	}, 600);
	});
	$("#member6").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-6").offset().top
    	}, 600);
	});
	$("#member7").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-7").offset().top
    	}, 600);
	});
	$("#member8").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-8").offset().top
    	}, 600);
	});
	$("#member9").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#member-9").offset().top
    	}, 600);
	});
	$("#Slide-to-section").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#Slide-on-section").offset().top
    	}, 1000);
	});
	$("#Slide-to-section-t").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#Slide-on-section").offset().top
    	}, 1000);
	});
	$("#Slide-to-section-th").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#Slide-on-section").offset().top
    	}, 1000);
	});
});