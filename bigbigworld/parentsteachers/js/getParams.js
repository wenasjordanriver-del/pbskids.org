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

	var str = window.location.search;
	var paramsAlpha = str.substr(1).split('&');
	var params = new Array();
	var newQuery = "";
	for(i=0; i < paramsAlpha.length; i++)
	{
		tempParam = paramsAlpha[i].split('=');
		params[tempParam[0]] = tempParam[1];
	}
	if(params['externalPuppet'] == "smooch" && params['action'] == "mail")
	{
		if(params['externalPuppet'])
			externalPuppet = params['externalPuppet'];
		else
			externalPuppet = "smooch";
		if(params['externalAddRoom'])
			externalAddRoom  = params['externalAddRoom'];
		else
			externalAddRoom = "none";
		if(params['action'])
			action = params['action'];
		else
			action = "mail";
		if(params['bs'])
			bs = params['bs'];
		else
			bs = "";
		if(params['sc'])
			sc = params['sc'];
		else
			sc = "";
		if(params['sq'])
			sq = params['sq'];
		else
			sq = "";
		if(params['myusername'])
			myusername = params['myusername'];
		else
			myusername = "";
		if(params['mydomain'])
			mydomain = params['mydomain'];
		else
			mydomain = "";
		if(params['friendusername'])
			friendusername = params['friendusername'];
		else
			friendusername = "";
		if(params['frienddomain'])
			frienddomain = params['frienddomain'];
		else
			frienddomain = "";
		if(params['message'])
			message = params['message'];
		else
			message = "";
		newQuery = "externalPuppet=" + externalPuppet + "&externalAddRoom=" + externalAddRoom + "&action=" + action + "&bs=" + bs + "&sc=" + sc + "&sq=" + sq + "&myusername=" + myusername + "&mydomain=" + mydomain + "&friendusername=" + friendusername + "&frienddomain=" + frienddomain + "&message=" + message ;
	}
	else
	{
		if(params['share_variables'])
		{
			var share_variables = params['share_variables'];
			newQuery = unescape(share_variables);
			if(params['share_message'])
				message = params['share_message'];
			else
				message= "";
			if(params['share_myfirst'])
				fromname = params['share_myfirst'];
			else
				fromname = "";
			if(params['share_friendfirst'])
				toname = params['share_friendfirst'];
			else
				toname = "";
			newQuery = newQuery +  "&message=" + message+ "&fromname=" + fromname+ "&toname=" + toname;
		}
		else
		{
			if(params['externalPuppet'])
				externalPuppet = params['externalPuppet'];
			else
				externalPuppet = "snook";
			if(params['externalAddRoom'])
				externalAddRoom  = params['externalAddRoom'];
			else
				externalAddRoom = "intro";
			if(params['action'])
				action = params['action'];
			else
				action = "home";
			if(params['step1'])
				step1 = params['step1'];
			else
				step1 = "1";
			if(params['step2'])
				step2 = params['step2'];
			else
				step2 = "2";
			if(params['step3'])
				step3 = params['step3'];
			else
				step3 = "3";
			if(params['step4'])
				step4 = params['step4'];
			else
				step4 = "4";
			if(params['step5'])
				step5 = params['step5'];
			else
				step5 = "5";
			if(params['step6'])
				step6 = params['step6'];
			else
				step6 = "6";
			if(params['bgSound'])
				bgSound = params['bgSound'];
			else
				bgSound= "1";
			newQuery = "externalPuppet=" + externalPuppet + "&externalAddRoom=" + externalAddRoom + "&action=" + action + "&step1=" + step1 + "&step2=" + step2 + "&step3=" + step3 + "&step4=" + step4 + "&step5=" + step5 + "&step6=" + step6 + "&bgSound=" + bgSound;
		}
	}

//-->

}
