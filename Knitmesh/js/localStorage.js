
var accoutKey = 'accout';

var storage = window.localStorage;

function localGet(){
	
	if (storage.getItem(accoutKey) != null) {
		
		return storage.getItem(accoutKey);
		
	}else if(Cookie.read(accoutKey) != null) {
		
		return Cookie.read(accoutKey);
		
	}else {
		
		return null;
	}	
}


function localSave(accout) {
	
	if (storage) {
		
		storage.setItem(accoutKey,accout);
	}else {
		
		Cookie.write(accoutKey,accout)
	}
}
