function isDomElement(obj){
	if(obj && typeof(obj) === "object"){
		if(obj.tagName){
			return true;		
		}
	}

	return false;
};

function getHeightTag(element){
	if(window.jQuery){
		if(isDomElement(element)){
			return $(element).outerHeight(true);
		}else if(element === window){
			return $(element).innerHeight();
		}
	}else{
		if(isDomElement(element)){
			return element.clientHeight;	
		}else if(element === window){
			return $(element).innerHeight();
		}
	}

	return null;
};

function getWidthTag(element){
	if(window.jQuery){
		if(isDomElement(element)){
			return $(element).outerWidth(true);
		}else if(element === window){
			return $(element).innerWidth();
		}
	}else{
		if(isDomElement(element)){
			return element.clientWidth;
		}else if(element === window){
			return $(element).innerWidth();
		}
	}

	return null;
};

function elementsHeigth(arrayElements){
	var heigth = 0, h = 0;

	if(arrayElements !== null && arrayElements !== undefined){
		if(Array.isArray(arrayElements)){
			for(var i = 0; i < arrayElements.length; i++){
				h = Number(getHeightTag(arrayElements[i]));
				if(h !== null && h !== undefined && h !== NaN){
					heigth += h;
				}
			}
		}else{
			h = Number(getHeightTag(arrayElements));
			if(h !== null && h !== undefined && h !== NaN){
				heigth += h;
			}
		}
		return heigth;
	}
	return null;
};

function elementsWidthTag(arrayElements){
	var width = 0, w = 0;

	if(arrayElements !== null && arrayElements !== undefined){
		if(Array.isArray(arrayElements)){
			for(var i = 0; i < arrayElements.length; i++){
				w = Number(getWidthTag(arrayElements[i]));
				if(w !== null && w !== undefined && w !== NaN){
					width += w;
				}
			}
		}else{
			w = Number(getWidthTag(arrayElements));
			if(w !== null && w !== undefined && w !== NaN){
				width += w;
			}
		}
		return width;
	}
	return null;
};

function difHeigthTag(fullHeight,staticHeight){
	var fullH = 0, fullStaticHeight = 0;
	
	if(fullHeight !== null && fullHeight !== undefined && staticHeight !== null && staticHeight !== undefined){
		fullH = elementsHeigth(fullHeight);
		fullStaticHeight = elementsHeigth(staticHeight);
		
		return fullH - fullStaticHeight;
	}

	return null;
};

function autoHeight(element, staticHeight){
	var id = null;
	if(isDomElement(element)){
		element.style.height = difHeigthTag(window,staticHeight) + "px";

		id = setInterval(function(){
				var h = difHeigthTag(window,staticHeight);	
				console.log("Tamanio : " + h);			
				element.style.height = h + "px";
			}, 5000);
		
	}
}
