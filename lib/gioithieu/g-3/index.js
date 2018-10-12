$('.intro-3 .slide-1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.intro-3 .slide',
	draggable: false
});
$('.intro-3 .slide-2').slick({
	loop: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.intro-3 .slide',
	dots: false,
	focusOnSelect: true,
	variableWidth: true
});
$('.intro-3 .slide-3').slick({
	loop: false,
	slidesToShow: 1,
	asNavFor: '.intro-3 .slide',
	arrows: false,
	draggable: false,
	responsive: [

		{
			breakpoint: 992,
			settings: {
				arrows: true
			}
		},

	]
});
