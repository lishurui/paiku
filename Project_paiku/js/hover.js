
/*鼠标滑过显示下拉菜单*/

$(function(){
	$(".top_nav_li").mouseover(function(){
		$(".top_nav_center_ul_select").show();
	})
	$("#top_nav_rt_1").mousemove(function(){
		$("#top_nav_rt_ax").show();
	})
	$("#top_nav_rt_2").mousemove(function(){
		$("#top_nav_rt_bx").show();
	})
	$("#top_nav_rt_3").mousemove(function(){
		$("#top_nav_rt_cx").show();
	})
	$(".top_nav_li").mouseout(function(){
		$(".top_nav_center_ul_select").hide();
	})
	
	$("#top_nav_rt_1").mouseout(function(){
		$("#top_nav_rt_ax").hide();
	})
	$("#top_nav_rt_2").mouseout(function(){
		$("#top_nav_rt_bx").hide();
	})
	$("#top_nav_rt_3").mouseout(function(){
		$("#top_nav_rt_cx").hide();
	})
	//搜索框下拉
	$(".logo_center_ct").click(function(){
		$(".center_ct_a").show();
	});
	$(".logo_center_ct").hover(function(){
		
	},function(){
		$(".center_ct_a").hide();
	});
	
	//nav鼠标滑过背景
	$(".pk_nav_rt li a").not(".pk_nav_rt li:first-child a").hover(function(){
		//console.log($(this));
		//animate 只支持position中left，top；width,height;
		//别的属性要写在回调函数里改变；
		$(this).stop().animate({},function(){		
			$(this).css({backgroundColor:"#72D2F1"});
		});
//	方法一	$(this).toggleClass('blue');
//		alert("p");ani
	},function(){
//	方法一	$(this).toggleClass('blue');
		$(this).css({backgroundColor:"#44bae0"});
	})
	
	
	
});




















