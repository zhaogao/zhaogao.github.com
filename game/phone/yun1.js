// JavaScript Document
function getStyle (obj,name){
	return obj.currentStyle? obj.currentStyle[name]: getComputedStyle(obj,false)[name];
}
function yun (obj,json,options){
		options=options || {};
		options.duration=options.duration || 700;
		options.easing=options.easing || "ease-out";
		
		var start={};
		var dis={};
		for(name in json ){
			
			start[name]=parseFloat(getStyle (obj,name));
			dis[name]=json[name]-start[name];
		}
		var n=0; 
		var count=Math.round(options.duration/30);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			for (name in json ){
				switch (options.easing){
								case "linear":
									var a=n/count;
									var op=start[name]+dis[name]*a;
									break;
								case "ease-in":
									var a=n/count;
									var op=start[name]+dis[name]*a*a*a;
									break;
								case "ease-out":
									var a=1-n/count;
									var op=start[name]+dis[name]*(1-a*a*a);
									break;
								
				}
				
				if(name=="opacity"){
					obj.style.opacity=op;
					obj.style.filter="alpha(opacity:"+op*100+")";
				}else{
					obj.style[name]=op+'px';
				}
			}
			if(n==count){
				clearInterval(obj.timer);
				options.complete && options.complete.call(obj);	
			}
				
		},30);
}