$(function () {
	$(function() {
		$('a.go-down').on('click', function(e) {
		  e.preventDefault();
		  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
	  });
	$('.canhcam-banner-1 .list-items').each(function () {
		$('.canhcam-banner-1 .list-items').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			infinite: false,
			dots: false,
			speed: 300,
			autoplay: false,
			autoplaySpeed: 2000,
			// centerMode: true,
			// variableWidth: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {

					}
				},
				{
					breakpoint: 480,
					settings: {

					}
				}
			]
		})
	});
});
