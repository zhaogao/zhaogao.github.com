// JavaScript Document

function getStyle (obj,name){
	return obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}


function move (obj,json,options){
		options=options || {};
		options.duration=options.duration || 700;
		
		var start={};
		var dis={};
		
		for(name in json){
			if(name=="opacity"){
				 start["opacity"]=parseFloat(getStyle(obj,name));
			}else{
				 start[name]=parseInt(getStyle(obj,name));
			}
				
			 dis[name]=json[name]-start[name];
		}
		
		
	
		

		var count=Math.round(options.duration/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			for(name in json){
				var oPc=start[name]+dis[name]/count*n;
				if(name=="opacity"){
					obj.style.opacity=oPc;
					obj.style.filter="alpha(opacity:"+oPc*100+")";
				}else{
					obj.style[name]=start[name]+dis[name]/count*n+'px';
				}
			}
			//obj.style.width==iTarget+'px'
			if(n>=count){
				clearInterval(obj.timer);
				options.complete && options.complete();
			}	
		},30);	
		
			
}