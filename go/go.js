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

<!-- Hide from older browsers

var minibox_off = new Image();
minibox_off.src = "/PBS-Kids-2006/images/home-minibox-off.gif";
var minibox_on = new Image();
minibox_on.src = "/PBS-Kids-2006/images/home-minibox-on.gif";

var preschool_off = new Image();
preschool_off.src = "/PBS-Kids-2006/images/home-preschool-off.gif";
var preschool_on = new Image();
preschool_on.src = "/PBS-Kids-2006/images/home-preschool-on.gif";

var figuredog_off = new Image();
figuredog_off.src = "/PBS-Kids-2006/images/figure-dog-off.gif";
var figuredog_on = new Image();
figuredog_on.src = "/PBS-Kids-2006/images/figure-dog-on.gif";

function activate(imgName) {
  if ( eval(imgName + "_on.complete") ) {
    document.images[imgName].src = eval(imgName + "_on.src");
  }
}

function deactivate(imgName) {
  if ( eval(imgName + "_off.complete") ) {
    document.images[imgName].src = eval(imgName + "_off.src");
  }
}

// End script hiding -->
