/*banner*/
function change(_obj){
	var timer = 0;
	var _index = 1;
	var _opacity = 0.1;
	function exec(){
		window.clearTimeout(timer);
		if(_opacity == 0.1){
			_obj.src = "images/banner"+(_index++)+".jpg";
			_obj.style.opacity = _opacity;
			_index = _index >= 4?1:_index;
		}
		_opacity+=0.05;
		
		//处理IE8透明度兼容
		if ( /MSIE 8.0/ig.test(navigator.appVersion) ){
			_obj.style['filter'] = "alpha(opacity="+(_opacity * 100)+")";
		}else{
			_obj.style.opacity = _opacity;
		}

		if(_opacity>=1){
			_opacity=0.1;
			//_index++;
			timer=window.setTimeout(exec,2000);
			
		}else{
			timer=window.setTimeout(exec,50);
		}
		
	}
	exec();
	var _banner=document.getElementById("banner");
	var _span=document.createElement("span");
	_span.innerText=1;
	_span.id="span1";
	_banner.appendChild(_span);
	
	_span=document.createElement("span");
	_span.innerText=2;
	_span.id="span2";
	_banner.appendChild(_span);
	
	_span=document.createElement("span");
	_span.innerText=3;
	_span.id="span3";
	_banner.appendChild(_span);
	
	var part=_banner.getElementsByTagName("span");
	for(var i=0;i<part.length;i++){
		part[i].onclick=function(){
			window.clearTimeout(timer);   //清空定时器
			_index=this.innerText;
			
			_opacity=0.1;
			exec();
		}
	}	
}
function createBox(_c){

    //初始化元素
    var _banner=document.getElementById("banner");
	var _show=document.getElementById("show");
	_show.style.width=_banner.style.width*_c;
	_show.style.height=_banner.style.height*_c;
	var _img=document.createElement("img");  //创建一个img 赋予id
	_img.id="image";
	_show.appendChild(_img);   //把img放入div
	change(_img);	
}



window.onload=function(){
	createBox(3);
	ewm();
}
