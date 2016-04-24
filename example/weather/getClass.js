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

