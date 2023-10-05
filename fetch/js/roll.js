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

function Swapper(elem) { 
//Do not delete these comments. 
//Non-Obtrusive Image Swap Script V1.1 by Hesido.com 
//Attribution required on all accounts 

 if (typeof(elem) == 'string') elem = document.getElementById(elem);
    if (elem == null) return; // I guess this bails if can't do getElementById

    var regex = /(.*)(_off\.)([^\.]{3,4})$/
    var prel = new Array(), img, imgList, imgsrc, mtchd; 

//

    imgList = document.getElementsByTagName('img'); 
    for (var i=0; img = imgList[i]; i++) { 

        if (!img.rolloverSet && img.src.match(regex)) { 
            mtchd = img.src.match(regex); 
   	       img.overimg = mtchd[1]+'_on.'+ mtchd[3]; 
 			img.offimg = img.src; 
            if (typeof(mouseOver) != 'undefined') { 
                img.overimg = (mouseOver) ? mtchd[1]+'_on.'+ mtchd[3] : false; 
                img.offimg = (mouseOut) ? mtchd[1]+'_off.'+ mtchd[3] : (mouseOver && mouseOutRestore) ? img.src : false; 
                } 
            if (img.overimg) {preLoadImg(img.overimg); img.onmouseover = imgRollover;} 
            if (img.offimg) {preLoadImg(img.offimg); img.onmouseout = imgRollout;} 
            img.rolloverSet = true; 
        } 
    } 
    function preLoadImg(imgSrc) { 
        prel[prel.length] = new Image(); prel[prel.length-1].src = imgSrc; 
    } 


}



function imgRollover() {this.src = this.overimg;} 
function imgRollout() {this.src = this.offimg;} 



/*function toggleScores() {
// this is only used in the MyShow pages, but I'm lazy so I'm going to add it to this.
	changedoc=document.getElementById('triumph');
	togglelink=document.getElementById('triumphlink');
	if (changedoc.style.display=="block") {
		changedoc.style.display="none";
		togglelink.innerHTML="Show Scores";
	} else {
		changedoc.style.display="block";
		togglelink.innerHTML="Hide Scores";
	}
}
*/

function checkmess(form) {
	if (form.email_body && form.email_body.value=="") {
		alert("Don't forget to type your message!");
	return false;
	}
return true;
}


function goback() {
	history.back();
	return false;
}



function changescore(score,replace) {
	if (document.getElementById('uscore')) {
		uscorediv=document.getElementById('uscore');
		if (replace==1) {
			uscorediv.innerHTML=score;
		} else {
			var oldscore=parseInt(uscorediv.innerHTML);
			uscorediv.innerHTML=oldscore + parseInt(score);
		}
	}
}

}
/*
     FILE ARCHIVED ON 02:50:14 Jul 04, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:26:28 Oct 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 94.773
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.055
  cdx.remote: 0.054
  esindex: 0.01
  LoadShardBlock: 61.136 (3)
  PetaboxLoader3.datanode: 161.438 (4)
  load_resource: 183.298
  PetaboxLoader3.resolve: 60.062
*/