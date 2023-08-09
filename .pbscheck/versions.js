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

  var cookiename = "pbsol.kids.accessibility";
  var frequency = 1;
  var expirationdate = "December 31, 2006";
  
  // Flash Version Detector  v1.1.5
  // http://www.dithered.com/javascript/flash_detect/index.html
  
  var flashVersion = 0;

  function getFlashVersion() {
  	var agent = navigator.userAgent.toLowerCase(); 
  
  	// NS3 needs flashVersion to be a local variable
  	if (agent.indexOf("mozilla/3") != -1 && agent.indexOf("msie") == -1) {
  		flashVersion = 0;
  	}
     
  	// NS3+, Opera3+, IE5+ Mac (support plugin array):  check for Flash plugin in plugin array
  	if (navigator.plugins != null && navigator.plugins.length > 0) {
  		var flashPlugin = navigator.plugins['Shockwave Flash'];
  		if (typeof flashPlugin == 'object') { 
  			if (flashPlugin.description.indexOf('8.') != -1) flashVersion = 8;
  			else if (flashPlugin.description.indexOf('7.') != -1) flashVersion = 7;
  			else if (flashPlugin.description.indexOf('6.') != -1) flashVersion = 6;
  			else if (flashPlugin.description.indexOf('5.') != -1) flashVersion = 5;
  			else if (flashPlugin.description.indexOf('4.') != -1) flashVersion = 4;
  			else if (flashPlugin.description.indexOf('3.') != -1) flashVersion = 3;
  		}
  	}
  	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
  	else if (agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1) {
  		document.write('<scr' + 'ipt language="VBScript"\> \n');
  		document.write('on error resume next \n');
  		document.write('dim obFlash \n');
  		document.write('set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.8") \n');
  		document.write('if IsObject(obFlash) then \n');
  		document.write('flashVersion = 8 \n');
  		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.7") end if \n');
  		document.write('if flashVersion < 8 and IsObject(obFlash) then \n');
  		document.write('flashVersion = 7 \n');
  		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.6") end if \n');
  		document.write('if flashVersion < 7 and IsObject(obFlash) then \n');
  		document.write('flashVersion = 6 \n');
  		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.5") end if \n');
  		document.write('if flashVersion < 6 and IsObject(obFlash) then \n');
  		document.write('flashVersion = 5 \n');
  		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.4") end if \n');
  		document.write('if flashVersion < 5 and IsObject(obFlash) then \n');
  		document.write('flashVersion = 4 \n');
  		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.3") end if \n');
  		document.write('if flashVersion < 4 and IsObject(obFlash) then \n');
  		document.write('flashVersion = 3 \n');
  		document.write('end if');
  		document.write('</scr' + 'ipt\> \n');
  	}
  	// WebTV 2.5 supports flash 3
  	else if (agent.indexOf("webtv/2.5") != -1) flashVersion = 3;
  	// older WebTV supports flash 2
  	else if (agent.indexOf("webtv") != -1) flashVersion = 2;
  	// Can't detect in all other cases
  	else {
  		flashVersion = flashVersion_DONTKNOW;
  	}
  	return flashVersion;
  }
  
  flashVersion_DONTKNOW = -1;


  function pbsprivate_set_cookieval(cookname, val) {
    var date = new Date(expirationdate);
    var expires = date.toGMTString();
    document.cookie = cookname + "=" + val + "; path=/; expires=" + expires;
  }

  function pbsprivate_check_cookieval(cookname) {
    var search = cookname + "=";
    if (document.cookie.length > 0) { // if there are any cookies
      var offset = document.cookie.indexOf(search);
      if (offset != -1) { // if cookie exists 
        offset += search.length;
        // set index of beginning of value
        var end = document.cookie.indexOf(";", offset);
        // set index of end of cookie value
        if (end == -1) end = document.cookie.length;
        var value = parseInt(unescape(document.cookie.substring(offset, end)));
        if(isNaN(value)) {
          return 0;
        } else {
          return value;
        }
      } 
    }
    return 0;
  }

  function pbsprivate_versions() {
  
    // Check to see if they've already been tested
    var flag = pbsprivate_check_cookieval(cookiename);
    if(flag != 0) return false;
    
    var myrand = Math.round(Math.random() * 100 * frequency);
    pbsprivate_set_cookieval(cookiename, myrand);

    if ( (myrand < 100) ) {
       // flash
       var flashVersion = getFlashVersion();
    
       // Write out detected flash version here.
       if (flashVersion == 8) {
         document.write("<img src='/kids/flash/8/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == 7)  {
         document.write("<img src='/kids/flash/7/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == 6) {
         document.write("<img src='/kids/flash/6/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == 5) {
         document.write("<img src='/kids/flash/5/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == 4) {
         document.write("<img src='/kids/flash/4/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion > 0) {
         document.write("<img src='/kids/flash/Old/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == 0) {
         document.write("<img src='/kids/flash/NotInstalled/redir/http://www.pbs.org/images/blank.gif'>");
       }
       else if (flashVersion == flashVersion_DONTKNOW || flashVersion == null) {
         document.write("<img src='/kids/flash/DontKnow/redir/http://www.pbs.org/images/blank.gif'>");
       }
        
      document.write("<br/>\n");
      document.write("<img src='/kids/screen/" + screen.width + "_" + screen.height + "/redir/http://www.pbs.org/images/blank.gif'>");
    }
    return false;   
  }
  
  


}
/*
