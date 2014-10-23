var borderMargin = parseInt($("#warpper").css("margin"));
var roll=true;
var mobile=false;
var key=0;

	
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

	if (mobile) {
		var mySwiper = new Swiper('.swiper-container',{
	      pagination: '.pagination',
	      loop:true,
	      grabCursor: true
	    })
	};
	
$( ".button" ).click(function() {
var email=$('#address').val();
if(chkEmail(email)){

 $.ajax({
    type: "GET",
    url: "php/submit.php",
    dataType: "json",
    mode: "block",
    data: "email="+email,
    timeout: 5000,
    beforeSend: function() {
 		$('.button').text('正在提交').attr({"disabled":"disabled"});
    },
    success: function(data) {
 		$('.button').text('提交成功');
    },
    error: function() {
    	alert('提交失败请重试。')
    	$('.button').text('申请内测').removeAttr("disabled");
    }
  });

}else{
	alert('请输入正确的邮箱地址。')
}

});
	// $body.bind('mousewheel', function(event,delta) {
	// if(roll){
	// 	scrollAll(key,-1*delta);
 //    });

	if (!mobile) {
	    var mouseControl = $('.sec1-scroll');
	    var mask = $('.sec1-title-mask');  
	};

		$('#sec1').bind('mouseenter',function(e){
			if (!mobile){
	    	Mouse(e);
			mouseControl.css({ width: mouseX - borderMargin});
			mask.css({ width: (mouseX - borderMargin) - ($('#sec1').width() - $('.sec1-title').width())/2 });
			}
	    }).bind('mousemove',function(e){
	    	if (!mobile){
	    	Mouse(e);
			mouseControl.css({ width: mouseX - borderMargin});
			mask.css({ width: (mouseX - borderMargin) - ($('#sec1').width() - $('.sec1-title').width())/2 });
			}
		}).bind('mouseleave',function(){ 
			if (!mobile){
				scrollLeft = ($('#sec1').width() - $('.sec1-title').width())/2 - borderMargin;
				// alert(scrollLeft);
				if ( (mouseX - borderMargin) < scrollLeft ) {
					mouseControl.animate({ width:"0%"},300);
				}else{
					mouseControl.animate({ width:"100%"},500);
					mask.animate({ width:"380px"},300);
				};
			}
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
	        }else if ($(this).hasClass('job5')) {
	        	$('.join-wrap .job5').addClass('active');
	        	$('.join-wrap .job5').delay(300).animate({"marginTop":"0px","opacity":"1"},500);
	        };
    	}
	});

});

$(window).scroll(function() {
	var borderMargin = parseInt($("#warpper").css("margin"));
	var wrapperInnerH = $(window).height() - 2*borderMargin;
	var s = $(window).scrollTop();
	if (!mobile) {
		// alert(wrapperInnerH);
	    if (s >= wrapperInnerH && s < 4*wrapperInnerH) {
	    	$('#func1 .iphone').css({top: s - wrapperInnerH +'px'});
			$('#func2 .iphone').css({top: s - 2*wrapperInnerH +'px'});
	    	$('#nav ul li a').removeClass('active');
	    	$('#nav ul li a.nav-about').addClass('active');
			$('#func3 .iphone').css({top: s - 3*wrapperInnerH +'px'});
			$('#func3 .funcContent').css({top: s - 3*wrapperInnerH +'px'});
			$('#func3 .bf-aft').css({top: s - 3*wrapperInnerH +'px'});
			$('#func4 .iphone').css({top: s - 4*wrapperInnerH +'px'});	
			$('#func4 .funcContent').css({top: s - 4*wrapperInnerH +'px'});        
		    $('#func4 .bf-aft').css({top: s - 4*wrapperInnerH +'px'});        
	    }else if(s >= 4*wrapperInnerH && s < 5*wrapperInnerH){
	    	$('#func3 .bf-aft').css({top: '0px'});
	    	$('#func3 .iphone').css({top: '0px'});
			$('#func3 .funcContent').css({top: '0px'});
			$('#func4 .bf-aft').css({top: '0px'});
			$('#func4 .iphone').css({top: '0px'});
			$('#func4 .funcContent').css({top: '0px'}); 
	    }else if (s >= 5*wrapperInnerH && s < 6*wrapperInnerH) {
	    		$('#nav ul li a').removeClass('active');
	    		$('#nav ul li a.nav-apply').addClass('active'); 
		}else if (s >= 6*wrapperInnerH && s < 7*wrapperInnerH) {
				$('#nav ul li a').removeClass('active');
	    		$('#nav ul li a.nav-join').addClass('active'); 
		}else if (s >= 7*wrapperInnerH) {
				$('#nav ul li a').removeClass('active');
	    		$('#nav ul li a.nav-contact').addClass('active'); 
		}else{
	    	$('#nav ul li a').removeClass('active');
	    	$('#nav ul li a.nav-index').addClass('active');  
	    	$('#func1 .iphone').css({top: '0px'});
			$('#func2 .iphone').css({top: '0px'});
			$('#func3 .iphone').css({top: '0px'});
			$('#func3 .funcContent').css({top: '0px'});
			$('#func4 .iphone').css({top: '0px'});
			$('#func4 .funcContent').css({top: '0px'});
	    };
	};


});

//获取鼠标坐标函数
var Mouse = function(e) {
	mouseX = e.pageX
}

// set image and window dimensions
function adjustWindow(){

	var borderMargin = parseInt($("#warpper").css("margin"));
	// get window size
	winW = $(window).width();
	winH = $(window).height();


	if(winW<1000){mobile=true;}else{mobile=false;}//判断手机条件


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
	// alert($('.sec1-bg').css("marginTop"));
	// alert($('.sec1-bg').css("marginLeft"));
	if ( (wrapperInnerW/2)/wrapperInnerH <1.156) {
		$('.bf-aft img').height("100%");
		$('.bf-aft img').width("auto");
	}else{
		$('.bf-aft img').height("auto");
		$('.bf-aft img').width("100%");
	};

	if (mobile==true) {
		$('#func1').height("800px");
		$('#func2').height("800px");
		$('#sec-join').height("1000px");
		$('.bf-aft img').height("auto");
		$('.bf-aft img').width("100%");
	};


}

function scrollAll(dom,updown){
	if(!roll){
		return;
	}
	if(updown==null){
		updown=0;
	}
	dom = parseInt(dom);
	if(dom+updown>7||dom+updown<0){
		return;
	}
	roll = false;
	key = dom+updown;
	switch(key){
		case 0:
		  obj=$('#sec1');
		  break;
		case 1:
		  obj=$('#func1');
		  break;
		case 2:
		  obj=$('#func2');
		  break;
		case 3:
		  obj=$('#func3');
		  break;
		case 4:
		  obj=$('#func4');
		  break;
		case 5:
		  obj=$('#sec-apply');
		  break;
		case 6:
		  obj=$('#sec-join');
		break;
		case 7:
		  obj=$('#sec-contact');
	}

	$("html,body").animate({scrollTop:obj.offset().top-borderMargin},1000,function(){
		roll=true;
	});

}

$(window).load(function (){ //在所有图片及js都加载后执行
        var styles = [
          {
            stylers: [
              { hue: "#fdf187" },
              { saturation: 50 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { saturation: 0 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];
    
      var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
      
        var myLatlng = new google.maps.LatLng(39.9233128,116.518472);
          var myOptions = {
              zoom: 17,
              center: myLatlng,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
});
function chkEmail(strEmail) { 
if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(strEmail)) { 
return false; 
} 
else { 
return true; 
} 
} 