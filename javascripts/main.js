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

	var t;

	$(window).scroll(function() {
		var wrapperInnerH = $(window).height() - 2*borderMargin;
		var s = $(window).scrollTop();
		// alert(wrapperInnerH);
	    if (s >= wrapperInnerH) {
	    	$('#func1 .iphone').css({top: s - wrapperInnerH +'px'});
			$('#func2 .iphone').css({top: s - 2*wrapperInnerH +'px'});
			$('#func3 .iphone').css({top: s - 3*wrapperInnerH +'px'});
			$('#func3 .funcContent').css({top: s - 3*wrapperInnerH +'px'});
			$('#func4 .iphone').css({top: s - 4*wrapperInnerH +'px'});	
			$('#func4 .funcContent').css({top: s - 4*wrapperInnerH +'px'});        
		    if (s >= 4*wrapperInnerH) {
				$('#func4 .iphone').css({top: '0px'});
				$('#func4 .funcContent').css({top: '0px'});        

		    }
	    }else{
	    	$('#func1 .iphone').css({top: '0px'});
			$('#func2 .iphone').css({top: '0px'});
			$('#func3 .iphone').css({top: '0px'});
			$('#func4 .iphone').css({top: '0px'});
	    };
	 //    clearTimeout(t);
		// t = setTimeout(function(){
		// 	if ((s-wrapperInnerH) <= 20 && (s-wrapperInnerH) >= -20) {
	 //    		$("html,body").animate({scrollTop:wrapperInnerH},1000);
	 //    	}else if ((s-5*wrapperInnerH) <= 20 && (s-5*wrapperInnerH) >= -20) {
	 //    		$("html,body").animate({scrollTop:5*wrapperInnerH},1000);
	 //    	}else if ((s-6*wrapperInnerH) <= 0 && (s-6*wrapperInnerH) >= -50) {
	 //    		$("html,body").animate({scrollTop:6*wrapperInnerH},1000);
	 //    	};
		// },200);

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
	var bgH = $('.sec1-bg').height();
	$('.sec1-bg').css({left: '50%'});
	$('.sec1-bg').css({marginLeft: - bgW/2 +'px'});
	$('.sec1-bg').css({top: '50%'});
	$('.sec1-bg').css({marginTop: - bgH/2 +'px'});
}

function scrollTop(){
      var tt=$('#sec1').offset().top;
      $("html,body").animate({scrollTop:tt-borderMargin},1000);
}
function scrollWhatis(){
     var tt=$('#func1').offset().top;
      $("html,body").animate({scrollTop:tt-borderMargin},1000);
}

function scrollApply(){
      var tt=$('#sec-apply').offset().top;
      $("html,body").animate({scrollTop:tt-borderMargin},1000);
}
function scrollJoin(){
      var tt=$('#sec-join').offset().top;
      $("html,body").animate({scrollTop:tt-borderMargin},1000);
}