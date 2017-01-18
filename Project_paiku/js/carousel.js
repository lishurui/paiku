
$(function(){
		var i=0;
		var _timer=0;
		//自动播放
		function delay(){
			$("#rt_t1_l a").eq(i).css({
				"display":"none",
				"opacity":0.3
			});
			i++;
			if(i>=$("#rt_t1_l a").size()){
				i=0;
			}
			$("#rt_t1_l a").eq(i).css("display","block");

			player(true);
		}
		function player(_cmd){

			$("#rt_t1_l a").eq(i).animate({
				"opacity":1,
			},500,function(){
				if(_cmd){
					window.clearTimeout(_timer);
					_timer=window.setTimeout(delay,2000);
				}else{
					$("#rt_t1_l a").eq(i).stop();
					window.clearTimeout(_timer);
				}
			});
		}
		player(true);//自动播放
		
		function eventHandle(_current){
			$("#rt_t1_l a").eq(i).finish();
			$("#rt_t1_l a").css({
				"display":"none",
				"opacity":0.3
			});
			
			$(_current).css({
				"background-color":"#ccc"
			});
			i=$(_current).index();
			$("#rt_t1_l a").eq(i).css({
				"display":"block"
			});
			window.clearTimeout(_timer);
			player(false);
		}
		$("#banner1").mouseenter(function(){
			window.clearTimeout(_timer);
			$("#rt_t1_l a").eq(i).stop();
		});
		$("#banner1").mouseleave(function(){
			player(true);
		});
		
		$("#arrow span.left").click(function(){
			eventHandle($("#rt_t1_l a").eq(--i)[0]);
		});
		$("#arrow span.right").click(function(){
			eventHandle($("#rt_t1_l a").eq(++i)[0]);
		});
		
		$(".banner1").hover(function(){
			$(".arrow").animate({},function(){
				$(".arrow").css({"display":"block","opacity":"0.5"})
			})
		},function(){
			$(".arrow").animate({},function(){
				$(".arrow").css({"display":"none"})
			})
		})
		$(".arrow").hover(function(){
			$(".arrow").animate({},function(){
				$(".arrow").css({"display":"block","opacity":"1"})
			});
		},function(){
			$(".arrow").animate({},function(){
				$(".arrow").css({"display":"block","opacity":"0.5"})
			});
		})
	});
	


$(function(){
		var n=0;
		var _timer1=0;
		//自动播放
		function delay1(){
			$("#rt_t1_c a").eq(n).css({
				"display":"none",
				"opacity":0.3
			});
			n++;
			if(n>=$("#rt_t1_c a").size()){
				n=0;
			}
			$("#rt_t1_c a").eq(n).css("display","block");

			player1(true);
		}
		function player1(_cmd){

			$("#rt_t1_c a").eq(n).animate({
				"opacity":1,
			},500,function(){
				if(_cmd){
					window.clearTimeout(_timer1);
					_timer1=window.setTimeout(delay1,1000);
				}else{
					$("#rt_t1_c a").eq(n).stop();
					window.clearTimeout(_timer1);
				}
			});
		}
		player1(true);//自动播放
		
		function eventHandle1(_current){
			$("#rt_t1_c a").eq(n).finish();
			$("#rt_t1_c a").css({
				"display":"none",
				"opacity":0.3
			});
			
			n=$(_current).index();
			$("#rt_t1_c a").eq(n).css({
				"display":"block"
			});
			window.clearTimeout(_timer1);
			player1(false);
		}
		$("#banner2").mouseenter(function(){
			window.clearTimeout(_timer1);
			$("#rt_t1_c a").eq(n).stop();
		});
		$("#banner2").mouseleave(function(){
			player1(true);
		});
		
		$("#btn span.left").click(function(){
			eventHandle1($("#rt_t1_c a").eq(--n)[0]);
		});
		$("#btn span.right").click(function(){
			eventHandle1($("#rt_t1_c a").eq(++n)[0]);
		});
		
		$(".banner2").hover(function(){
			$(".btn").animate({},function(){
				$(".btn").css({"display":"block","opacity":"0.5"})
			})
		},function(){
			$(".btn").animate({},function(){
				$(".btn").css({"display":"none"})
			})
		})
		$(".btn").hover(function(){
			$(".btn").animate({},function(){
				$(".btn").css({"display":"block","opacity":"1"})
			});
		},function(){
			$(".btn").animate({},function(){
				$(".btn").css({"display":"block","opacity":"0.5"})
			});
		});
		
//登录注册下面的公告栏
//$("#t1_b_x li").mousemove(function(){
//$("#t1_b_x li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
//$("#t1_b_k").hide().eq($(this).index()).show();
//});	
//		
 jQuery.jqtab = function(tabtit,tabcon) {
        $(tabcon).hide();
        $(tabtit+" li:first").addClass("thistab").show();
        $(tabcon+":first").show();
    
        $(tabtit+" li").mousemove(function() {
            $(tabtit+" li").removeClass("thistab");
            $(this).addClass("thistab");
            $(tabcon).hide();
            var activeTab = $(this).find("a").attr("tab");
            $("#"+activeTab).fadeIn();
            return false;
        });
        
    };
    /*调用方法如下：*/
    $.jqtab("#t1_b_x","#t1_b_k");
		
		
});