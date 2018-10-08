//267css改成animate不成
//导航条的伪对象动画没完整实行
//右边导航动画布局欠完善
//knowledge html宽
var num=0;
var timer;
function gogo(){
	clearInterval(timer);
	timer=setInterval(function(){
		num++;
		if(num>1)num=0;
		$('.pic').css('left',-num*530+'px');
		$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
	},2000);
}
$('.gps li').click(function(e){
	$(this).addClass('current').siblings().removeClass('current');
	var n=$(this).index();
	$('pic').css('left',-n*530+'px');
})
gogo();
$('.slide').hover(function(){
	clearInterval(timer);
},function(){
	gogo();
});

$('.left').click(function(e){
	num++;
	if(num>1)num=0;
	$('.pic').css('left',-num*530+'px');
	$('.gps>li').eq(num).addClass('current').siblings().removeClass('current');
});
$('.right').click(function(){
	num--;
	if(num<0)num=1;
	$('.pic').css('left',-num*530+'px');
	$('.gps>li').eq(num).addClass('current').siblings().removeClass('current');
})
    $('ol li').click(function(event) {
    num=$(this).index();
    $('ul').css('left', -num*530+'px');
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
});

//all-gps
$('.return-top').click(function(){
	$('html,body').animate({'scrollTop':0},500);
})

//login
$('.normal').click(function(){
	$('.login-toggle1').css('display','none');
	$('.login-toggle').css('display','block');
	$('#a_normal').removeClass('a-phone');
	$('#a_normal').addClass('a-normal')
	$('#a_phone').removeClass('a-normal')
	$('#a_phone').addClass('a-phone');
})
$('.phone').click(function(){
	$('.login-toggle').css('display','none');
	$('.login-toggle1').css('display','block');
	$('#a_phone').removeClass('a-phone');
	$('#a_phone').addClass('a-normal');
	$('#a_normal').removeClass('a-normal');
	$('#a_normal').addClass('a-phone');
})

$('#txt').submit(function(e){
	var flag=true;
	if($('.user').val()==''){
		$('.usertip').html('请输入手机号码或者邮箱');
		$('.usertip').css('color','red');
		flag=false;
	}else if($('.user').val().length<11){
		$('.usertip').html('手机号码或者邮箱不能少于11位');
		$('.usertip').css('color','red');
		flag=false;
	}else{
		$('.usertip').html('请进入下一步');
		$('.usertip').css('color','lime');
		flag=true;
	}
	
	if($('.psw').val()==''){
		$('.pswtip').html('请输入密码');
		$('.pswtip').css('color','red');
		flag=false;
	}else if($('.psw').val().length<6){
		$('.pswtip').html('密码不能少于6位');
		$('.pswtip').css('color','red');
		flag=false;
	}else{
		$('.pswtip').html('请进入下一步');
		$('.pswtip').css('color','lime');
		flag=true;
	}
	
	if($('.user1').val()==''){
		$('.usertip').html('请输入手机号码');
		$('.usertip').css('color','red');
		flag=false;
	}else if($('.user1').val().length<11){
		$('.usertip').html('手机号码不能少于11位');
		$('.usertip').css('color','red');
		flag=false;
	}else{
		$('.usertip').html('请进入下一步');
		$('.usertip').css('color','lime');
		flag=true;
	}
	
	if($('.psw').val()==''){
		$('.pswtip').html('请输入手机验证码');
		$('.pswtip').css('color','red');
		flag=false;
	}else if($('.psw').val().length!=6){
		$('.pswtip').html('请输入正确的验证码');
		$('.pswtip').css('color','red');
		flag=false;
	}else{
		$('.pswtip').html('请进入下一步');
		$('.pswtip').css('color','lime');
		flag=true;
	}
	if(!flag){
		e.preventDefault();
	}
});

/******************************enterprise.html*********************************************/
$(window).scroll(function(){
    if ($(window).scrollTop()>=400){
        $(".topbox").slideDown();
    }
     else
    {
        $(".topbox").slideUp();
    }
});

/**********************my.js slide2********************/
/****************长图*****************/
var num2=0;
var timer2;
//自动轮播
function gogo2(){
	timer2=setInterval(function(event){
//		clearInterval(timer2);
		num2++;
		if(num2>6){
			num2=0;
			$('.slide2 ul').css('left',-num2*1920+'px');
			num2=1;
		}
		if(num2==6){
			$('ol li').eq(0).addClass('current');
			$('ol li').eq(0).siblings().removeClass('current');
		}
		$('.slide2 ul').stop().animate({'left':-num2*1920+'px'},800);
		$('ol li').eq(num2).addClass('current');
		$('ol li').eq(num2).siblings().removeClass('current');
		
	},3000);
}		
//鼠标移入移出
gogo2();
$('div.slide2 ol').mouseenter(function(){
	clearInterval(timer2);
});
$('div.slide2 ol').mouseleave(function(){
	gogo2();
});
			
$('.slide2 ol li').click(function(){
	var index=$(this).index();
	num2=$(this).index();
	$('ul').animate({'left':-index*1920+'px'},800);
	$(this).addClass('current').siblings().removeClass('current');
})

/**********************************new-slides***************************/		
var timer3;
var num3=0;
function gogo3(){
	timer3=setInterval(function(e){
		num3++;
		if(num3>6){
			num3=0;
			$('.slides ul').css('left',-num3*240+'px');
			num3=1;
		}
		$('.slides ul').stop().animate({'left':-num3*240+'px'},1500);
	},3000);
};
gogo3();

$('.slides').hover(function(){
	clearInterval(timer3);
},function(){
	gogo3();
})

$('.lefts').click(function(){
	num3-=5;
	if(num3<0){
		$('.slides ul').css('left',-num3*240+'px');
		num3+=10;
	}
	$('.slides ul').css('left',-num3*240+'px');
})

$('.rights').click(function(){
	num3+=5;
	if(num3>10){
		$('.slides ul').css('left',-num3*240+'px');
		num3-=10;
	}
	$('.slides ul').css('left',-num3*240+'px')
})

/***************scense图片缩放****************/
$('.scense p').hover(function(){
	$(this).siblings().addClass('imghover');
},function(){
	$(this).siblings().removeClass('imghover');
});

/************************parner-spic********************/
var n=0;
var t;
function g(){
	t=setInterval(function(e){
		n+=2;
		if(n>5300)
		{
			n=0;
			$('.sulbox ul').css('left',-n+'px');
			n=2;
		}
		$('.sulbox ul').stop().animate({'left':-n+'px'},50);
	},55);
}
g();
$('#sulbox').hover(function(){
	clearInterval(t);
},function(){
	g();
})

/*********************allgps***********************/
$('.allgps ul li').hover(function(){
	$(this).children('div').stop().addClass('gps1');
	$(this).children('.a-2').prop('id','a-2');
	$(this).children('.a-3').prop('id','a-3');
},function(){
	$(this).children('div').removeClass('gps1');
	$(this).children('.a-2').prop('id','');
	$(this).children('.a-3').prop('id','');
});

/****************shows******************/
$('#showul li').mouseenter(function(){
	var index=$(this).index();
	$('#shows').show();
	$('.shows_container p').eq(index).children().css('color','#1d9fd3');
	$('.shows_container p').eq(index).siblings().children().css('color','#000');
	if(index<6){
		$('.shows_container').css('top',-index*37+'px');
//		$('#shows-container').animate({'top':-index*37+'px'},100);
	}
});
$('#showul li').mouseleave(function(){
	$('.shows_container p').children().css('color','#000');
})
$('#showul').mouseleave(function(){
	$('#shows').hide();
})

/**************top特别专题***************/
$('.lib').hover(function(){
	$('.topbox').attr('id','topbox');
	$('.libox ul').show();
},function(){
	$('.topbox').attr('id','');
	$('.libox ul').hide();
})
