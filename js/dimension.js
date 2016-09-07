function isDomElement(obj){
	console.log(typeof obj);
	console.log(obj.tagName);
	if(obj && typeof(obj) === "object"){
		if(obj.tagName){
			return true;		
		}
	}

	return false;
}

function getHeightTag(element){
	if(window.jQuery){
		if(isDomElement(element))
			return $(element).outerHeight(true);
	}else if(element === window){
		return $(element).innerHeight();
	}else{
		if(isDomElement(element))
			return element.clientHeight;	
	}

	return null;
}

function getWidthTag(element){
	if(window.jQuery){
		if(isDomElement(element))
			return $(element).outerWidth(true);
	}else if(element === window){
		return $(element).innerWidth();
	}else{
		if(isDomElement(element))
			return element.clientWidth;
	}

	return null;
}

function autoHeigthTag(fullHeight,staticHeight){
	var fullH = 0, fullStaticHeight = 0;
	
	if(fullHeight !== null && fullHeight !== undefined && staticHeight !== null && staticHeight !== undefined){
		if(Array.isArray(fullHeight)){
			
		}else{
			
		}

		if(Array.isArray(staticHeight)){
		
		}else{
		
		}
	}
}
