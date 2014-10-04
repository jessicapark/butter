var borderMargin = parseInt($("#warpper").css("margin"));
var roll=true;
var mobile=false;
var key=0;


function animaloading(who,speed){
	if(loading==true){//这是递归的结束条件，当loading==false的时候就不再调用了
	    who.fadeOut(speed,function(){   //fadeIn(speed,callback);其中callback是在动画结束后要执行的一个函数。
	        who.fadeIn(speed,function(){
	            animaloading(who,speed);//这里用到了递归，当fadeOut动画结束后，执行再次调用自己本身。
	        });
	    });
	}else{
	    who.hide();//递归结束，隐藏
	}
}

window.onload = function() { //这个是js本身的一个函数，它在整个页面DOM加载完成并且所有外部图片及元素都加载结束后执行，它与$(document).ready(){}的区别就是后者在DOM加载完成后就执行了，不考虑外部元素
	loading=false; //当所有的外部图片等都加载结束后，把全局变量loading设为false，结束animaloading的动画递归。
}; 

$(document).ready(function () {

    animaloading($('#loading'),1000);
   
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