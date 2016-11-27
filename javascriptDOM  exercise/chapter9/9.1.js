function styleHeaderSiblings(){
	var headers = document.getElementByTagName("h1");
	for (var i=0; i<headers.length; i++){
		var elem = getNextElement(headers[i].nextSibling)
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
	}
}
function getNextElement(node){
	if (node.nodeType == 1){
		return node;
	}
	if (node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
function addLoadEvent(func){
	var oldonload = window.oldonload;
	if (typeof window.oldonload !='function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(styleHeaderSiblings);