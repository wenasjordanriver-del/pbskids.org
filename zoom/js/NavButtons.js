var HomeNavButtons = new Object();
function LoadHomeNav() {
	HomeNavButtons.pbskidsnav = MakeButton("pbskidsnav",'nav',"/PBS-Kids-2006/zoom/images/nav/homepage/pbskids_boy.gif","/PBS-Kids-2006/zoom/images/nav/homepage/pbskids_girl.gif",75,130);
	HomeNavButtons.activitiesnav = MakeButton("activitiesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/homepage/activities_off.gif","/PBS-Kids-2006/zoom/images/nav/homepage/activities_over.gif",145,42);
	HomeNavButtons.fromyounav = MakeButton("fromyounav",'nav',"/PBS-Kids-2006/zoom/images/nav/homepage/fromyou_off.gif","/PBS-Kids-2006/zoom/images/nav/homepage/fromyou_over.gif",68,73);
	HomeNavButtons.castnav = MakeButton("castnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/cast_off.gif","/PBS-Kids-2006/zoom/images/nav/common/cast_over.gif",70,42);
	HomeNavButtons.gamesnav = MakeButton("gamesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/games_off.gif","/PBS-Kids-2006/zoom/images/nav/common/games_over.gif",82,31);
	HomeNavButtons.shownav = MakeButton("shownav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/scenes_off.gif","/PBS-Kids-2006/zoom/images/nav/common/scenes_over.gif",110,42);
	HomeNavButtons.printablesnav = MakeButton("printablesnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/printables_off.gif","/PBS-Kids-2006/zoom/images/nav/common/printables_over.gif",98,31);
	HomeNavButtons.grownupsnav = MakeButton("grownupsnav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/grownups_off.gif","/PBS-Kids-2006/zoom/images/nav/common/grownups_over.gif",95,36);
	HomeNavButtons.arrownav = MakeButton("arrownav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/sendit_off.gif","/PBS-Kids-2006/zoom/images/nav/common/sendit_over.gif",65,75);
	HomeNavButtons.envelopenav = MakeButton("envelopenav",'nav',"/PBS-Kids-2006/zoom/images/nav/common/sendit_off.gif","/PBS-Kids-2006/zoom/images/nav/common/sendit_over.gif",65,75);
}

//db : dummy function because body onload calls this
var PageButtons = new Object();
function LoadPage() {
}
	PageButtons.tv = MakeButton('tv','today','/PBS-Kids-2006/zoom/images/homepage/toz_hdr_off.gif','/PBS-Kids-2006/zoom/images/homepage/toz_hdr_over.gif',90,105);
}

//db : call to initialize (instead of onload)
LoadHomeNav();
LoadPage();
