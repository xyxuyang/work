
function preparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementsById) return false;
	if (!document.getElementsById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	document.body.appendChild(placeholder);
	document.body.appendChild(description);
	var gallery = document.getElementsById("imagegallery");  /*得到图片清单*/
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}

}