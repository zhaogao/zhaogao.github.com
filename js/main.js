window.onload = window.onresize = function() {
	var oDivWrap = document.getElementById('wrap');
	var oDivCountent = document.getElementById('countent')
	var aDivPage = oDivCountent.children;

	if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1){
		if(document.documentElement.clientHeight<666){
			oDivWrap.style.height =666+'px';
		}else{
			oDivWrap.style.height = document.documentElement.clientHeight + 'px';
		}
	}else{
		if(document.documentElement.clientHeight<600){
			oDivWrap.style.height =600+'px';
		}else{
			oDivWrap.style.height = document.documentElement.clientHeight + 'px';
		}
	}
	
	
	oDivCountent.style.height = oDivWrap.offsetHeight * aDivPage.length + "px";

	for (var i = 0; i < aDivPage.length; i++) {
		if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1){
			if(document.documentElement.clientHeight<666){
				aDivPage[i].style.height=666+'px';
			}else{
				aDivPage[i].style.height = document.documentElement.clientHeight + 'px';
			}
		}else{
			if(document.documentElement.clientHeight<600){
			aDivPage[i].style.height=600+'px';
			}else{
				aDivPage[i].style.height = document.documentElement.clientHeight + 'px';
			}
		}

		
		
	}

	//总体页面滚动 开始
	(function() {

		//点击seemywork 调到第二页	
		var bScroll = false;
		var n=0; 

		var oCount=document.getElementById('p1_con');
		var oWork=getByClass(oCount,'p1title_thirst')[0];

		oWork.onclick=function(){
			n=1;
			move(oDivCountent, {
					top: -aDivPage[0].offsetHeight * n
				});
		};
		//鼠标滚轮事件添加	
		addMouseWheel(oDivWrap, function(bDown) {
			if (bScroll) return;
			if (bDown) {
				bScroll = true;
				n++;
				
				if (n >= aDivPage.length-1) {
					n=aDivPage.length-1;
					move(oDivCountent, {
						top:  - aDivPage[0].offsetHeight*n
					}, {
						complete: function() {
							bScroll = false;
						}
					});
					
				} else {

					move(oDivCountent, {
						top: - aDivPage[0].offsetHeight*n
					}, {
						complete: function() {
							bScroll = false;
						}
					});
				}

			} else {

				bScroll = true;
				n--;
				if ( n <= 0) {
					n=0;
					move(oDivCountent, {
						top: 0
					}, {
						complete: function() {
							bScroll = false;
						}
					})
				} else {

					move(oDivCountent, {
						top:  -aDivPage[0].offsetHeight*n
					}, {
						complete: function() {
							bScroll = false;
						}
					})
				}
			}

		});

		//点击右侧菜单栏跳动页面
		(function() {
			var oP1Right = document.getElementById('wrap_right');
			var aUl = oP1Right.getElementsByTagName('ul')[0];
			var aLi = aUl.children;
	
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].index = i;
				
				aLi[i].onclick = function() {
					n=this.index;
					move(oDivCountent, {
						top: -aDivPage[0].offsetHeight * this.index
					});
				};
			}
	})();

	//p1t_nav
	(function() {
		var oPtNav = getByClass(p1_con,'p1t_nav')[0];
		var aNavTop = oPtNav.children;
		
		//alert(aNavTop.length);
		for (var i = 0; i < aNavTop.length; i++) {
			aNavTop[i].index = i;
			
			aNavTop[i].onclick = function() {
				n=this.index;
				move(oDivCountent, {
					top: -aDivPage[0].offsetHeight * this.index
				});
			};
		}
	})();


	})();
	//总体页面滚动 结束

	//首页文字移动效果
	(function(){
		var oBg=document.getElementById('bgPio');
		var oCount=document.getElementById('p1_con');
		var oBigWord=getByClass(oCount,'p1title_first')[0];
		var oSecWord=getByClass(oCount,'p1title_sec')[0];
		var oWork=getByClass(oCount,'p1title_thirst')[0];
		
	/*	setTimeout(function(){
			
		},1000);*/
		
		jumpMove(oBg,-100,'backgroundPosition',3000,'Cubic');
		
		jumpMove(oBigWord,153,'left',3500,'Back');
		setTimeout(function(){
			jumpMove(oSecWord,283,'left',2500,'Back');
		},1000);
		
		setTimeout(function(){
			jumpMove(oWork,330,'top',2000,'Back');
		},2000);
		
		
	})();

	//p2页 隐入隐出 和 菜单上下效果
	(function() {
		var oCont = document.getElementById('p2_content');
		var aDiv = oCont.children;
		var oNav = document.getElementById('nav');
		var oNavUl = oNav.getElementsByTagName('ul')[0];
		var aBtn = oNavUl.children;

		oNavUl.style.width = aBtn.length * (aBtn[0].offsetWidth + 20) + 'px';
		var aBtnLeft = (oNav.offsetWidth - oNavUl.offsetWidth) / 2;

		//存取位置
		var oUl = aDiv[0].getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		var aPos = [];

		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.left = aLi[i].offsetLeft + 'px';
			aLi[i].style.top = aLi[i].offsetTop + 'px';
			aPos[i] = {
				left: aLi[i].offsetLeft,
				top: aLi[i].offsetTop,
				width: aLi[i].offsetWidth,
				height: aLi[i].offsetHeight,
				opacity: 1
				
			};
		}

		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.margin = '0';
			aLi[i].style.position = 'absolute';
		}

		function getPosLast(aBtnLast, iNow) {
			var aBtnPos = {
				left: aBtn[0].offsetLeft * aBtnLast + aBtnLeft,
				top: oCont.offsetHeight,
				width: aBtn[aBtnLast].offsetWidth,
				height: aBtn[aBtnLast].offsetHeight,
				opacity: 0
				//filter:'alpha(opacity:0)'
			};

			var aLLast = aDiv[aBtnLast].getElementsByTagName('li');
			var timer = null;
			var count = aLi.length - 1;
			clearInterval(timer);
			timer = setInterval(function() {
				(function(index) {
					move(aLLast[count], aBtnPos, {
						complete: function() {
							if (index == 0) {
								//alert('over');
								aBtn[aBtnLast].className = '';
								aDiv[aBtnLast].style.display = 'none';

								aBtn[iNow].className = 'active';
								var aLiNow = aDiv[iNow].getElementsByTagName('li');
								//alert(aLiNow.length);

								for (var i = 0; i < aLiNow.length; i++) {
									aLiNow[i].style.position = 'absolute';
									aLiNow[i].style.margin = '0';
									aLiNow[i].style.left = aBtn[0].offsetLeft * iNow + aBtnLeft + 'px';
									aLiNow[i].style.top = oCont.offsetHeight + oNav.offsetHeight + 'px';
									aLiNow[i].style.width = aBtn[0].offsetWidth + 'px';
									aLiNow[i].style.height = aBtn[0].offsetHeight + 'px';
									aLiNow[i].style.opacity = 0;
									aLiNow[i].style.filter = 'alpha(opacity:0)';


								}
								aDiv[iNow].style.display = 'block';
								//var aLiNow=aDiv[iNow].getElementsByTagName('li');
								getPosNow(aLiNow);
							}
						}
					});

				})(count);
				count--;

				if (count == -1) {
					clearInterval(timer);

				}
			}, 100);
		}

		function getPosNow(obj) {

			var timer = null;
			var count = 0;
			clearInterval(timer);
			timer = setInterval(function() {
				(function(index) {
					move(obj[count], aPos[count], {
						complete: function() {

						}
					});
				})(count);
				count++;

				if (count == obj.length) {
					clearInterval(timer);
					over = false;
				}
			}, 100);
		}


		var iNow = 0;
		var aBtnLast = 0;
		var over = false;
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i;


			aBtn[i].onclick = function() {

				iNow = this.index;

				//alert('上一个'+aBtnLast+",当前"+iNow);
				if (over) return;
				over = true;
				getPosLast(aBtnLast, iNow);
				aBtnLast = iNow;

			};
		}
	})();
	//隐入隐出
	function direction(obj, oEv, op2_wrap) {
		var x = oEv.clientX - obj.offsetLeft - obj.offsetWidth / 2 - op2_wrap.offsetLeft - 10;
		var y = obj.offsetTop + obj.offsetHeight / 2 - oEv.clientY + 10;
		var a = Math.atan2(y, x);
		//alert(x+','+y);
		return Math.round((a * 180 / Math.PI + 180) / 90) % 4;
	}

	(function() {
		var op2_wrap = document.getElementById('p2_wrap');
		var owind = document.getElementById('p2_content');
		var oUl = owind.getElementsByTagName('ul')[0];
		var aLi = owind.getElementsByTagName('li');

		for (var i = 0; i < aLi.length; i++) {
			Logo(aLi[i]);
			aLi[i].style.backgroundImage='url(suolue/'+(i+1)+'.png)';
		}

		function Logo(obj) {
			obj.onmouseover = function(ev) {
				var oEv = ev || event;
				var oSc = oEv.fromElement || oEv.relatedTarget;
				if (oSc&&obj.contains(oSc)) return;
				var oSpan = this.children[0];

				var n = direction(obj, oEv, op2_wrap);
				//alert(n);
				switch (n) {
					case 0:
						oSpan.style.left = "-240px";
						oSpan.style.top = "0";
						break;
					case 1:
						oSpan.style.left = "0";
						oSpan.style.top = "240px";
						break;
					case 2:
						oSpan.style.left = "240px";
						oSpan.style.top = "0";
						break;
					case 3:
						oSpan.style.left = "0px";
						oSpan.style.top = "-240px";
						break;

				}
				move(oSpan, {
					left: 0,
					top: 0
				});
			};

			obj.onmouseout = function(ev) {
				var oEv = ev || event;
				var oTo = oEv.toElement || oEv.relatedTarget;
				if (oTo&&obj.contains(oTo)) return;
				var oSpan = this.children[0];
				var n = direction(obj, oEv, op2_wrap);

				switch (n) {
					case 0:
						move(oSpan, {
							left: -240,
							top: 0
						});
						break;
					case 1:
						move(oSpan, {
							left: 0,
							top: 240
						});
						break;
					case 2:
						move(oSpan, {
							left: 240,
							top: 0
						});
						break;
					case 3:
						move(oSpan, {
							left: 0,
							top: -240
						});
						break;
				}
			}
		}

	})();

};