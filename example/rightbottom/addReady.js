//版权 北京智能社©, 保留所有权利

//ready   documnet
//function addReady(fn){
function $(fn){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false);
	} else {
		document.attachEvent("onreadystatechange",function(){
			if(document.readyState == "complete"){
				fn && fn();
			}	
		});
	}
}
