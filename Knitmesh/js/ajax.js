
var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","../js/md5.js");// 在这里引入了a.js
document.body.appendChild(new_element);

var load_element=document.createElement("script");
load_element.setAttribute("type","text/javascript");
load_element.setAttribute("src","../js/load.js");// 在这里引入了a.js
document.body.appendChild(load_element);


var httpUrl = "http://121.42.35.206:8083/crm/rest/api?";

	 

(function(w){
	
	function httpReqest(data,type,success,error){
		
		mui.ajax(httpUrl,{
			data:data,
			dataType:'json',
			type:type,
			timeout:10000,
			success:function(data){
				
				console.log(JSON.stringify(data));
				success(data);
			},
			error:function(xhr,type,errorThrown) {
				
				error(errorThrown);
			}
		});
	}
	
//	登录
	w.loginIn = function(options,success,error){
	
		var method = 'huihoo.e3.user.login';
		var data = 'method=' + method;
		for (var key in options) {
			
			data += '&'+key+'='+options[key];
		}
		console.log(data);
		httpReqest(data,'post',success,error);
	}
	
	
})(window);
