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

 ////////////////////////////////////////////////////////
	function openWin(URL,type,w,h) {
	
	var status = 'no';
	var reSize = 'no';
	var scroll = 'no';
	var toolbar = 'no';
	var location = 'no';
	var menubar = 'no';
	var directories = 'no';
	var ewindow;
	
	
	
	if (type == "vid") {
		if (!w) {
			w = 570;
		}
		if (!h) {
			h= 690;
		}
		reSize = 'no';		
	} 	

	if (type == "survey") {
		if (!w) {
			w = 570;
		}
		if (!h) {
			h= 690;
		}
		reSize = 'no';		
		scroll = 'yes';		
	} 	
	
	else {
		if (!w) {
			w = 350;
		}
		if (!h) {
			h= 360;
		}
		reSize = 'yes';		
	} 	
	
	var windowFeatures = 'width='+w+',height='+h+
									',toolbar='+toolbar+',status='+status+
									',scrollbars='+scroll+',resizable='+reSize+
									',menubar='+menubar+
									',location='+location+
									',directories='+directories+''
									
	ewindow = window.open(URL,type,windowFeatures);   
	ewindow.focus();
}


}
