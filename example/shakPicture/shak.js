// JavaScript Document

(function (){

window.shake=function (obj,attr,dis,fn){
		
		var arr=[];
		for(var i=10; i>0; i -=4){
			arr.push(i,-i);
		}
		arr.push(0);
		
		//var dis=parseInt(getStyle(obj,attr));
		var num=0;
		clearInterval(obj.shak)
		obj.shak=setInterval(function(){
			obj.style[attr]=dis+arr[num]+'px';	
			num++;
			
			if(num==arr.length){
				clearInterval(obj.shak);
				fn && fn();	
			}
		},100);	
	}
	})();
	function getStyle (obj,name){
		return obj.currentStyle? obj.currentStyle[name]:getComputedStyle(obj,false)[name];	
	}