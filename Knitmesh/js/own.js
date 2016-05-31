(function(own) {

	//当页面hide的时候将其中的页面close掉
	own.closeChildWebviewOfhide = function(currentWebview, closedWebviewId) {
			currentWebview.addEventListener('hide', function() {

				var closeWeb = plus.webview.getWebviewById(closedWebviewId);

				if (!currentWebview.getURL() || !closeWeb) {
					return;
				}
				closeWeb.close();
				closeWeb = null;
			}, false);
		}
		//当页面close的时候将其中的页面close掉
	own.closeChildWebviewOfclose = function(currentWebview, closedWebviewId) {
		currentWebview.addEventListener('close', function() {
			var closeWeb = plus.webview.getWebviewById(closedWebviewId);
			if (!currentWebview.getURL() || !closeWeb) {
				return;
			}
			closeWeb.close();
			closeWeb = null;
		}, false);
	}

	//一般情况下设置anishow
	own.getaniShow = function() {
		var aniShow = 'slide-in-right';
		if (mui.os.android) {
			var androidlist = document.querySelectorAll('ios-only');
			if (androidlist) {
				mui.each(androidlist, function(num, obj) {
					obj.style.display = 'none';
				});
			}

			if (parseFloat(mui.os.version) < 4.4) {
				aniShow = 'slide-in-right';
			}
		}

		return aniShow;
	}

	own.pushWebView = function(options) {
		var webview = plus.webview.getWebviewById('template');
		mui.fire(webview, options.webType, {
			id: options.id,
			href: options.href,
			aniShow: options.aniShow,
			title: options.title,
			isBars: options.isBars,
			barsIcon: options.barsIcon,
			extendOptions: options.extendOptions
		});
	}

	//设置是否需要bounce，一般有scroll的地方会将bounce取消掉
	own.setSubWebviewBounce = function(bounce) {
		var curSubWebview = plus.webview.currentWebview();
		curSubWebview.setStyle({
			bounce: bounce
		});
	}

	own.setMask = function(options) {

		var menu = null;
		
		var mask = null;
		var maskBool = true;
		var main = plus.webview.getWebviewById('HBuilder');
		mui.fire(main, 'showMask', {
			'id': plus.webview.currentWebview().id
		});

		if (mask == null) {

			mask = mui.createMask(function() { 
				
				
				console.log(maskBool);
				if (maskBool == true) {

//					menu.close();
					mui.fire(main, 'hiddeMask', {});
					
				}
			});
		} else {

			maskBool = true;
		}
		mask.show();


		document.addEventListener('hiddeMask', function() {

			maskBool = false;
			mask.close();
//			menu.close();
		});
		
		
		 menu = mui.preload({
						id: 'offcanvas-drag-left-plus-menu',
						url: '../event/webview_Alert.html',
						styles: {
							left: "30%",
							height:'200px',
							width:'200px',
							zindex: 99999
						}
						});
						
						var main = plus.webview.currentWebview();
						menu.show();
		
	}

})(window);


window.alert11 = function(str) {

	var shield = document.createElement('div');
	shield.id = 'shield';
	shield.style.position = 'absolute';
	shield.style.left = '0px';
	shield.style.top = 'opx';
	shield.style.width = '100%';
	shield.style.height = document.body.scrollHeight + 'px';
	shield.style.background = '#000000';
	shield.style.textAlign = 'center';
	shield.style.zIndex = '25';
	shield.style.opacity = '0.1';

	var alertFram = document.createElement("DIV");
	alertFram.id = "alertFram";
	alertFram.style.position = "absolute";
	alertFram.style.top = '50%';
	alertFram.style.marginTop = '-75px';
	alertFram.style.width = '90%';
	alertFram.style.marginLeft = '5%';
	alertFram.style.height = "150px";
	alertFram.style.background = "#ff0000";
	alertFram.style.textAlign = "center";
	//	alertFram.style.lineHeight = "150px"; 
	alertFram.style.zIndex = "300";
	alertFram.style.borderRadius = '10px';
	//	alertFram.style.overflow = 'hidden';


	var strHtml = '';
	strHtml += '<p style="text-again:center;height:30px;background:#ffffff">已同意</p>';
	strHtml += '<textarea rows="3" cols="20" style="border-radius:5px;width:80%;marign:0px;background:yellow"></textarea>';
	strHtml += '<span style="background:blue;width:50%;float:left;color:red">sfsfs</span><span style="width:50%;float:left;color:red">sfsfs</span>';
	alertFram.innerHTML = strHtml;

	document.body.appendChild(alertFram);
	document.body.appendChild(shield);

}