

$(document).ready(function(){
	$(".center").on("mouseover", function(){
		//alert("a");
				$(".center_rt1:nth-of-type("+($(this).index()+1)+")").css("display","block");
				//console.log($(".dropdowm_layer .a:nth-child("+($(this).index()+1)+")"));
			});
	$(".center").on("mouseout", function(){
		//alert("b");
				$(".center_rt1:nth-of-type("+($(this).index()+1)+")").css("display","none");
			});
			
	$(".center_rt1").on("mouseover", function(){
				$(this).css("display","block");
		});
	$(".center_rt1").on("mouseout", function(){
				$(this).css("display","none");
			});
			
			
//	$(".sort_box2").hover(function(){
//		$(".sort_box3").show();
//	},function(){
//		$(".sort_box3").hide();
//	})
	/*第二个侧边栏*/
	$(".content").on("mouseenter",function(){
//		alert("p");
		$(".content1").css("display","block");
	})
	$(".content").on("mouseleave",function(){
		$(".content1").css("display","none");
	})
	
	$(".content1").on("mouseenter",function(){
//		alert("p");
		$(".content1").css("display","block");
	})
	$(".content1").on("mouseleave",function(){
		$(".content1").css("display","none");
	})
	
	
	
	
	
})









