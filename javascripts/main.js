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

	$('.join-wrap .active').css({"opacity":"1","marginTop":"0px"});
	$( "#sec-join ul a" ).click(function() {
		if(!$(this).hasClass('active')){
			$('.join-wrap .active').animate({"marginTop":"20px","opacity":"0"},500);
	        $('.join-wrap div').removeClass('active');
	        $('#sec-join ul a').removeClass('active');
	        $(this).addClass('active');
	        if ($(this).hasClass('job1')) {
	        	$('.join-wrap .job1').addClass('active');
	        	$('.join-wrap .job1').delay(300).animate({"marginTop":"0px","opacity":"1"},500);
	        }else if ($(this).hasClass('job2')) {
	        	$('.join-wrap .job2').addClass('active');
	        	$('.join-wrap .job2').delay(300).animate({"marginTop":"0px","opacity":"1"},500);
	        }else if ($(this).hasClass('job3')) {
	        	$('.join-wrap .job3').addClass('active');
	        	$('.join-wrap .job3').delay(300).animate({"marginTop":"0px","opacity":"1"},500);
	        }else if ($(this).hasClass('job4')) {
	        	$('.join-wrap .job4').addClass('active');
	        	$('.join-wrap .job4').delay(300).animate({"marginTop":"0px","opacity":"1"},500);
	        };
    	}
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
	}else{
		$('.sec1-bg').height("auto");
		$('.sec1-bg').width("100%");
	};
	var bgW = $('.sec1-bg').width();
	$('.sec1-bg').css({left: '50%'});
	$('.sec1-bg').css({marginLeft: - bgW/2 +'px'});
}