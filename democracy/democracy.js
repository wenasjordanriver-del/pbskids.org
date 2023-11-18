<!-- Hide from older browsers

var presday_off = new Image();
presday_off.src = "/PBS-Kids-2006/democracy/images/home-menu-presday-off.gif";
var presday_on = new Image();
presday_on.src = "/PBS-Kids-2006/democracy/images/home-menu-presday-on.gif";

var government_off = new Image();
government_off.src = "/PBS-Kids-2006/democracy/images/home-menu-government-off.gif";
var government_on = new Image();
government_on.src = "/PBS-Kids-2006/democracy/images/home-menu-government-on.gif";

var voting_off = new Image();
voting_off.src = "/PBS-Kids-2006/democracy/images/home-menu-voting-off.gif";
var voting_on = new Image();
voting_on.src = "/PBS-Kids-2006/democracy/images/home-menu-voting-on.gif";

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
