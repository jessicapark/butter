var borderMargin = 60;

$(document).ready(function () {

	$window = $(window);
	$body = $('body');
	$wrapper = $('#wrapper');
	$wrapInner = $('#wrapperInner');


	// get window dimensions
	adjustWindow();
	$window.resize(function () {
		adjustWindow();
	});


});

// set image and window dimensions
function adjustWindow(){

	// get window size
	winW = $(window).width();
	winH = $(window).height();
	wrapperInnerH = winH-2*borderMargin;
	wrapperInnerW = winW-2*borderMargin;
	$('.full').height(wrapperInnerH);
	$('.full').width(wrapperInnerW);
	if (wrapperInnerW/wrapperInnerH<2.054) {
		$('.sec1-bg').height("100%");
		$('.sec1-bg').width("auto");
		var bgW = $('.sec1-bg').width();
		$('.sec1-bg').css({left: '50%'});
		$('.sec1-bg').css({marginLeft: - bgW/2 +'px'});
	}else{
		$('.sec1-bg').height("auto");
		$('.sec1-bg').width("100%");
		$('.sec1-bg').css({left: '0'});
		$('.sec1-bg').css({marginLeft: '0'});

	};
}