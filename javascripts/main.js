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

	// $( "#sec-join ul a" ).click(function() {
	// 	if(!$(this).hasClass('active')){
	// 		$('.join-wrap .active').animate({"marginLeft":"-20x","opacity":"0"),1000}
	//         $('.join-wrap .active').hide();
	//         $('.join-wrap div').removeClass('active');
	//         $('#sec-join ul a').removeClass('active');
	//         $(this).addClass('active');
 //    	}
	// });

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
	}else{
		$('.sec1-bg').height("auto");
		$('.sec1-bg').width("100%");
	};
	var bgW = $('.sec1-bg').width();
	$('.sec1-bg').css({left: '50%'});
	$('.sec1-bg').css({marginLeft: - bgW/2 +'px'});
}