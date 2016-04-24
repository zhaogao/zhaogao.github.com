
//添加准备事件
function $(fn){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", fn, false)
	}else{
		document.attachEvent("onreadystatechange",function(){
			if(document.readyState=="complete"){
				fn &&fn();
			}
		})
	}
}

//添加鼠标滚轮事件
function addMouseWheel (obj,fn){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener("DOMMouseScroll",fnwheel,false);
	}else{
		obj.onmousewheel=fnwheel;
	}

	function fnwheel (ev){
		var oEv=ev || event;
		var bDown=true;

		if(oEv.wheelDelta){
			bDown=oEv.wheelDelta>0?false:true;
		}else{
			bDown=oEv.detail>0?true:false;
		}

		typeof fn=="function" && fn(bDown);
		oEv.preventDefault && oEv.preventDefault();
	}
};

//运动形式
   var  Tween = {
        Linear: function(t,b,c,d){ return c*t/d + b; },
        Quad: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t + b;
            },
            easeOut: function(t,b,c,d){
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            }
        },
        Cubic: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            }
        },
        Quart: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            }
        },
        Quint: {
            easeIn: function(t,b,c,d){
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOut: function(t,b,c,d){
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            }
        },
        Sine: {
            easeIn: function(t,b,c,d){
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOut: function(t,b,c,d){
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOut: function(t,b,c,d){
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            }
        },
        Expo: {
            easeIn: function(t,b,c,d){
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOut: function(t,b,c,d){
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOut: function(t,b,c,d){
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        Circ: {
            easeIn: function(t,b,c,d){
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOut: function(t,b,c,d){
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOut: function(t,b,c,d){
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            }
        },
        Elastic: {
            easeIn: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOut: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
            },
            easeInOut: function(t,b,c,d,a,p){
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            }
        },
        Back: {
            easeIn: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOut: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 2) + b;
            },
            easeInOut: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158; 
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            }
        },
        Bounce: {
            easeIn: function(t,b,c,d){
                return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
            },
            easeOut: function(t,b,c,d){
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeInOut: function(t,b,c,d){
                if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
                else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        }
    }

	function jumpMove (obj,iTarget,direc,time,type){
        if(direc=='backgroundPosition'){
            var start=0;
        }else{
            var start =parseInt(getStyle(obj,direc));
        }
		
	
		var dis = iTarget - start;
		var count = Math.round(time/30);
		var n = 0;
		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var cur  = Tween[type].easeInOut(n/count*time,start,dis,time);
            
               

			if(direc=='backgroundPosition'){
                obj.style.backgroundPosition=cur+'px 0';
            }else{
               obj.style[direc] =cur + "px"; 
            }
			
			if(n == count){
				clearInterval(obj.timer);
			}
				
		},30);
	}

//获取样式
function getStyle(obj,name){
    
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
//通过class获取元素
function getByClass(oParent, sClass)
{
    if(oParent.getElementsByClassName)
    {
        return oParent.getElementsByClassName(sClass);
    }
    else
    {
        var aEle=oParent.getElementsByTagName('*');
        var re=new RegExp('\\b'+sClass+'\\b');
        var result=[];
        
        for(var i=0;i<aEle.length;i++)
        {
            if(aEle[i].className.search(re)!=-1)
            {
                result.push(aEle[i]);
            }
        }
        
        return result;
    }
}

//添加class值
function addClass(obj, sClass)
{
    //改进：判断有没有
    var re=new RegExp('\\b'+sClass+'\\b');
    
    if(obj.className.search(re)==-1)
    {
        if(obj.className)
        {
            obj.className+=sClass;
        }
        else
        {
            obj.className=sClass;
        }
    }
}

//移出class
function removeClass(obj, sClass)
{
    var re=new RegExp('\\b'+sClass+'\\b', 'g');
    
    obj.className=obj.className.replace(re, '').replace(/^\s+|\s+$/g, '').split(/\s+/).join(' ');
    
    if(!obj.className)
    {
        obj.removeAttribute('class');
    }
}


//options  duration complete  easing  linear  ease-in ease-out
function move(obj,json,options){
    options = options || {};
    options.duration = options.duration || 700;
    options.easing = options.easing || "ease-out";
    
    
    
    
    var start = {};
    var dis = {};
    
    for(var name in json){
        
        start[name] = parseFloat(getStyle(obj,name));
        
        dis[name] = json[name] - start[name];
    }
    
    
    var count = Math.round(options.duration/30);
    var n = 0;
    
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;
        
        for(var name in json){
            
            switch(options.easing){
                case "linear":
                    var a = n/count;
                    var cur = start[name] + dis[name]*a;
                    break;
                case "ease-in":
                    var a = n/count;
                    var cur = start[name] + dis[name]*Math.pow(a,3);
                    break;
                case "ease-out":
                    var a = 1 - n/count;
                    var cur = start[name]+ dis[name]*(1-Math.pow(a,3));
                    break;
            }
            
            if(name == "opacity"){
                obj.style.opacity = cur;
                obj.style.filter = "alpha(opacity:"+cur*100+")";
            } else {
                obj.style[name] = cur + "px";
            }
        }
        if(n == count){
            clearInterval(obj.timer);
            options.complete &&　options.complete.call(obj);
        }   
    },30);
        
}

	
	