//向您推荐，最近浏览tab栏
var cartTimer;//用于清除定时器
var cartNum = 0;
$('.m-h3').mouseenter(function(){
	$(this).addClass('current').siblings().removeClass('current');
	console.log($(this).index());
	$('.message-recom-bd01').eq($(this).index()-1).addClass('current').siblings().removeClass('current');
})
function cartGo(){
	cartTimer = setInterval(function(){
		cartNum ++;
		if (cartNum > 1) {
			cartNum = 0;
		}
//		console.log(cartNum);
		$('.m-h3').eq(cartNum).addClass('current').siblings().removeClass('current');
		$('.message-recom-bd01').eq(cartNum).addClass('current').siblings().removeClass('current');
		
	},1000)
}
cartGo();
$('.message-recom-bd01').hover(function(){
	clearInterval(cartTimer);
},function(){
	cartGo();
})