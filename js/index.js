/*轮播图*/
var num = 0;
var timer;

go();

function go() {
	clearInterval(timer);
	timer = setInterval(function() {
		//console.log(num);
		num++;
		if(num == 8) {

			$('ol li').eq(0).addClass('current');
			$('ol li').eq(0).siblings().removeClass('current');
		}
		if(num > 8) {
			num = 0;
			$('.viewpager').css('left', -num * 952 + 'px');
			num = 1;
		}
		$('.viewpager').stop().animate({
			'left': -num * 952 + 'px'
		}, 1000);
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
	}, 2000)
}

$('.viewpager-box').hover(function() {
	clearInterval(timer);
}, function() {
	go();
})

$('ol li').click(function() {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	num = $(this).index();
	$('.viewpager').stop().animate({
		'left': -num * 952 + 'px'
	});
})
var timm;
$('.vleft').click(function() {
	clearTimeout(timm);
	timm = setTimeout(function() {
		num--;
		if(num < 0) {
			num = 8;
			$('.viewpager').css({
				'left': -num * 952 + 'px'
			});
			num = 7;
		}
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
		$('.viewpager').stop().animate({
			'left': -num * 952 + 'px'
		});
	}, 200)

})
$('.vright').click(function() {
	clearTimeout(timm);
	timm = setTimeout(function() {
		num++;
		if(num == 8) {
			$('ol li').eq(0).addClass('current');
			$('ol li').eq(0).siblings().removeClass('current');
		}
		if(num > 8) {
			num = 0;
			$('.viewpager').css({
				'left': -num * 952 + 'px'
			});
			num = 1;
		}
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
		$('.viewpager').stop().animate({
			'left': -num * 952 + 'px'
		});
	}, 200)

})
//购物车
var shopNum;
var timee;
$('.mini-cart').mouseenter(function(){
	 shopNum = parseInt($('.shop-num').html());
	if (shopNum == 0) {
		$('.mini-cart-empty').show();
	} else{
		$('.mini-cart-pop').show();
	}	
})
$('.mini-cart').mouseleave(function(){
	$('.mini-cart-empty').hide();
	$('.mini-cart-pop').hide();
	
})
$('.mini-cart-empty').mouseenter(function() {
	$('.mini-cart-empty').show();
})
$('.mini-cart-empty').mouseleave(function() {
	$('.mini-cart-empty').hide();
})

$('.mini-cart-pop').mouseenter(function() {
	$('.mini-cart-pop').show();
})
$('.mini-cart-pop').mouseleave(function() {
	$('.mini-cart-pop').hide();
})


//购物车删除产品
$('.del').click(function(){
	$(this).parent().remove();
	shopNum--;
	if(shopNum==0){
		$('.mini-cart-pop').hide();
		$('.mini-cart-empty').show();
	}
	$('.shop-num').html(shopNum);

})
//左侧导航
var oindex;
var flag;
$('.goods-category>ul').mouseenter(function(){
	flag = 1;
	
})
$('.goods-category>ul').mouseleave(function(){
	//console.log('aa');
//	setTimeout(function(){
//		$('.show').css({'width':'0px'});
//	},200)
	$('.goods-category>.show').css({'width':'0px'},100);
	
})
$('.goods-category>ul>li').mouseenter(function(){
	oindex = $(this).index();
	
	//$('.show').eq(oindex).css('z-index',99);
	

	if (flag == 1) {
		
		if(oindex == 7){
			$('.goods-category>.show').eq(7).animate({'width':'207px'},100);
		}
		else if(oindex == 8){
			$('.goods-category>.show').eq(8).animate({'width':'0px'},100);
		}
		else if(oindex == 10){
			$('.goods-category>.show').eq(10).animate({'width':'414px'},100);
		}else{
			$('.goods-category>.show').eq(oindex).animate({'width':'447px'},100);
		}
		
		flag = 0;
		
	}else{
		if(oindex == 7){
			$('.goods-category>.show').eq(7).css({'width':'207px'},100);
		}
		else if(oindex == 8){
			$('.goods-category>.show').eq(8).css({'width':'0px'},100);
		}
		else if(oindex == 10){
			$('.goods-category>.show').eq(10).css({'width':'414px'},100);
		}else{
			$('.goods-category>.show').eq(oindex).css({'width':'447px'},100);
		}

	
	}
})
$('.goods-category>ul>li').mouseleave(function(){

	$('.goods-category>.show').eq(oindex).css({'width':'0px'});
	//console.log(oindex);
})

$('.goods-category>.show').hover(function() {
	//console.log('aa');
	var oshow = $(this).index();
	console.log(oindex);
	if(oindex == 7){
		$(this).css({'width':'207px'});
		$('.goods-category>ul>li').eq(oindex).css('background','rgb(245,245,245)');
		$('.goods-category>ul>li').eq(oindex).children('a').css('color','rgb(0,0,0)');
		
	}
	else if(oindex == 8){
		$(this).css({'width':'0px'});
		$('.goods-category>ul>li').eq(oindex).css('background','rgb(245,245,245)');
		$('.goods-category>ul>li').eq(oindex).children('a').css('color','rgb(0,0,0)');
	}
	else if(oindex == 10){
		$(this).css({'width':'414px'});
		$('.goods-category>ul>li').eq(oindex).css('background','rgb(245,245,245)');
		$('.goods-category>ul>li').eq(oindex).children('a').css('color','rgb(0,0,0)');
	}else{
		$(this).css({'width':'447px'});
		$('.goods-category>ul>li').eq(oindex).css('background','rgb(245,245,245)');
		$('.goods-category>ul>li').eq(oindex).children('a').css('color','rgb(0,0,0)');
	}
}, function() {
	$('.goods-category>.show').css({'width':'0px'},100);
	$('.goods-category>ul>li').eq(oindex).css('background','');
	$('.goods-category>ul>li').eq(oindex).children('a').css('color','rgb(255,255,255)');
})
//优品专辑tab栏

$('.good-product-ul>li').mouseenter(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$(this).children('a').css('color','#2979FF');
	$(this).siblings().children('a').css('color','#666');
	$(this).children().children('i').css('background-position-y','-402px');
	$(this).siblings().children().children('i').css('background-position-y','-356px');
	$('.good-product1').eq($(this).index()).addClass('goodsShow').siblings().removeClass('goodsShow');
})
//大家都在说轮播图
var timeSay;
var numSay=0;

function goSay(){
	timeSay = setInterval(function(){
		numSay++;
		if (numSay == 6) {
			numSay = 0;
			$('.topic-wrap>ul').css('left', -numSay* 300 + 'px');
			numSay = 1;
		}
		$('.topic-wrap>ul').stop().animate({
			'left': (-numSay) * 300 + 'px'
		}, 300);
	},3000)
}
goSay();
$('.topic-wrap').hover(function() {
	clearInterval(timeSay);
}, function() {
	goSay();
})
var timm01;
$('.left').click(function() {
	clearTimeout(timm01);
	timm01 = setTimeout(function() {
		numSay--;
		if(numSay < 0) {
			numSay = 5;
			$('.topic-wrap>ul').css({
				'left': -numSay * 300 + 'px'
			});
			numSay = 4;
		}
		$('.topic-wrap>ul').stop().animate({
			'left': -numSay * 300 + 'px'
		});
	}, 200)

})
$('.right').click(function() {
	clearTimeout(timm01);
	timm = setTimeout(function() {
		numSay++;
		
		if(numSay == 6) {
			numSay = 0;
			$('.topic-wrap>ul').css({
				'left': -numSay * 300 + 'px'
			});
			numSay = 1;
		}
		$('.topic-wrap>ul').stop().animate({
			'left': -numSay * 300 + 'px'
		});
	}, 200)

})