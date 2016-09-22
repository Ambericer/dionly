$(function(){
	
	
	/*fixedarea*/
	$(".nopadleft").click(function(){
		$("this:root").children("body .fixedarea").css("display","block");
	});
	
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
	
	/*goodssort*/
	$(".shrink").click(function(){
		//$(this).attr({"src":""});
		$(this).parent().next().addClass("dmenushow").siblings().removeClass("dmenushow");
		/*if($(".dmenu[class*=\"dmenushow\"]")){
		 	$(this).siblings("h3").children("img").attr({"src":"../images/fang.png"});
	    }*/
	});
	
	
	/*goodsshow*/
	$.get("../data/goods.json",{},function(data){
		var obj = JSON.parse(data);
		console.log(obj);
		function format(_goods,data){
			return _goods.replace(/{{([\w]+)}}/g,function(name,key){
				
				return data[key] || "";
			});
		}
		var _goods="";
		for(var key in obj){
			var item=obj[key];
			_goods+="<div>"+"<img src=\"{{src}}\"/>"+"<a href=\"\">{{name}}</a>"+"<p>"+"<span class=\"org\">{{originalprice}}</span>"+"<span class=\"cur\">{{currentprice}}</span>"+"</p>"+"</div>";
			_goods=format(_goods,item);
			$(".goodsshow").html(_goods);
		}
		
	},"text");
	
	/*areas*/
	$(".areasr>p").mouseenter(function(){	
		$(this).next().addClass("selected").siblings().removeClass("selected");
		return false;
	});
	
	
	
	/*areas*/
	$(".areasr>p").mouseenter(function(){	
		$(this).next().addClass("selected").siblings().removeClass("selected");
		return false;
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
				
	
	
	/*backtop*/
	$.fn.scrollTo = function(speed) {
	var targetOffset = $(this).offset().top;
	$('html,body').stop().animate({scrollTop: targetOffset}, speed);
		return this;
	}; 
	// use
	$(".backtop").click(function(){
		$("body").scrollTo(500);
		return false;
	});	
	
	
	
	
	
	
	
});
