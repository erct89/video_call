
if(typeof(Utils === 'undefined')){
	var Utils = {
		isDomElement: function (obj){
			if(obj && typeof(obj) === "object"){
				if(obj.tagName){
					return true;		
				}
			}

			return false;
		}
	};
}

if(typeof(Dimensions) === 'undefined'){
	var Dimensions = {
		getHeightTag: function(element){
			if(window.jQuery){
				if(Utils.isDomElement(element)){
					return $(element).outerHeight(true);
				}else if(element === window){
					return $(element).innerHeight();
				}
			}else{
				if(Utils.isDomElement(element)){
					return element.clientHeight;	
				}else if(element === window){
					return $(element).innerHeight();
				}
			}

			return null;
		},

		getWidthTag: function (element){
			if(window.jQuery){
				if(Utils.isDomElement(element)){
					return $(element).outerWidth(true);
				}else if(element === window){
					return $(element).innerWidth();
				}
			}else{
				if(Utils.isDomElement(element)){
					return element.clientWidth;
				}else if(element === window){
					return element.innerWidth;
				}
			}

			return null;
		},

		setWidthTag: function (element, width){
			var w = Number(width);
			if(w !== NaN){
				if(window.jQuery){
					if(Utils.isDomElement(element)){
						return $(element).width(w + "px");
					}else if(element === window){
						return $(element).width(w + "px");
					}
				}else{
					if(Utils.isDomElement(element)){
						return element.clientWidth = w + "px";
					}else if(element === window){
						return element.innerWidth = w + "px";
					}
				}
			}
			return false;
		},

		elementsHeigth: function (arrayElements){
			var heigth = 0, h = 0;

			if(arrayElements !== null && arrayElements !== undefined){
				if(Array.isArray(arrayElements)){
					for(var i = 0; i < arrayElements.length; i++){
						h = Number(Dimensions.getHeightTag(arrayElements[i]));
						if(h !== null && h !== undefined && h !== NaN){
							heigth += h;
						}
					}
				}else{
					h = Number(Dimensions.getHeightTag(arrayElements));
					if(h !== null && h !== undefined && h !== NaN){
						heigth += h;
					}
				}
				return heigth;
			}
			return null;
		},

		elementsWidthTag: function (arrayElements){
			var width = 0, w = 0;

			if(arrayElements !== null && arrayElements !== undefined){
				if(Array.isArray(arrayElements)){
					for(var i = 0; i < arrayElements.length; i++){
						w = Number(Dimensions.getWidthTag(arrayElements[i]));
						if(w !== null && w !== undefined && w !== NaN){
							width += w;
						}
					}
				}else{
					w = Number(Dimensions.getWidthTag(arrayElements));
					if(w !== null && w !== undefined && w !== NaN){
						width += w;
					}
				}
				return width;
			}
			return null;
		},

		difHeigthTag: function (fullHeight,staticHeight){
			var fullH = 0, fullStaticHeight = 0;
			
			if(fullHeight !== null && fullHeight !== undefined && staticHeight !== null && staticHeight !== undefined){
				fullH = Dimensions.elementsHeigth(fullHeight);
				fullStaticHeight = Dimensions.elementsHeigth(staticHeight);
				
				return fullH - fullStaticHeight;
			}

			return null;
		},

		difWidthTag: function (fullWidth,staticWidth){
			var fullW = 0, fullStaticWidth = 0;
			
			if(fullWidth !== null && fullWidth !== undefined && staticWidth !== null && staticWidth !== undefined){
				fullW = Dimensions.elementsWidth(fullWidth);
				fullStaticWidth = Dimensions.elementsWidth(staticWidth);
				
				return fullW - fullStaticWidth;
			}

			return null;
		},

		copyWidthTag: function(elementOrigin, elementDestiny){
			if(Utils.isDomElement(elementOrigin) && Utils.isDomElement(elementDestiny)){
				return Dimensions.setWidthTag(elementDestiny,Dimensions.getWidthTag(elementOrigin));
			}

			return false;
		},

		autoHeight: function (element, staticHeight){
			var id = null;
			if(Utils.isDomElement(element)){
				element.style.height = Dimensions.difHeigthTag(window,staticHeight) + "px";

				id = setInterval(function(){
					var h = Dimensions.difHeigthTag(window,staticHeight);			
					element.style.height = h + "px";
				}, 3000);
				
			}
		},

		autoWidth: function (element, staticWidth){
			var id = null;
			if(Utils.isDomElement(element)){
				element.style.width = Dimensions.difWidthTag(window,staticWidth) + "px";

				id = setInterval(function(){
					var w = Dimensions.difWidthTag(window, staticWidth);
					element.style.width = w + "px";
				}, 3000);
			}
		}
	};
}