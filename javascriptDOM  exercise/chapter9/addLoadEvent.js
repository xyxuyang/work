function addLoadEvent(func) {
	var oldonload = window.oldonload;
	if (typeof window.oldonload !='function') {
		window.onload = func;
	}
	else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}