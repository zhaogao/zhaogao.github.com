// JavaScript Document
var json={
		email:/^[a-z]\w{3,17}@[a-z0-9]{2,6}(\.[a-z]{2,4}){1,2}$/i,
		age:/^1[89]|[2-9]{2}|100$/,
		name:/^[\u4e00-\u9fa5]{2,32}$/
	};
	
function checkForm (id){
	
	var  oForm=document.getElementById(id);
	var  aInput=oForm.getElementsByTagName('input');
	var aSpan=oForm.getElementsByTagName('em');
	var len=aInput.length; 
	//alert(len);
	
	for(var i=0; i<len; i++){
		var re=json[aInput[i].name];
		aInput[i].index=i;
		if(re){
			(function(re){
				aInput[i].onblur=function(){
					if(re.test(this.value)){
						this.className='pass';
						aSpan[this.index].style.display='none';
					}else{
						this.className='erro';
						aSpan[this.index].style.display='inline';
						
					}		
				};
			})(re);
		}
	}
	
	
	oForm.onsubmit=function(){
		var ok=true;
		
		for(var i=0; i<len; i++ ){
			var re=json[aInput[i].name];
			if(re){
				if(re.test(aInput[i].value)){
					aInput[i].className='pass';
					aSpan[i].style.display='none';
				}else{
					aInput[i].className='erro';
					aSpan[i].style.display='inline';
					ok=false;
				}

			}
		}
		if(aInput[3].checked==false){
			ok=false;
		}	
		if(ok==false){
			return false;	
		}	
	};	
}