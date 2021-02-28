$(document).ready(function () {
	var owl = $('.custom-client');
	owl.owlCarousel({
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		smartSpeed: 1000
	});
});