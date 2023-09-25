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

// Remember to preload the images for the home page and for the nav

var PathRoot=document.location.href.substr(0, document.location.href.indexOf('buster'));
PathRoot+="buster/";


// just local:
//var PathRoot=document.location.href.substr(0, document.location.href.indexOf('web'));
//PathRoot+="web/";



function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src =  PathRoot + "images/" + arg;
		return rslt;
	}
}

preloadFlag=false;

function preloadsong() {
premsongs=newImage("songs/songs_more_over.gif");
}

function preloadrec() {
premrecipes=newImage("recipes/recipes_more_over.gif");
}

function preloadvid() {
premvideo=newImage("videos/videos_more_over.gif");
}


function preloadgames() {
premgames=newImage("games/games_more_over.gif");

prewbplay=newImage("games/wheresbuster/play_btn_over.gif");
precsplay=newImage("games/connectthestates/play_blue_over.gif");
preclose=newImage("games/wheresbuster/close_btn_over.gif");

precsplay=newImage("games/dreamon/play_red_over.gif");

// Added by MM for Coast to Coast 
preccplay=newImage("games/coasttocoast/play_button_over.gif");
}

function preloadnav() {
if(document.images) {
preblog=newImage("nav/myblog_over.gif");
pregames=newImage("nav/games_over.gif");
presongs=newImage("nav/songs_over.gif");
prevideo=newImage("nav/video_over.gif");
presearch=newImage("nav/search_over.gif");
prerecipes=newImage("nav/recipes_over.gif");
preparents=newImage("nav/parentsteachers_over.gif");
prebuster=newImage("nav/buster_over.gif");
}
preloadFlag = true;
}

function preloadblog() {
prelisten=newImage("blogs/listen_over.gif");
preplay=newImage("blogs/play_over.gif");
preabout=newImage("blogs/aboutmytravels_over.gif");
precook=newImage("blogs/cook_over.gif");
prewatch=newImage("blogs/watch_over.gif");
}

function preloadhome() {
prehblog=newImage("home/myblog_over.gif");
prehgames=newImage("home/games_over.gif");
prehsongs=newImage("home/songs_over.gif");
prehvideo=newImage("home/video_over.gif");
prehsearch=newImage("home/search_over.gif");
prehrecipes=newImage("home/recipes_over.gif");
prehparents=newImage("home/parents_over.gif");
prehbuster=newImage("home/blogmore_over.gif");
}

preloadnav();

//alert(PathRoot);

function roli(id) {
// roll in
	if(document.images && (preloadFlag == true)) {
		document.images[id].src = PathRoot + 'images/nav/' + id + '_over.gif';
	}
}

function rolo(id) {
// roll out
	if(document.images && (preloadFlag == true)) {
		document.images[id].src = PathRoot + 'images/nav/' + id + '_out.gif';
	}
}

/** added by dbulli **/
function rolpathi(id,subpath) {
// roll in
	if(document.images) {
		document.images[id].src = PathRoot + 'images/' + subpath + '/' + id + '_over.gif';
	}
}

function rolpatho(id,subpath) {
// roll out
	if(document.images) {
		document.images[id].src = PathRoot + 'images/' + subpath + '/' + id + '_out.gif';
	}
}

function rolihome(id) {
// roll in
	if(document.images) {
		document.images[id].src = PathRoot + 'images/home/' + id + '_over.gif';
	}
}

function rolohome(id) {
// roll out
	if(document.images) {
		document.images[id].src = PathRoot + 'images/home/' + id + '_out.gif';
	}
}

function rolipath(path,id) {
// roll in
	if(document.images) {
		document.images[id].src = PathRoot + 'images/' + path + id + '_over.gif';

	}
}

function rolopath(path,id) {
// roll out
	if(document.images) {
		document.images[id].src = PathRoot + 'images/' + path  + id + '_out.gif';
	}
}


function popmap(location) {
    var newWind = window.open(PathRoot + 'blog/map/' + location,'map','scrollbars=no,statusbar=no,toolbar=no,menubar=no,locationbar=no,width=480,height=430,dependent=yes');
    if (newWind) newWind.focus();
    return true;
}

function gamepop() {
    var newWind = window.open(PathRoot + 'games/wheresbuster/abbrevs.html','help','scrollbars=yes,statusbar=no,toolbar=no,menubar=no,locationbar=no,width=205,height=505,dependent=yes');
    if (newWind) newWind.focus();
    return true;
}


// make sure they entered something in the poll
function checkValues() {	
	var p = document.poll;
	var voted = false;
	for (var i=0; i<p.q1.length; i++) { if (p.q1[i].checked) { voted = true; }}
	if (!voted) { alert("Please vote!"); return false; }
	return true;
}


// PBS Survey Code   
/*
function pbs_set_cookieval(cookname, val, expirationdate) {
  var cookieval = cookname + '=' + escape(val) + '; path=/';
  if (expirationdate)  {
    var date = new Date(expirationdate);
    cookieval = cookieval + '; expires=' + date.toGMTString();
  }
  document.cookie = cookieval;
}

function pbs_get_cookieval(cookname) {
  var search = cookname + '=';
  if (document.cookie.length > 0) {
    var offset = document.cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      var end = document.cookie.indexOf(';', offset);
      if (end == -1) { end = document.cookie.length; }
      return unescape(document.cookie.substring(offset, end));
    }
    else { return null; }
  }
  return null;
}

function pbsprivate_open_survey(inviteurl, cookiename, frequency) {
  var take = false;
  var surveyflag = pbs_get_cookieval(cookiename);
  if (surveyflag != '1') {
    var myrand = Math.random() * 100;
    pbs_set_cookieval(cookiename, '1');
    if (myrand <= frequency) { take = true; }
  }
  if (take) { location.href = inviteurl; }
  else { return false; }
}

pbsprivate_open_survey('/survey/200510/?return='+window.location.pathname, 'pbsol.survey.2005', 10);
*/

}
