//list页面的轮播图
var listTimer;
var listNum = 0;
function listGo(){
	clearInterval(listTimer);
	listTimer = setInterval(function(){
		listNum++;
		if (listNum > 3) {
			listNum = 0;
		}
		$('.list-banner>li').eq(listNum).addClass('current').siblings().removeClass('current');
		$('.list-banner-num>li').eq(listNum).addClass('current').siblings().removeClass('current');		
	},2000)
}
listGo();
$('.list-main01-right').hover(function(){
	clearInterval(listTimer);
},function(){
	listGo();
});
$('.list-banner-num>li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('.list-banner>li').eq($(this).index()).addClass('current').siblings().removeClass('current');
	listNum = $(this).index();
})
//tab栏
$('.list-main02 .list-tab-nav ul li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('.list-main02 .tab-list>ul').eq($(this).index()).addClass('current').siblings().removeClass('current');
})
$('.list-main03 .list-tab-nav ul li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('.list-main03 .tab-list>ul').eq($(this).index()).addClass('current').siblings().removeClass('current');
})
$('.list-main04 .list-tab-nav ul li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('.list-main04 .tab-list>ul').eq($(this).index()).addClass('current').siblings().removeClass('current');
})