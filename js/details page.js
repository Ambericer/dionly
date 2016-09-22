$(function(){
	
	
	$(".ty").mouseenter(function(){
		$(this).css("border-color","#b70000").siblings().css("border-color","#d2d2d2");/*borderchangecolor*/
	});
	
	/*onclickchangepic*/
	$(".ty").click(function(){
		$(this).css("border-color","#b70000").siblings().css("border-color","#d2d2d2");
		var _src=$(this)[0].src;
		var reg=/images\S+\.(jpg|gif|png|bmp)/gi;
		_src=_src.match(reg);
		console.log(_src);
		$(this).parent().siblings(".tiya1").attr({"src":"../"+_src});
		//console.log("../"+_src);
		$(this).parent().siblings(".bigty").children(".tiya2").attr({"src":"../"+_src});
	});
	
	
	
	/*magnifier*/
	$(".tiya1").mouseenter(function(){
	
		var offset = $(".tiya1").offset();
		var maxtop = $(".tiya1").height();
		var maxleft = $(".tiya1").width();
		$(".smallty").css("display","block");
		$(".bigty").css("display","block");
		$(".tiya1").mousemove(function(e){
	
			//计算放大镜的x坐标
			var left = e.clientX- offset.left - parseInt($(".smallty").width() / 2);
			//计算放大镜的y坐标
			var top = e.clientY + $(window).scrollTop() - offset.top - parseInt($(".smallty").height() / 2);
			if(left < 34){
				left = 34;
			}
			if(top < 14){
				top = 14;
			}
			if(top + $(".smallty").height() > maxtop){
				top = maxtop - $(".smallty").height()+14;
			}
			if(left + $(".smallty").width() > maxleft){
				left = maxleft - $(".smallty").width()+34;
			}
			//改变放大镜的一个坐标
			$(".smallty").css({
				left : left + "px",
				top : top + "px"
			});
			
			$(".tiya2").css({
				left : (left * 1.2 * -1) + "px",
				top : (top * 1.2 * -1) + "px"   
			});
			
		});
			
	});
		$(".tiya").mouseleave(function(){
			$(".smallty").css("display","none");
			$(".bigty").css("display","none");
		});
	
	
	
	/*showmenu*/
	$(".sort").mouseenter(function(){
		$(this).children(".change").css("background","url(../images/changetriangle.jpg)");
		$(".menu").css("display","block");
		$(".menu").mouseleave(function(){
			$(".menu").css("display","none");
			$(this).parent().children(".change").css("background","url(../images/whitetriangle.jpg)");
		});
		$(".sort").mouseleave(function(){
			$(".menu").css("display","none");
		});
	});
		
	/*menu*/
	$.get("../data/menu.json",{},function(data){	
		var obj = JSON.parse(data);
		//var string = JSON.stringify(obj);
		var _menu="";
		for(var key in obj){
			_menu+="<h3 class=\"left\"><i><a href=\"\">"+obj[key]["name"]+"</a></i><span>";
			
			for(var k in obj[key]){
				if(typeof obj[key][k] != "string"){
					_menu+="<a href=\"\">"+obj[key][k]["name"]+"</a>";
				}
			}
			_menu+="</span></h3>";
			
		}
		
		$(".menu").html(_menu);
		$(".menu>h3:odd").css("background","#312d2d");
		//console.log($(".menu>h3:odd").css("background","red"));
		$(".menu>h3").last().attr({id:"dz"});
	},"text");
			
	/*ewm*/
	function ewm(){
		var _body=document.getElementsByTagName("body")[0];
		var _ewm=document.createElement("div");
		_ewm.id="ewm";
		_body.appendChild(_ewm);
		document.getElementById("vm").onmouseover=function(){
			_ewm.style.display="block";
		}
		document.getElementById("vm").onmouseout=function(){
			_ewm.style.display="none";
		}
	}
	ewm();
	
	/*areas*/
	$(".areasr>p").mouseenter(function(){	
		$(this).next().addClass("selected").siblings().removeClass("selected");
		return false;
	});
	
	
	

	/*fixedtopage*/     //有BUG
	$(window).scroll(function(){
		var targetTop = $(this).scrollTop();
		//console.log($(this).scrollTop());
		if (targetTop >= 866){
			$(".fixedtopage").addClass("fixednav");
		}else{
			$(".fixedtopage").removeClass("fixednav");
		}
	
	});
	
	
	$(window).scroll(function(){
		var targetTop = $(this).scrollTop();
		var scrollPos;
	    if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
	        scrollPos = document.documentElement;
	    }
	    else if (typeof document.body != 'undefined') {
	        scrollPos = document.body;
	    }
	   
		$(".floor1in").click(function(){
			//console.log($(this).scrollTop());
				if(targetTop>883){
					$(scrollPos).animate({ scrollTop : 883 },100);
				}

		});
		$(".floor2in").click(function(){
				if(targetTop>883){
					$(scrollPos).animate({ scrollTop : 3923 },100);
				}

		});
		$(".floor3in").click(function(){
				console.log($(this).scrollTop());
				if(targetTop>883){
					$(scrollPos).animate({ scrollTop : 5702 },100);
				}

		});
	});

});