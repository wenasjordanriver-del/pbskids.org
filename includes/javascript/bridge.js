var bridgeParentsLogo = $('').attr('src','/images/bridge/parents-logo.gif'); 
var bridgeTeachersLogo = $('').attr('src','/images/bridge/teachers-logo.gif'); 
var bridgeSign = $('').attr('src','/images/bridge/sign.gif'); 
var bridgeYouAreLeaving = $('').attr('src','/images/bridge/youareleaving.giff'); 

var cursorFix = false;
var bridgeActive = false;
var osName = '';


$(document).ready(function() {
	
	// Preload bridge images
	
	// $.preloadImages('/images/bridge/parents-logo.gif', '/images/bridge/teachers-logo.gif', '/images/bridge/sign.gif', '/images/bridge/youareleaving.gif');
	
	var bridgeSponsorImages = new Array();
	
	$('a').each(function(i){
		if ($(this).attr('class') == 'pbskids_bridge_sponsor') {
			// alert('Sponsor Image Preloaded');
			bridgeSponsorImages[i] = new Image();
			bridgeSponsorImages[i].src = $(this).attr('rel');
			// $.preloadImages(rel);
		}
	 });

						   
	$('a, area').click(function() {
		if ( (( bridgeURLs(this.hostname, this.pathname) == true ) && bridgeURLs(window.location.hostname, window.location.pathname) == false ) && ($(this).attr('href').indexOf('javascript:') == -1) ) {
				var pathnameslash = '';
				if (this.pathname.substring(0, 1) != '/') { pathnameslash = '/'; };
				return (bridge(($(this).attr('href')), $(this).attr('title'), $(this).attr('class'), $(this).attr('rel'), $(this).attr('rev')));
		};
	});	

});

function flashBridge(href, title) {
	bridge(href, title);
};

function bridge(linkhref, linktitle, linkclass, linkrel, linkrev) {
	// Make arguments optional
	if (typeof linkclass == 'undefined' ) linkclass = 'default';
	if (typeof linkrel == 'undefined' ) linkrel = 'default';
	if (typeof linkrev == 'undefined' ) linkrev = 'default';
	// Split linkhref into hostname and pathname
	var linkhrefSplit = linkhref.split('//');
	if (linkhrefSplit.length > 1) {
		linkhrefSplit = linkhrefSplit[1].split('/');
		// alert(linkhrefSplit.length);
		var hostname = linkhrefSplit[0];
		var pathnamestring = '';
		for (var i=1;i<linkhrefSplit.length;i++) {
			pathnamestring += '/' + linkhrefSplit[i];
		}
		pathname = pathnamestring;
		// var pathname = linkhrefSplit[1];
		if (typeof pathname == 'undefined') { pathname = '' };
	} else {
		pathname = linkhrefSplit[0];
		var windowhref = window.location.href;
		windowhref = windowhref.split('//');
		windowhref = windowhref[1].split('/');
		hostname = windowhref[0];
	}
	
	if ( bridgeActive == false ) {
				
		var documentWidth = $(window).width();
		var documentHeight = $(document).height();
						  
		// Configuration Variables . All sizes are pixels
		bridgeHeight = 210;
		bridgeWidth = 370;
		bridgeBorder = 10;
		bridgePadding = 15;
						 
		// Attach bridge event to all links not going to pbskids.org or soup.pbskids.org
		
		bridgeActive = true;
	
		if (pathname.substring(0,1) == '/') { bridgeLinkPathname = pathname; }
		else { bridgeLinkPathname = '/' + pathname; }
		
		// If link has a linktitle attribute, use it for bridge link
		if ( linktitle ) {
			bridgeLinkTitle = linktitle;
		}
		// If not, use the URL itself
		else {
			bridgeLinkTitle = hostname + bridgeLinkPathname;
			// If url is longer than 50 characters, cut the URL short and append '...'
			if ( bridgeLinkTitle != bridgeLinkTitle.substring(0, 20) ) {
				bridgeLinkTitle = bridgeLinkTitle.substring(0, 20) + '&hellip;';
			}
		}
	
		bridgeLink = linkhref;
		
		// Accesses function from bridge.urls.js where templates are specified
		bridgeTemplate = bridgeURLTemplates(hostname, pathname, linkclass);
		// alert(hostname + ' ' + pathname);
		
		if ( bridgeTemplate == 'parentsSection' ) {
			bridgeLinkTitle = 'the Parents&nbsp;and&nbsp;Teachers&nbsp;section';	
		}
		
		bridgeBackground = '#b3ce34';
		bridgeTitleBackground = '#b3ce34 url(/images/bridge/youareleaving.gif) no-repeat 50% 50%';
		bridgeX = 'bridge-x.gif';
		bridgeLinkColor = '#516F00';
		bridgeTextColor = '#ffffff';		
		
		if (navigator.appVersion.indexOf("Mac") != (-1) ) { osName="MacOS"; }
		cursorFix = bridgeCursorFix(window.location.hostname, window.location.pathname);
		
		$('object, embed').each(function(){
			if( ($(this).attr('wmode') != 'transparent' && $(this).attr('wmode') != 'Transparent' && $(this).attr('wmode') != 'opaque' && $(this).attr('wmode') != 'Opaque') || (osName == 'MacOS' && cursorFix == true)) {
				this.style.visibility = 'hidden';
			};
		});
		
		// Create bridge overlay elements
		if ( bridgeTemplate == 'parents' || bridgeTemplate == 'parentsSection' ) {
			
			$('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeSignLink"><img src="/images/bridge/sign.gif" id="sign" width="213" height="92" alt="" /><img src="/images/bridge/parents-logo.gif" id="parentsLogo" width="159" height="27" alt="PBS Parents" /></a></p><a href="" id="close" title="Back to PBS KIDS"><img src="/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');
			
			$('#bridge h3').css({
				'background' : bridgeTitleBackground,
				'border' : '0',
				'height' : '100px',
				'left' : (bridgeWidth - 280) / 2 + 'px',
				'margin' : '0',
				'padding' : '0',
				'position' : 'relative',
				'text-indent' : '-3000px',
				'width' : '280px'
			});
			
			$('#bridgeInner a.bridgeLink').css({
				'color' : bridgeLinkColor,
				'display' : 'block',
				'font-family' : 'Arial, Verdana, sans-serif',
				'font-size' : '14px',
				'margin' : '0 20px 0 34px',
				'padding' : '0 0 100px 0',
				'text-align' : 'center',
				'width' : '300px'
			});
			
			$('#bridgeInner a.bridgeSignLink').css({
				'bottom' : '0',
				'display' : 'block',
				'height' : '92px',
				'left' : '10px',
				'margin' : '0 80px',
				'outline' : 'none',
				'position' : 'absolute',
				'width' : '213px'
			});
			
			$('#parentsLogo').css({
				'left' : '20px',
				'position' : 'absolute',
				'top' : '18px'
			});
			
		} else if ( bridgeTemplate == 'teachers' ) {
			
			$('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeSignLink"><img src="/images/bridge/sign.gif" id="sign" width="213" height="92" alt="" /><img src="/images/bridge/teachers-logo.gif" id="teachersLogo" width="138" height="33" alt="PBS Teachers" /></a></p><a href="" id="close" title="Back to PBS KIDS"><img src="/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');
			
			$('#bridge h3').css({
				'background' : bridgeTitleBackground,
				'border' : '0',
				'height' : '100px',
				'left' : (bridgeWidth - 280) / 2 + 'px',
				'margin' : '0',
				'padding' : '0',
				'position' : 'relative',
				'text-indent' : '-3000px',
				'width' : '280px'
			});
			
			$('#bridgeInner a.bridgeLink').css({
				'color' : bridgeLinkColor,
				'display' : 'block',
				'font-family' : 'Arial, Verdana, sans-serif',
				'font-size' : '14px',
				'margin' : '0 20px 0 34px',
				'padding' : '0 0 100px 0',
				'text-align' : 'center',
				'width' : '300px'
			});
			
			$('#bridgeInner a.bridgeSignLink').css({
				'bottom' : '0',
				'display' : 'block',
				'height' : '92px',
				'left' : '10px',
				'margin' : '0 80px',
				'outline' : 'none',
				'position' : 'absolute',
				'width' : '213px'
			});
				
			$('#teachersLogo').css({
				'left' : '30px',
				'position' : 'absolute',
				'top' : '14px'
			});
			
		} else if ( bridgeTemplate == 'sponsor' ) {
				
			bridgeWidth = bridgeWidth + 100;
			
			$('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p id="bridgeSponsorText"><a href="' + bridgeLink + '"><img src="' + linkrel + '" /></a><span id="bridgeInvisibleBlock"></span>' + linkrev + '</p><p class="sponsorTextLink"><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><p id="bridgeClear"><!-- --></p><a href="" id="close" title="Back to PBS KIDS"><img src="/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');
				
			$('#bridgeInvisibleBlock').css({
				// 'border' : '1px solid red',
				'clear' : 'left',
				'display' : 'inline',
				'float' : 'left',
				'height' : '82px',
				'margin' : '0 0 0 -' + ($('#bridgeSponsorText img').width() + 13) + 'px',
				'width' : $('#bridgeSponsorText img').width() + 'px'
			});
				
			$('#bridge h3').css({
				'background' : bridgeTitleBackground,
				'border' : '0',
				'height' : '100px',
				'left' : (bridgeWidth - 280) / 2 + 'px',
				'margin' : '0',
				'padding' : '0',
				'position' : 'relative',
				'text-indent' : '-3000px',
				'width' : '280px'
			});
				
			$('#bridgeInner p.sponsorTextLink').css({
				// 'border' : '1px solid orange',
				'margin' : '0',
				'padding' : '10px 20px 13px ' + ($('#bridgeSponsorText img').width() + 26) + 'px',
				'text-align' : 'center'
			});
				
			$('#bridgeInner a.bridgeLink').css({
				'color' : bridgeLinkColor,
				'font-family' : 'Arial, Verdana, sans-serif',
				'font-size' : '14px'
			});
			
			$('#bridgeSponsorText').css({
				'color' : bridgeTextColor,
				'font-size' : '12px',
				'margin' : '0',
				'padding' : '0 13px 0 ' + ($('#bridgeSponsorText img').width() + 26) + 'px',
				'text-align' : 'left'
			});
			
			$('#bridgeSponsorText img').css({
				'float' : 'left',
				'margin' : '0 0 0 -' + ($('#bridgeSponsorText img').width() + 13) + 'px'
			});
				
			$('#bridgeClear').css({
				// 'display' : 'none',
				// 'border' : '1px solid purple',
				'clear' : 'left',
				// 'float' : 'left',
				'height' : '0',
				'line-height' : '0',
				'margin' : '0',
				'padding' : '0'
			});
		
		} else {
			$('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><a href="" id="close" title="Back to PBS KIDS"><img src="/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');
				
			$('#bridge h3').css({
				'background' : bridgeTitleBackground,
				'border' : '0',
				'height' : '100px',
				'left' : (bridgeWidth - 280) / 2 + 'px',
				'margin' : '0',
				// 'padding' : '55px 0 20px 0',
				'padding' : '0',
				'position' : 'relative',
				'text-indent' : '-3000px',
				'width' : '280px'
			});
				
			$('#bridge #bridgeInner a.bridgeLink').css({
				'color' : bridgeLinkColor,
				'cursor' : 'pointer',
				'display' : 'block',
				'font-family' : 'Arial, Verdana, sans-serif',
				'font-size' : '14px',
				'font-weight' : 'normal',
				'margin' : '0 20px 0 100px',
				'padding' : '0 0 20px 0',
				'text-align' : 'left',
				'text-decoration' : 'underline'
				// 'width' : '200px'
			});
				
		}
			
		// All Styles necessary to get height
		
		$('#bridgeInner p').css({
			'margin' : '0 0 1em 0'
		});
			
		$('#bridgeInner a.bridgeLink').css({
			'cursor' : 'pointer',
			'font-weight' : 'normal',
			'text-decoration' : 'underline'
		});
			
		$('a img').css({ 'border' : '0' });
				
		$('#bridgeContainer').css({
			'background-color' : '#000000',
			'position' : 'absolute',
			'height' : documentHeight,
			// 'width' : '100%',
			'width' : documentWidth,
			'top' : '0',
			'left' : '0',
			'opacity' : '0',
			'text-align' : 'left',
			'z-index' : '10000'
		});			
			
		$('#bridgeInner').css({
			'font-size' : '16px',
			'padding' : '1px',
			'line-height' : '1.4',
			'text-align' : 'left'
		});
			
		$('#bridge').css({
			'background' : bridgeBackground,
			'font-family' : 'arial, verdana, sans-serif',
			'padding' : '1px',
			'position' : 'absolute',
			'width': (bridgeWidth - 2) + 'px',
			'left' : (documentWidth / 2) - (bridgeWidth / 2) + 'px',
			'opacity' : '0',
			'z-index' : '10002'
		});
			
		$('#close').css({
			'bottom' : '0',
			'display' : 'block',
			'height' : '67px',
			'left' : '15px',
			'outline' : 'none',
			'position' : 'absolute',
			'width' : '55px'
		});
			
		// All post-height styles
			
		bridgeHeight = $('#bridgeInner').height();
		// alert(bridgeHeight);
			
		$('#bridgeOutline').css({
			'background' : '#ffffff',
			'position' : 'absolute',
			'width': (bridgeWidth * 1) + (bridgeBorder * 2) + 'px',
			'height' : (bridgeHeight + 2 * 1) + (bridgeBorder * 2) + 'px',
			'top' : ($(window).height() / 2) - (bridgeHeight / 2) - (bridgeBorder * 1) + $(window).scrollTop() + 'px',
			'left' : (documentWidth / 2) - (bridgeWidth / 2) - (bridgeBorder * 1) + 'px',
			'opacity' : '0',
			'z-index' : '10001'
		});
		
		$('#bridge').css({
			'height' : bridgeHeight + 'px',
			'top' : ($(window).height() / 2) - (bridgeHeight / 2) + $(window).scrollTop() + 'px'
		});
			
		// Bridge behaviors
			
		$('#bridgeContainer').animate({'opacity' : '.8'}, 'fast', function() {
			$('#bridgeOutline').animate({'opacity' : '1'}, 'fast');															   
			$('#bridge').animate({'opacity' : '1'}, 'fast');
		});
			
		$('#bridgeContainer').click(function() {
			closeBridge();
		});
		
		$('#close').click(function() {
			closeBridge();
			return false;
		});
		
		$(document).keyup(function(event){
			if (event.keyCode == 27) {
				closeBridge();
			}
		});
		
		$(window).scroll(function () { 
			$('#bridgeOutline').css({
				'top' : ($(window).height() / 2) - (bridgeHeight / 2) - (bridgeBorder * 1) + $(window).scrollTop() + 'px',
				'left' : (documentWidth / 2) - (bridgeWidth / 2) - (bridgeBorder * 1) + 'px'
			});
			$('#bridge').css({
				'top' : ($(window).height() / 2) - (bridgeHeight / 2) + $(window).scrollTop() + 'px',
				'left' : (documentWidth / 2) - (bridgeWidth / 2) + 'px'
			});
		});
	
		return false;
			
	} else {
		return false;
	};
	
	return true;

};

function closeBridge() {
	$('#bridgeOutline').animate({'opacity' : '0'}, 'fast');
	$('#bridge').animate({'opacity' : '0'}, 'fast', function() {
		$('#bridgeContainer').animate({'opacity' : '0'}, 'fast', function() {
			$('#bridge').remove();
			$('#bridgeOutline').remove();
			$('#bridgeContainer').remove();
			$('object, embed').each(function(){this.style.visibility = 'visible';});
		});
	});
	$(document).unbind('keyup');
	bridgeActive = false;
};
