/**
* Interactive Game Javascript API
* Version 1.2
* Copyright Ragdoll Ltd.
*
* This API provides javascript developers with a framework for building interactive
* web-based games, we have taken the following core functionality which we have found
* ourselves using (a lot!) and placed them into this framework:
*
*	- Image preloading & swapping
*	- Sound embedding & playing
*	- Event consumption
*	- Delayed function invokation
*
* Using these functions you will be able to create basic interactive games which 
* allow some level of event synchronisation and handling, for example by using the
* block() function you can prevent any events from affecting the state of the
* game.
*
* Using preloadImage or preloadImageSequence takes care of loading and storing
* your images, this allows you to simply call the swapImage function to change the
* source of an image.
*
* The embedSound function is provided for IE browsers at the moment, in the future
* this will generate suitable tags for embedding audio in other browsers as well.  Once
* you have embedded the sound you can play it using the playSound function, this works
* if the sound was embedded else it will simply not attempt to play the sound.
*
* Support is provided for the timeout core function in the provision of the delayInvoke
* function, this provides a better framework for invoking functions after some time
* period.
*
* Finally we provide support for consuming events, we required this because there are
* times when you want to prevent mouse clicks from having any effect on the state of the
* game.  In order to make use of this you make sure all events are handled by the process
* function, you can pass this a single string like:
*
*	process('callThisFunction()', null);
*
* Which will call the function indirectly, alternativly you can use:
*
*	process('callThisFunction', new Array('arg1', 'arg2', 34, false));
*
* Which allows you to easily pass arguments into the function without the hassle of escaping
* quotes and the like (note nested arrays are not supported).
*
* The process function will indirectly call your function unless you have called
* the block() function, you call it like this:
*
*	block(1000, "someOtherFunction()");
*
* This will cause all events to be consumed for a second and then the someOtherFunction
* function will be called, you can optionally provide null, in any case the events will
* start to be consumed again after this time delay.
*
* Note that at this stage we don't choose to work with any browser specific event model
* since this requires more work and is possibly not required, however this framework will
* allow for this if it is required.
*
* Toby (toby@hc2.co.uk)
* 22-03-04
*
* Addendum 1 - Netscape 4.8
* onClick doesn't seem to work so use a link tag instead
* had to remove the instanceof operator, replaced with inferior logic
*
* Addendum 2 - Compatibility Scripts
* support has now been added for external compatibility scripts
* to make sure the game degrades gracefully we redirect the window on a bad browser
*
* Addendum 3 - Error Checking
* all functions now contain checks for valid arguments, a few bits of altered logic
* also provide a better handling for unknown images
*
* Addendum 4 - Hotspots
* interactive areas are now abstracted away from the embedded html code, developers
* should use the buildHotspot() function to build an interactive hotspot suitable
* for all browsers
*
* Addendum 5 - Image Preloading
* preloading functions are now modular to allow for pages to easily preload gui images
* and redirect to game, we use the replace() function rather than redirect
*
* Addendum 6 - Resources
* most games require resources to work so we've added support for representing resources,
* a resource file contains lots of entries to resources, the file itself is just an enumeration
* of the resources.  we can then load the file which will place these elements into an 
* internal array which we can then access.
*
* Addendum 7 - Sounds
* the playSound() function now evaluates IE only code inside a try-catch block to deal with 
* [object error] problems, there is ample code now to try and detect installed ActiveX objects
* and then to use the first object we come across.  All ActiveX ProgIDs/ClassIDs & Javascript
* functions are held in the activeXControls.js resource file.
*/

//internal state variables
var explorer = null;
var netscape = null;
var opera = null;
var mozilla = null;
var windows = null;
var mac = null;

//internal array used to store images
var imgArray = new Array();

//array of resources
var resources = new Array();

//used to control event consumption
var consume = false;

//used to flag that we have called init
var calledInit = false;

//set when the document has loaded
var documentReady = false;

//used when an image can't be found
var unkownImage = "../../images/notfound.gif";

//used to detect how many images have been preloaded
var imagePreloadCounter = 0;

//used to store preload redirect
var preloadRedirect = null;

//prodid of the media player we are using
var audioPlayer = null;

//clsid of the media player we are using
var audioPlayerClsID = null;

//progid of the media player we are using
var audioPlayerProgID = null;

//id of the control array to use
var audioPlayerControlIndex = null;

//list of compatible browser versions
var minIEVersion = 99;
var minNetscapeVersion = 99;
var minOperaVersion = 99;
var minMozillaVersion = 99;
var minUnknownVersion = 99;

//constants
var EXPLORER = "IE";
var NETSCAPE = "Netscape";
var OPERA = "Opera";
var MOZILLA = "Mozilla";
var UNKNOWN = "Unknown";
var WINDOWS = "Windows";
var MAC = "AppleMac";

/**
* Setup internal state to provide other functions with
* information about current browser.
*/
function initInternalState()
{
	if(!calledInit)
	{
		//detect os type
		windows = window.ActiveXObject && navigator.userAgent.indexOf('Windows') != -1;
		mac = navigator.platform == "MacPPC";
		
		//detect browser type
		if(navigator.appName != null)
		{
			explorer = navigator.appName.toLowerCase().indexOf("explorer") != -1;
			netscape = navigator.appName.toLowerCase().indexOf("netscape") != -1;
			opera = navigator.appName.toLowerCase().indexOf("opera") != -1;
			mozilla = navigator.appName.toLowerCase().indexOf("mozilla") != -1;
		}
		
		calledInit = true;
	}
}

/**
* Once we are told that the document has loaded we can be sure that all the sounds
* (if any) have been downloaded and are ready to be played.
*/
function documentLoaded(callBack)
{
	//alert("documentLoaded called");

	documentReady = true;
	if(callBack != null)
	{
		eval(callBack);
	}
}

/**
* Redirect the call the preload function through a compatibility check, if
* the current browser isn't supported then don't preload and prevent
* and functions from being called.
*
* TODO - Make redirect a settable value
*/
function compatCheck(fnName)
{
	if(isCompatibleBrowser())
	{
		invoke(fnName, null);
	}
	else
	{
		//do nothing for the mo
		//window.location.replace("../../incompat.html");
	}
}

/**
* Print HTML list of compatible browsers with this game
*/
function printCompatibilityList()
{
	document.write("<table>");
	
	document.write("<tr>");
	document.write("<td><b>Browser</b></td>");
	document.write("<td><b>Version</b></td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td>Internet Explorer</td>");
	document.write("<td>" + minIEVersion + "</td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td>Netscape Navigator</td>");
	document.write("<td>" + minNetscapeVersion + "</td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td>Opera</td>");
	document.write("<td>" + minOperaVersion + "</td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td>Mozilla</td>");
	document.write("<td>" + minMozillaVersion + "</td>");
	document.write("</tr>");
	
	document.write("</table>");
	
	document.write("<br />");
	
	document.write("You are currently viewing this page with " + getBrowserName() + ", version " + getBrowserVersion());
}

/**
* Setup the minimum browser versions compatible with this game
*/
function setMinimumRequiredBrowserVersion(name, version)
{
	var exe = "min" + name + "Version = " + version + ";";
	eval(exe);
}

/**
* Return true if this is a compatible browser
*/
function isCompatibleBrowser()
{
	var minVersion = getMinimumVersion();
	var currentVersion = getBrowserVersion();
	
	//alert(currentVersion + " >= " + minVersion);
	
	return currentVersion >= minVersion;
}

/**
* Get the minimum version for this browser
*/
function getMinimumVersion()
{
	return eval("min" + getBrowserName() + "Version");
}

/**
* Preload an image if possible
*
* TODO - Check Image object exists
* TODO - Add a callback to let us know when the image has loaded
*/
function preloadImage(src, index)
{
	if(src != null && index != null)
	{
		imgArray[index] = new Image();
		imgArray[index].src = src;
	}
	
	//alert("preloadImage called with " + src + " and " + index + ", Image.src = " + imgArray[index].src);
}

/**
* Preload an entire sequence of images
*
* TODO - Check Image object exists
* TODO - Add a callback to let us know when the image has loaded
*/
function preloadImageSequence(rootDir, prefix, postfix, startIndex, endIndex)
{
	if(rootDir != null &&
		prefix != null &&
		postfix != null &&
		startIndex != null &&
		endIndex != null)
	{
		var i = 0;
		for(i=startIndex;i<=endIndex;i++)
		{
			var index = prefix + i;
			imgArray[index] = new Image();
			imgArray[index].src = (rootDir + prefix + i + postfix);
		}
	}
}

/**
*
*/
function getImageSource(index)
{
	if(index != null)
	{
		return imgArray[index].src;
	}
	else
	{
		return unkownImage;	
	}
}

/**
* Return true if browser is IE
*/
function isIE()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return explorer && !netscape && !opera && !mozilla;
}

/**
* Return true is browser is opera
*/
function isOpera()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return !explorer && !netscape && opera && !mozilla;
}

/**
* Return true if browser is netscape
*/
function isNetscape()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return !explorer && netscape && !opera && !mozilla;
}

/**
* Return true if browser is mozilla
*/
function isMozilla()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return !explorer && !netscape && !opera && mozilla;
}

/**
* Return true if os is windows
*/
function isWindows()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return windows && !mac;
}

/**
* Return true if os is mac
*/
function isMac()
{
	if(!calledInit)
	{
		initInternalState();
	}
	return !windows && mac;
}

/**
* Return the global constant for this browser
*/
function getBrowserName()
{
	if(!calledInit)
	{
		initInternalState();
	}
	
	if(isIE())
	{
		return EXPLORER;
	}
	else if(isOpera())
	{
		return OPERA;
	}
	else if(isNetscape())
	{
		return NETSCAPE;
	}
	else if(isMozilla())
	{
		return MOZILLA;
	}
	else
	{
		return UNKNOWN;
	}
}

/**
*
*/
function getOS()
{
	if(!calledInit)
	{
		initInternalState();
	}
	
	if(isWindows())
	{
		return WINDOWS;
	}
	else if(isMac())
	{
		return MAC;
	}
	else
	{
		return UNKNOWN;
	}
}

/**
* Return the current browser version
*/
function getBrowserVersion()
{
	//alert(navigator.appVersion);
	return parseFloat(navigator.appVersion);
}

/**
* Return true if current browser is capable of playing
* sounds, IE only works on Windows for the moment.
*/
function isSoundCapable()
{
	if(isIE())
	{
		return isWindows();
	}
	else if(isOpera())
	{
		return false;
	}
	else if(isNetscape())
	{
		return false;
	}
	else
	{
		return false;
	}
}

/**
* Return true if we were able to load the specified ActiveX Component
*/
function verifyComponentExists(comClassName) 
{
	if(comClassName != null)
	{
		var activeXObject = null;
		var ieSrc = "try";
		ieSrc += "{";
		ieSrc += "activeXObject = new ActiveXObject(comClassName);";
		ieSrc += "}";
		ieSrc += "catch(e)";
		ieSrc += "{";
		ieSrc += "activeXObject = null;";
		ieSrc += "}";
		eval(ieSrc);
		
		return activeXObject != null;
	}
	else
	{
		return false;
	}
}

/**
* Embed a sound into the current page.
*
* TODO - More research into non-IE sound tags
*/
function embedSound(src, name, shouldLoop)
{
	if(isSoundCapable() && src != null && name != null)
	{
		//alert("Embedding sound, IsIE = " + isIE() + ", IsWindows = " + isWindows());
		
		//specific code for IE on Windows since we use ActiveX
		if(isIE() && isWindows())
		{
			var type = "audio/wav";
			var loop = shouldLoop;
			
			var width = 0;
			var height = 0;
			
			//get the number of controls to try
			var controlCount = getNumberOfResources("activeXControls");
			
			//iterate over them
			for(var i=0;i<controlCount;i++)
			{
				var activeXControl = getResource("activeXControls", i);
				var progID = activeXControl[0];
				var clsID = activeXControl[1];
				var appName = activeXControl[2];
				var ctrlIndex = activeXControl[3];
				
				//try to verify the existence of the player
				var playerExists = verifyComponentExists(progID);
				
				if(playerExists && appName != "WindowsMedia")
				{
					audioPlayer = appName;
					audioPlayerClsID = clsID;
					audioPlayerControlIndex = parseInt(ctrlIndex, 10);
					break;
				}
			}
			
			//alert("Found " + audioPlayer + ", ClsID = " + audioPlayerClsID);
			
			//alert("MediaPlayer Exists = " + mediaPlayerExists + ", QuickTime Exists = " + quickTimePlayerExists + ", RealPlayer Exists = " + realPlayerExists);
			
			if(audioPlayer == "WindowsMedia" || audioPlayer == "ActiveMovie")
			{
				document.write('<object id="'+name+'" name="'+name+'" classid="clsid:'+audioPlayerClsID+'" TYPE="application/x-oleobject" width="'+width+'" height="'+height+'">');
				document.write('<param name="transparentatStart" value="true">');
				document.write('<param name="ShowDisplay" value="0">');
				document.write('<param name="ShowControls" value="0">');
				document.write('<param name="ShowStatusBar" value="0">');
				document.write('<param name="AutoStart" value="0">');
				document.write('<param name="AutoRewind" value="-1">');
				document.write('<param name="Volume" value="50">');
				if(loop)
				{
					document.write('<param name="PlayCount" value="999">');
				}
				document.write('<param name="FileName" value="'+src+'">');
				document.write('</object>');
			}
			else if(audioPlayer == "WindowsMedia7+")
			{
				document.write('<object id="'+name+'" name="'+name+'" classid="clsid:'+audioPlayerClsID+'" TYPE="application/x-oleobject" width="'+width+'" height="'+height+'">');
				document.write('<param name="transparentatStart" value="true">');
				document.write('<param name="ShowDisplay" value="0">');
				document.write('<param name="ShowControls" value="0">');
				document.write('<param name="ShowStatusBar" value="0">');
				document.write('<param name="AutoStart" value="0">');
				document.write('<param name="AutoRewind" value="-1">');
				document.write('<param name="Volume" value="50">');
				if(loop)
				{
					document.write('<param name="PlayCount" value="999">');
				}
				document.write('<param name="URL" value="'+src+'">');
				document.write('</object>');
			}
			else if(audioPlayer == "QuickTime")
			{
				document.write('<object id="'+name+'" name="'+name+'" classid="clsid:'+audioPlayerClsID+'" codebase="https://web.archive.org/web/20070207131532/http://www.apple.com/qtactivex/qtplugin.cab" width="'+width+'" height="'+height+'">');
				document.write('<param name="src" value="'+src+'">');
				document.write('<param name="autoplay" value="false">');
				document.write('<param name="controller" value="false">');
				document.write('<PARAM name="LOOP" VALUE="'+loop+'">');
				document.write('<param name="enablejavascript" value="true">');
				document.write('</object>');
			}
			else if(audioPlayer == "RealPlayer")
			{
				document.write('<object id="'+name+'" name="'+name+'" classid="clsid:'+audioPlayerClsID+'" width="'+width+'" height="'+height+'">');
				document.write('<param name="SRC" value="'+src+'">');
				document.write('<param name="CONTROLS" value="none">');
				document.write('<param name="AUTOSTART" value="false">');
				document.write('<param name="NOLABELS" value="true">');
				document.write('<param name="RESET" value="true">');
				document.write('<PARAM name="LOOP" VALUE="'+loop+'">');
				document.write('<param name="CONSOLE" value="'+name+'">');
				document.write('</object>');
			}
		}
	}
}

/**
* Invoke a function after some amount of time.
* 
* Note the args parameter can either be a single variable 
* to pass into the function or an array of variables.
*/
function delayInvoke(fnName, delayMs, args)
{
	if(fnName != null && delayMs != null)
	{
		var fnCall = buildFunctionCall(fnName, args);
		if(fnCall != null)
		{
			window.setTimeout(fnCall, delayMs);
		}
	}
}

/**
* Invoke a function
*
* @see delayInvoke
*/
function invoke(fnName, args)
{
	if(fnName != null)
	{
		var fnCall = buildFunctionCall(fnName, args);
		if(fnCall != null)
		{
			eval(fnCall);
		}
	}
}

/**
* Build up a function call
*
* TODO - Check compatibility of instanceof operator
*	- Not supported by Netscape 4.8, replaced with composite logic statment
* TODO - Add support for nested arrays and objects
*/
function buildFunctionCall(fnName, args)
{
	if(fnName != null)
	{
		var fnCall = fnName + "(";
	
		//Javascript 1.4+ only
		//if(args instanceof Array)
	
		//Javascript 1.0+
		if(args != null &&
			args.length && 
			typeof(args) != "string")
		{
			var i;
			for(i=0;i<args.length;i++)
			{
				var wrappedArg = wrapVariable(args[i]);
				if(i < args.length-1)
				{
					fnCall += wrappedArg + ",";
				}
				else
				{
					fnCall += wrappedArg;
				}
			}
		}
		else
		{
			fnCall += wrapVariable(args);
		}

		fnCall += ")";
		return fnCall;
	}
	else
	{
		return null;
	}
}

/**
* Quote-encase strings
*
* TODO - Check compatibility of typeof() function
*/
function wrapVariable(variable)
{
	if(variable != null)
	{
		var t = typeof(variable);
		if(t == "string")
		{
			return "\"" + variable + "\"";
		}
		else
		{
			return variable;
		}
	}
	else
	{
		return null;
	}
}

/**
* Play a sound, making sure that the browser is capable of doing so
*
* TODO - Add support for non-IE browsers
*/
function playSound(snd)
{
	//alert("playSound() called");
	if(snd != null)
	{
		//alert("isSoundCapable() == " + isSoundCapable() + ", documentReady = " + documentReady);
		
		//check we are using a sound capable browser
		if(isSoundCapable() && documentReady)
		{
			//alert("IsIE = " + isIE() + ", IsWindows = " + isWindows() + ", Using " + audioPlayer);
			
			if(isIE() && isWindows())
			{
				//IE5+
				//var sound = document.getElementById(snd);
				
				//more compatible version
				var sound = eval("document." + snd);
				
				//get the js controls for this activex object
				var playerControls = getResource("playerControls", audioPlayerControlIndex);
				
				//alert(playerControls[0]);

				var ieSrc = "try";
				ieSrc += "{";
				ieSrc += "sound" + playerControls[0];
				ieSrc += "}";
				ieSrc += "catch(e)";
				ieSrc += "{";
				ieSrc += "alert(e.message);";
				ieSrc += "}";
				//alert(ieSrc);
				eval(ieSrc);
			}
		}
	}
}

/**
* Standard code for swapping an image, assumes the existence of
* an array called imgArray which contains image objects
*
* TODO - Check that document.images exists
* TODO - Need to make sure the image exists and has finished loading
*/
function swapImage(target, index)
{
	if(target != null && index != null)
	{
		if(document.images)
		{
			//alert("target = " + target + ", document.images[target] = " + document.images[target] + ", index = " + index + ", imgArray[index] = " + imgArray[index]);
			if(document.images[target] != null &&
				imgArray[index] != null)
			{
				//alert("Swapping image");
				document.images[target].src = imgArray[index].src;
			}
		}
	}
}

/*
* Catch all user input and initiate a delayed callback to unblock,
* make sure you call this before the action you want to take
* place whilst the block is in place
*/
function block(delay, args)
{
	if(delay != null)
	{
		consume = true;
		delayInvoke("unblock", delay, args);
	}
}

/*
* Release the user input, possibly play a sound and initiate
* the next state
*
* TODO - Check compatibility of eval() function
*/
function unblock(callback)
{
	consume = false;
	if(callback != null)
	{
		eval(callback);
	}
}

/**
* All event handlers should be called through this gateway function,
* this will allow the block() function to consume events regardless
* of the browser type.
*
* TODO - Check compatibility of eval() function
* TODO - Add support for checking browser version before processing request
*/
function process(fnName, args)
{
	//alert("processing " + fnName);
	if(fnName != null)
	{
		if(isCompatibleBrowser() && documentReady)
		{
			if(!consume)
			{
				if(arguments != null)
				{
					invoke(fnName, args);
				}
				else
				{
					eval(fnName);
				}
			}
		}
	}
}

/**
* Print out the correct interactive component dependent on the browser
* in question, IE always uses img tags with onClick event handlers whilst
* all others will use a tags with href="javascript:" attribute values.
*/
function buildHotspot(imgObj, fnCall)
{
	if(isIE())
	{
		document.write(buildImage(imgObj, fnCall));
	}
	else
	{
		document.write(buildLink(fnCall, buildImage(imgObj, null)));
	}
}

/**
* Build an HTML a tag with the href executing the function provided and with the
* content provided as a child node.
*/
function buildLink(fnCall, content)
{
	return "<a href=\"javascript:" + fnCall + "\">" + content + "</a>";
}

/**
* Build an HTML img tag using the imgObj for arguments and the fnCall for the onClick
* event.
*/
function buildImage(imgObj, fnCall)
{
	return "<img src=\"" + imgObj["src"] + 
		"\" name=\"" + imgObj["name"] + 
		"\" border=\"" + imgObj["border"] + 
		"\" width=\"" + imgObj["width"] + 
		"\" height=\"" + imgObj["height"] + 
		"\" class=\"" + imgObj["className"] + 
		"\" onClick=\"" + fnCall + "\" />";
}

/**
*
*/
function buildImageObject(name, src, className, width, height, border)
{
	var imgObj = new Array();
	imgObj["name"] = name;

	imgObj["src"] = src;
	imgObj["className"] = className;

	imgObj["width"] = width;
	imgObj["height"] = height;
	imgObj["border"] = border;
	return imgObj;
}

/**
*
*/
function setRedirect(url)
{
	if(url != null)
	{
		preloadRedirect = url;
	}
}

/**
* Used to preload images
*/
function writeImageTag(url)
{
	var name = "_" + imagePreloadCounter;
	imgArray[name] = url;
	document.write("<img name=\"" + name + "\" src=\"" + url + "\" onLoad=\"imageLoaded('" + name + "');\" width=\"1\" height=\"1\" />");
	imagePreloadCounter++;
}

/**
*
*/
function imageLoaded(name)
{
	var blankImage = "../../trans.gif";
	if(imgArray[name] != blankImage)
	{
		imgArray[name] = blankImage;
		document.images[name].src = blankImage;

		imagePreloadCounter--;

		if(imagePreloadCounter == 0)
		{
			if(preloadRedirect != null)
			{
				window.location.replace(preloadRedirect);
			}
		}
	}
}

/**
*
*/
function loadResource(key, value)
{
	resources[key] = value;
}

/**
*
*
*/
function getResource(res, key)
{
	return resources[res][key];
}

/**
*
*/
function getNumberOfResources(res)
{
	return resources[res].length;
}

}
