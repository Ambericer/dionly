$(document).ready(function(){
	
	/*fixedarea*/
	$(".nopadleft").click(function(){
		$("this:root").children("body .fixedarea").css("display","block");
	});
	
	
	/*fixed ewm*/
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
	
	/*showmenu*/
	$(".sort").mouseenter(function(){
		$(this).children(".change").css("background","url(images/changetriangle.jpg)");
		$(".menu").css("display","block");
		$(".menu").mouseleave(function(){
			$(".menu").css("display","none");
			$(this).parent().children(".change").css("background","url(images/whitetriangle.jpg)");
		});
		$(".sort").mouseleave(function(){
			$(".menu").css("display","none");
		});
	});
	
	/*menu*/
		$.get("data/menu.json",{},function(data){	
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
				
	
	
	/*areastore*/

		$.get("data/area.json",{},function(data){	
					var areas = JSON.parse(data);
					//var string = JSON.stringify(obj);
					var _area="";
					for(var key in areas){
						_area+="<h3 class=\"left\"><i>"+areas[key]["name"]+"</i>";
						
						for(var k in areas[key]){
							if(typeof areas[key][k] != "string"){
								_area+="<span><a href=\"\">"+areas[key][k]["name"]+"</a></span>";
							}
						}
						_area+="</h3>";
						
					}
					console.log(_area);
					$(".contarea>h3").first().children("i").attr({id:"hb"});
					$(".contarea").html(_area);
				},"text");
				
	
	
	
	
	/*areas*/
	$(".areasr>p").mouseenter(function(){	
		$(this).next().addClass("selected").siblings().removeClass("selected");
		return false;
	});
	
	//color:#db3962;background:url(../images/abg.jpg) no-repeat 0 26px;
	
	
	
	
	
	
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
