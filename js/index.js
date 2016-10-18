 var mySwiper = new Swiper ('.swiper-container', {
	onInit: function(swiper){
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}, 
  	pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl:true,
    direction: 'vertical'
  })

  var flash = document.getElementById('web-swipe-tip');
  var i = 0;
  var next_move = setInterval(function(){
  	i++;
  	flash.style.bottom = i + "px";
  	if(i == 10){
  		i = 5;
  	}
  },120);
