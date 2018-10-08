$(function() {
    if ($('.canhcam-breadcrumb-1 .owl-carousel').length) {
		$('.canhcam-breadcrumb-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: false,
            center: true,
            padding: 0,
            margin: 0,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
			dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
			callbacks: true,
			responsive: {
				768: {
				}
			}
        });
    }

});



var offsetHeader;
var height;


function stickyMenu(offsetHeader){
	
	var positionScroll = $(window).scrollTop();
	if(positionScroll >= offsetHeader-height){
		$('.canhcam-header-2').addClass('fixed').css({
			'top': height
		})
	} else {
		$('.canhcam-header-2').removeClass('fixed')
	}
}

$(document).ready(function(){
	height = $('.canhcam-header-1').outerHeight();
	$('.canhcam-breadcrumb-1').css('padding-top',height)
	offsetHeader = $('.canhcam-header-2').offset().top;
})

$(window).on('scroll', function(){
	stickyMenu(offsetHeader);
})