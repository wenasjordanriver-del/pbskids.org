var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/** note this puts roll over on image, not href **/
function initRollovers()
{
	//if we don't support getElementById then exit
	if (! document.getElementsByTagName) return;

	//yes it even does preload
	var aPreLoad = new Array();
	var sTempSrc;

	//grab all nav images
	//var aImages = document.getElementById("nav").getElementsByTagName("img");

	//if you want all images on page do this instead
	//var aImages = document.getElementsByTagName("img");

	//want to grab both regular images and image submit buttons (used in cgi game)
	var aImages = new Array();
	var imageColl = document.getElementsByTagName("img");
	var inputColl = document.getElementsByTagName("input");  
	for (var i=0; i<imageColl.length; i++) { aImages.push(imageColl[i]); }
	for (var i=0; i<inputColl.length; i++) { if (inputColl[i].getAttribute('type') == "image") { aImages.push(inputColl[i]); }}

	//loop over images
	for (var i = 0; i < aImages.length; i++)
	{
		//we use class name to find image
		if (aImages[i].className.match('ovr'))
		{
			//grab src
			var src = aImages[i].getAttribute('src');

			//grab extension (neato works for gif and jpg nd png if you so feel)
			var ftype = src.substring(src.lastIndexOf('.'), src.length);

			//create a new attribute for rollover (for fyi = '_ovr')
			var hsrc = src.replace(ftype, '_ovr'+ftype);
			aImages[i].setAttribute('hsrc', hsrc);

			//PRELOAD !!
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;

			//on mouseover grab hsrc
			aImages[i].onmouseover = function()
			{
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}

			//on mouse out strip out "on"
			aImages[i].onmouseout = function()
			{
			//alert(sTempSrc);
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_ovr'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

window.onload = initRollovers;

}
