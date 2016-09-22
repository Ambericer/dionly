$(document).ready(function(){
		$(".telnumber").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var reg=/^1[34578]{1}[0-9]{9}/g;
			var val=(reg.test(value));
			if(!val){
                    $(".telnumber").siblings(".checktel").css("display","block");
                }
		});
		
		$(".code").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var val=$(this).parent().children(".contcode").text();//如果用！==的话此处仍需做类型转换。
			//var val=(reg.test(value));
			if(value != val){
                    $(".code").siblings(".checkcode").css("display","block");
                }
		});
		
		$(".msg").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var reg=/\d{4}/g;
			var val=(reg.test(value));
			if(!val){
                    $(".msg").siblings(".checkmsg").css("display","block");
                }
		});
		
		$(".pwd1").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var reg=/\w{6,20}/g;
			var val=(reg.test(value));
			if(!val){
                    $(".pwd1").siblings(".checkpwd1").css("display","block");
                }
		});
		
		$(".pwd2").blur(function(){
			var value=$(this).val();
			//console.log(value);
			var val=$(this).parent().children(".pwd1").val();
			if(val != value){
                    $(".pwd2").siblings(".checkpwd2").css("display","block");
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