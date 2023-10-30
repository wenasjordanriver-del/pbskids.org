var NavButtons = new Object();

// calling this so that the popup printables can point to this window when going back to the main site
window.name="main";

//LoadNav();
function LoadNav() {
	NavButtons.pbskidsnav = MakeButton("pbskidsnav",'nav',"/PBS-Kids-2006/zoom/images/nav/subpage/pbskids_boy.gif","/PBS-Kids-2006/zoom/images/nav/subpage/pbskids_gril.gif",75,130);
	NavButtons.zoomlogonav = MakeButton("zoomlogonav",'nav',"/PBS-Kids-2006/zoom/images/nav/subpage/zoomlogo_off.gif","/PBS-Kids-2006/zoom/images/nav/subpage/zoomlogo_over.gif",145,65);
	NavButtons.activitiesnav = MakeButton("activitiesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/subpage/activities_of.gif","/PBS-Kids-2006/zoom/images/nav/subpage/activities_over.gif",145,65);
	NavButtons.fromyounav = MakeButton("fromyounav",'nav',"/PBS-Kids-2006/zoom/images/nav/subpage/fromyou_of.gif","/PBS-Kids-2006/zoom/images/nav/subpage/fromyou_over.gif",68,73);
	NavButtons.castnav = MakeButton("castnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/cast_off.gif","/PBS-Kids-2006/zoom/images/nav/common/cast_over.gif",70,42);
	NavButtons.gamesnav = MakeButton("gamesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/games_off.gif","/PBS-Kids-2006/zoom/images/nav/common/games_over.gif",82,31);
	NavButtons.shownav = MakeButton("shownav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/scenes_off.gif","/PBS-Kids-2006/zoom/images/nav/common/scenes_over.gif",110,42);
	NavButtons.printablesnav = MakeButton("printablesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/printables_off.gif","/PBS-Kids-2006/zoom/images/nav/common/printables_over.gif",98,31);
	NavButtons.grownupsnav = MakeButton("grownupsnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/grownups_off.gif","/PBS-Kids-2006/zoom/images/nav/common/grownups_over.gif",95,36);
	NavButtons.arrownav = MakeButton("arrownav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/sendit_off.gif","/PBS-Kids-2006/zoom/images/nav/common/sendit_over.gif",65,75);
	NavButtons.envelopenav = MakeButton("envelopenav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/sendit_off.gif","/PBS-Kids-2006/zoom/images/nav/common/sendit_over.gif",65,75);
}

LoadNav();



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
