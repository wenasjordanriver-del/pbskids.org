// resize fix for ns4
var origWidth, origHeight;
if (document.layers) {
        origWidth = window.innerWidth; origHeight = window.innerHeight;
        window.onresize = function() { if (window.innerWidth != origWidth || window.innerHeight != origHeight) history.go(0); }
}


function getElemRefs(id) {
        var el = (document.getElementById)? document.getElementById(id): (document.all)? document.all[id]: (document.layers)? getLyrRef(id,document): null;
        if (el) el.css = (el.style)? el.style: el;
        return el;
}



// dhtmllib.js Mike Hall  www.brainjar.com
function getLyrRef(lyr,doc) {
        if (document.layers) {
                var theLyr;
                for (var i=0; i<doc.layers.length; i++) {
                theLyr = doc.layers[i];
                        if (theLyr.name == lyr) return theLyr;
                        else if (theLyr.document.layers.length > 0)
                if ((theLyr = getLyrRef(lyr,theLyr.document)) != null)
                                        return theLyr;
          }
                return null;
  }
}

var current_visible_id;

function rolloverdiv(arg) {
        if (current_visible_id) {
                var oldbox = getElemRefs(current_visible_id);
                if (oldbox.css) {
                        oldbox.css.visibility = "hidden";
                }
        }
        var newbox = getElemRefs(arg);
        if (newbox.css) {
                newbox.css.visibility = "visible";
        }
	current_visible_id = arg;
}

