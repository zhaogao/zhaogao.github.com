// JavaScript Document
function jsonp (url,data,cbName,fn){
		data[cbName]='jsonp'+Math.random();
		data[cbName]=data[cbName].replace('.','');
		
	var arr=[];
	for(var name in data){
		arr.push(name+'='+encodeURIComponent(data[name]));
	}
	var str=arr.join('&');
	
	window[data[cbName]]=function(json){
		oHead.removeChild(oS);
		window[data[cbName]]=null;
		fn(json);
	};
	
	var oS=document.createElement('script');
	oS.src=url+'?'+str;
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}