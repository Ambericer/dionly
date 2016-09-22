//XMLHttpRequest
//作用：前端与服务器端的数据交互，用的好的情况下可缓解服务器压力。

//兼容问题
//在老版本的IE浏览器当中是利用插件的方式的实现该对象.
//新版本Ie的浏览器当中同firefox chrome opera safari等相同


/**readyState:
* 0:open之前，表还未打开远程发武器连接
* 1:open表示打开远程服务器连接地址
* 2:send向服务器发送请求
* 3:表示服务器响应过程中
* 4:表示服务器响应完成
**/


//老版本的IE用ActiveXObject()
/*var _xhr=new ActiveXObject("MSXML2.XMLHttP.6.0");//参数为插件名称
var _xhr=new ActiveXObject("MSXML2.XMTHTTP.3.0");
var _xhr=new ActiveXObject("MSXML2.XMLHTTP");*/
//三个版本，怎么解决兼容问题
//alert(_xhr);

function createHttpRequest(){
	try{
		return new XMLHttpRequest();
	}catch(e){
		try{
			return new ActiveXObject("MSXML2.XMLHTTP.6.0");
		}catch(e){
			try{
				return new ActiveXObject("MSXML2.XMLHTTP.3.0");
			}catch(e){
				try{
					return new ActiveXObject("MSXML2.XMLHTTP");
				}catch(e){
					if(confirm("尊敬用户您好，浏览器版本太低请升级")){
						window.location.href="Firefox-full-latest.exe";
					}
				}
			}
		}
	}
}

function ajaxRequest(_method,_url,_async,_parameter,_fn){
	//alert(_fn);
	/*_fn=function(data){
		var _data=data.match(/a+/g);
		alert(_data);
	}*/
	var _ajax=createHttpRequest();
	if(_ajax){
		_ajax.onreadystatechange=function(){
			if(_ajax.readyState==4){
				//var _json=window.eval("("+_ajax.responseText+")");
				//_fn(_ajax.responseText);
				
				_fn(_ajax.responseText);
				//alert(abc);
				//fn();
			}
		}
		_ajax.open(_method,_url,_async);//所有的文本文件都可以正常请求到。二进制文件或多媒体文件是不可以请求的。
		_ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf8");
		//发送数据时此设置必须注明
		_ajax.send(_parameter);//_parameter的格式严格遵循第66行的设置的格式；
		//例如我们设置的是urlencoded 那么就_parameter就必须按照url地址栏参数格式：如下："name=value&age=10&pwd=123456"
	}
}



