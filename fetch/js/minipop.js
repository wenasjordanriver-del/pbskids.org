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
