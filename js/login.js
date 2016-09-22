 $(function(){
	$(".telnumber").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var reg=/^1[34578]{1}[0-9]{9}/g;
			var val=(reg.test(value));
			if(!val){
                    $(".telnumber").siblings(".checktel").css("display","block");
                }
		});
		$(".pwd").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var reg=/\w{6,20}/g;
			var val=(reg.test(value));
			if(!val){
                    $(".pwd").siblings(".checkpwd").css("display","block");
                }
		});
		
		/*showmenu*/
	$(".sort").mouseenter(function(){
		$(this).children(".change").css("background","url(../images/changetriangle.jpg)");
		$(".menu").css("display","block");
		$(".menu").mouseleave(function(){
			$(".menu").css("display","none");
			$(this).parent().children(".change").css("background","../url(images/whitetriangle.jpg)");
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