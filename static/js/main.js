
var NJued = NJued || {};
NJued = {
	//全屏展示
	fullWind: function(){

		var h=$(window).height();
		$("html").css({"overflow": "hidden","height": "100%"});
		$("body").css({"overflow": "hidden","height": "100%"});
	
		reSize();
		function reSize(){
			$("#sdBox").css({"height": h}).find(".section").css({"height": h});
		}

		$(window).on("resize",function() {
			reSize();
		});
	},
	//鼠标控制页面滚动
	pageMove: function(){

		var oP=$("#sdBox")
		var oL=$("#sdPage");
		var h=$(window).height();
		var oBtn=true;
		var pageIndex=1;
		var videoIndex=0;
		var slideIndex=0;

		$("body").on("mousewheel", function(event, delta ) {
			//if (event.preventDefault(), window.mousewheelStart === true) return false;
			window.mousewheelStart = true;
		});
			
		$("#sdPage").fullpage({
			sectionsColor: ["#FFF", "#FFF", "#FFF", "#FFF"],
			anchors: ["01", "02", "03", "04"],
			navigation: false,
			css3: false,
			easingcss3: 'ease',
			verticalCentered: false,
			continuousVertical: false,
			
			afterRender: function() {
					page01();
			},
			afterLoad: function(anchorLink, index ) {
				//using index
				pageIndex=index;

				if(index == 1){
					page01();
				}else if(index == 2){
					page02();
				}else if(index == 3){
					page03();
				}else if(index == 4){
					page04();
				}

			},
			onLeave: function() {
			},
			onSlideLeave: function() {},
			afterSlideLoad: function(anchorLink,index,slideIndex) {				
			}
		});

		
		function page01(){
			fastCur(0);			
			$(".footer").removeClass("fMove");
			$("#section1").find(".title").addClass("aMove");
			$("#section1").find(".info").addClass("aMove");
			$(".down").addClass("show");
			$(".weixincode").addClass("weixinshow");
		}
		function page02(){
			fastCur(1);
			$(".down").removeClass("show");
			$(".footer").removeClass("fMove");
			$("#section2").find(".title").addClass("aMove");
			$("#section2").find(".info").addClass("aMove");
		}
		function page03(){
			fastCur(2);
			$(".down").removeClass("show");
			$(".footer").removeClass("fMove");
			$("#section3").find(".title").addClass("aMove");
			$("#section3").find(".info").addClass("aMove");
		}
		function page04(){
			fastCur(3);
			$(".down").removeClass("show");			
			$("#section4").find(".title").addClass("aMove");
			$("#section4").find(".info").addClass("aMove");
			$("#section4").find(".btns").addClass("bMove");
			$(".footer").addClass("fMove");
		}
		


		//快捷导航
		var aF=$("#fastNav").find("a");
		aF.hover(function(){
			$(this).find("span").css({"width": "98px","left":"-98px"}).siblings().css({"width": "0px"});
		},function(){
			$(this).find("span").css({"width": "0px","left":"0px"})
		});

		aF.on("click",function(){
			aF.removeClass("cur");
			$(this).addClass("cur");
		});

		function fastCur(n){
			var o=$("#fastNav").find("a");
			o.removeClass("cur");
			o.eq(n).addClass("cur");
		}

	},
	//foot
	footFn:function(){
		var o=$("#miniBar").find("li");
		o.hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		},function(){
			$(this).removeClass("cur");
		});
	},
	init: function(){
		//this.fullWind();
		this.pageMove();
		this.footFn();
	}
}

$(function(){
	NJued.init();
});

