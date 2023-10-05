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

function MD_random(r1, r2) {
  if (r2 > r1) return (Math.round(Math.random()*(r2-r1))+r1);
  else return (Math.round(Math.random()*(r1-r2))+r2);
}

function MomentWithRuff() {
	mwr = MD_random(0,19);
	mwr_link = "moments/" + mwr + ".html"
    if (window.screen) {
        var myX = Math.round(Math.random()*(screen.availWidth-350)) + 25;
        var myY = Math.round(Math.random()*(screen.availHeight-350)) + 25;
    }
    var newWind = window.open(mwr_link,'mwr','scrollbars=no,statusbar=no,toolbar=no,menubar=no,locationbar=no,width=400,height=300,dependent=yes,screenx='+myX+',screeny='+myY+',left='+myX+',top='+myY);
    if (newWind) newWind.focus();
    return false;
}

}
/*
     FILE ARCHIVED ON 02:37:28 Sep 04, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:26:28 Oct 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 67.912
  exclusion.robots: 0.184
  exclusion.robots.policy: 0.164
  cdx.remote: 0.127
  esindex: 0.019
  LoadShardBlock: 37.369 (3)
  PetaboxLoader3.datanode: 82.035 (4)
  load_resource: 86.186
  PetaboxLoader3.resolve: 30.474
*/