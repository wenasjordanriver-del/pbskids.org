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

<!--

var serverurl = "http://" + window.location.host + "/";

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function popupFile(fileName, w, h)
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=0,resizable=0,menubar=0' ;
	title = 'MCRPopUp' ;
	win = window.open(fileName, title, winprops);
	win.focus();
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function isEmailValid(Campo)
{
	var perfect = true;

	with (Campo)
		{
		
    //To validate valid character
		var car_validos = "0123456789abcdefghijlkmnopqrstuvwxyz@.-_";
		var car_otros = "@.-_";

		for (var i=0; i < value.length; i++) {
			var ch = value.substring(i, i+1);
			if (car_validos.indexOf(ch) == -1) perfect = false;
		}

		apos = value.indexOf("@");
		lastpos = value.length-1;    
    
    for(var i=0; i<lastpos; i++){  
      perfect = false;
      var valor = value.charAt(i);            
      if(valor == "."){
        perfect = true;
        i=lastpos;
      }
    }

		// Validate first and last character (they're not supossed to be special character)
		var car1 = value.substring(0, 1);
		var car2 = value.substring(lastpos, lastpos+1);
		if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) perfect = false;

		// Validate last and next character after "@" (they're not supossed to be special character)
		car1 = value.substring(apos-1, apos);
		car2= value.substring(apos+1, apos+2);
		if ((car_otros.indexOf(car1) != -1) || (car_otros.indexOf(car2) != -1)) perfect = false;

		// Buscar si existe otro simbolo "@" en el campo
		var subcadena = value.substring(apos + 1, 100);
		a2pos = subcadena.indexOf("@");
		spacepos = value.indexOf(" ");
		dotpos = value.lastIndexOf(".");

	//	if (apos < 1 || a2pos != -1 || dotpos - apos < 2 || lastpos - dotpos > 3 || lastpos - dotpos < 2 || spacepos != -1) {
		if (apos < 1 || a2pos != -1 || lastpos - dotpos < 2 || spacepos != -1) perfect = false;
	}

	if (!perfect) 
	{
		return false;
	}

	return true;
}

function trim(s)
{
	while (s.substring(0,1) == ' ')
		s = s.substring(1,s.length);
	while (s.substring(s.length-1,s.length) == ' ')
		s = s.substring(0,s.length-1);
	return s;
}

function hideLogo()
{

	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('BBPLogo').style.visibility = 'hidden';
		document.getElementById('SonyLogo').style.visibility = 'hidden';
	}
	else {
		if (document.layers) { // Netscape 4
		document.BBPLogo.visibility = 'hidden';
		document.SonyLogo.visibility = 'hidden';
		}
		else { // IE 4
			document.all.BBPLogo.style.visibility = 'hidden';
			document.all.SonyLogo.style.visibility = 'hidden';
		}
	}
}
function showLogo()
{

	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById('BBPLogo').style.visibility = 'visible';
	}
	else {
		if (document.layers) { // Netscape 4
		document.BBPLogo.visibility = 'visible';
		}
		else { // IE 4
			document.all.BBPLogo.style.visibility = 'visible';	
		}
	}
}
function checkHome()
{
	var isHome;
	var parametersSent = document.URL.indexOf('externalPuppet');
	
	//alert(parametersSent);
	
	if(parametersSent == -1) {
		isHome = true;
	}
	else {
		isHome = false;
	}
	
	if(isHome) {
		showLogo();
	}
	else {
		hideLogo();
	}
	
}
function gotoAndClose(url)
{
	opener.parent.location.href = url;
	window.close();
}
function weeklySong()
{
	function y2k(number) { return (number < 1000) ? number + 1900 : number; }

	function getWeek(year,month,day) {
		var when = new Date(year,month,day);
		var newYear = new Date(year,0,1);
		var modDay = newYear.getDay();
		if (modDay == 0) modDay=6; else modDay--;
	
		var daynum = ((Date.UTC(y2k(year),when.getMonth(),when.getDate(),0,0,0) -
					 Date.UTC(y2k(year),0,1,0,0,0)) /1000/60/60/24) + 1;
	
		if (modDay < 4 ) {
			var weeknum = Math.floor((daynum+modDay-1)/7)+1;
		}
		else {
			var weeknum = Math.floor((daynum+modDay-1)/7);
			if (weeknum == 0) {
				year--;
				var prevNewYear = new Date(year,0,1);
				var prevmodDay = prevNewYear.getDay();
				if (prevmodDay == 0) prevmodDay = 6; else prevmodDay--;
				if (prevmodDay < 4) weeknum = 53; else weeknum = 52;
			}
		}
	
		return + weeknum;
	}
	
	var now = new Date();

	currentWeek = (getWeek(y2k(now.getYear()),now.getMonth(),now.getDate()))%10;	
		
	var songTitle, songURL, songImage;
	
	switch(currentWeek)
	{
		case 0: songTitle = "Curve of the World";
				songImage = "curve_of_the_world.jpg"
				songURL = "song01_ra.html"
			break;
		case 1: songTitle = "Try to Touch the Sky";
				songImage = "try_to_touch.jpg"
				songURL = "song02_ra.html"
			break;
		case 2: songTitle = "We&#39;ll Still Be Friends";
				songImage = "well_still_be_friends.jpg"
				songURL = "song03_ra.html"
			break;
		case 3: songTitle = "Heartbeat";
				songImage = "heartbeat.jpg"
				songURL = "song04_ra.html"
			break;
		case 4: songTitle = "Moon Greeting Song";
				songImage = "moon_greeting_song.jpg"
				songURL = "song05_ra.html"
			break;
		case 5: songTitle = "Do the Monkey";
				songImage = "do_the_monkey.jpg"
				songURL = "song06_ra.html"
			break;
		case 6: songTitle = "Happy Birthday";
				songImage = "happy_birthday.jpg"
				songURL = "song07_ra.html"
			break;
		case 7: songTitle = "It&#39;s a Big Big World";
				songImage = "happy_birthday.jpg"
				songURL = "song08_ra.html"
			break;
		case 8: songTitle = "Land of Discovery";
				songImage = "land_of_discoveries.jpg"
				songURL = "song09_ra.html"
			break;
		case 9: songTitle = "Conga Line";
				songImage = "conga.jpg"
				songURL = "song10_ra.html"
			break;			
	}
	
	currentSong = "<img src='music/images/sotw/" + songImage + "' alt='" + songTitle + "' width='274' height='116' /><br /><img src='/PBS-Kids-2006/bigbigworld/music/images/star.gif' width='15' height='15' /> <a href='music/" 
					+ songURL  + "' class='textGreen'>" + songTitle + "</a> <img src='/PBS-Kids-2006/bigbigworld/music/images/star.gif' width='15' height='15' />";
					
	return currentSong;
}
//-->

}
