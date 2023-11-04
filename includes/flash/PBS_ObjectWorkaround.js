//---
// PBS_ObjectWorkaround
// mjbaker@pbs.org 09/2006
// Javascript to load flash objects in a page afflicated by IE's eolas issue
// Simply include this javascript in a page and it turns automatically
//---

var PBS_ObjectWorkaround = {

  activated: 0,
  main: 0,

    //---
    // isIE()
    // is this some bunk IE browser?
    //---

    isIE: function() {
	return ( !( navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length ) );
    },

    //---
    // attributesToHash( element )
    // parses an element's attributes and returns them in a hash,
    // keys all lowercased
    //---
    
    attributesToHash: function( el ) {
	var hash = new Array();
	
	if ( !el.attributes ) {
	    return undefined;
	}
	
	var attributes = el.attributes;
	for ( var i = 0; i < attributes.length; ++i ) {
	    hash[ attributes[i].nodeName.toLowerCase() ] = attributes[i].nodeValue;
	}
	return hash;
    },
    
    //---
    // parse( element )
    // return a hash of the original attributes,
    // the param elements converted into name/value pairs in the hash's 'param' key,
    // and the hash of the embed elements' attributes in an array in the 'embeds' key
    //---
    parse: function( el ) {
	var obj = new Array();
	obj.attributes = this.attributesToHash(el);
	obj.params = new Array();
	obj.embeds = new Array();
	
	// Test re's for the PARAM and EMBED tags;
	var paramRE = new RegExp('param', 'i');
	var embedRE = new RegExp('embed', 'i');
	
	var childNodes = el.childNodes;
	for ( var i = 0; i < childNodes.length; ++i ) {
	    var attribs = this.attributesToHash( childNodes[i] );
	    
	    if ( paramRE.exec( childNodes[i].tagName ) && attribs.name ) {
		obj.params[ attribs.name.toLowerCase() ] = attribs.value
		    } else if ( embedRE.exec( childNodes[i].tagName ) ) {
			obj.embeds.push( attribs );
		    }
	}
	
	return obj;
    },
    
    //---
    // getObjectSrc( data )
    // try and find the object's src attribute
    //---
    getObjectSrc: function( data ) {
	var attribs = data.attributes;
	var params = data.params;

	return 	( ( attribs.src ) ? attribs.src :
		  ( ( attribs.movie ) ? attribs.movie :
		    ( ( attribs.swf ) ? attribs.swf :
		      ( ( params.movie ) ? params.movie :
			undefined ) ) ) );
    },

    //---
    // getFlashvars( data )
    // create the flashvars string
    //---
    getFlashvars: function( data ) {
	var flashvars = '';
	if ( data.attributes.flashvars ) {
	    flashvars = data.attributes.flashvars;
	} else if ( data.params.flashvars ) {
	    flashvars = data.params.flashvars;
	}
	return flashvars;
    },

    //---
    // createObjectIE( data )
    // create an object from the data passed in
    // for the dreaded crusher of souls internet explorer
    //---
    createObjectIE: function( data ){
	// for now we'll try strings, but later try making an object
	var obj;
        var attribs = data.attributes;
	var params = data.params;
        var src = this.getObjectSrc( data );
	var flashvars = this.getFlashvars( data );

	// add attributes back in
	obj = '<object';
	for ( var key in attribs ) {
	    if ( attribs[key] ) {
		obj += ' ' + key + '="' + attribs[key] + '"';
	    }
        }
        obj += ">\n";

	// add params back in
	if ( !params['movie'] ) {
	    obj += '<param name="movie" value="' + src + '" />' + "\n";
	}
	for ( var key in params ) {
	    obj += '<param name="' + key + '" value="' + params[key] + '" />' + "\n";
	}

	// add in flashvars
	if ( !params.flashvars && flashvars ) {
	    obj += '<param name="flashvars" value="' + flashvars + '" />' + "\n";
	}
	obj += "</object>\n";

	return obj;
    },

    //---
    // createObjectNS( data )
    // create an object from the data passed in
    // for netscape / most standardized browsers
    //---
    createObjectNS: function( data ){
	
        // was having issues, and isn't really necessary
        // to process for NS
        return undefined;

	// for now we'll try strings, but later try making an object
	var obj;
        var attribs = data.attributes;
	var params = data.params;
        var src = this.getObjectSrc( data );

	var flashvars = this.getFlashvars( data );

	obj = '<embed type="application/x-shockwave-flash"';
	if ( !attribs.src ) {
	    obj += ' src="' + src + '"';
	}

	// add attributes back in
	for ( var key in attribs ) {
	    if ( attribs[key] ) {
		obj += ' ' + key + '="' + attribs[key] + '"';
	    }
        }
	obj += "\n";

	// add params back in
	for ( var key in params ) {
	    obj += ' ' + key + '="' + params[key] + '" ' + "\n";
	}
	
	// add flashvars back in
	if ( !attribs['flashvars'] && flashvars ) {
	    obj += 'flashvars="' + flashvars + '"' + "\n";
	}
	obj += "/>\n";

	return obj;
    },

    //---
    // createObject( data )
    // create an object from the data passed in
    //---

    createObject: function( data ) {
        var src = this.getObjectSrc( data );

	// only switch up swf objects
	var swfRE = /\.swf/i;
	if ( !( src && src.match( swfRE ) ) ) {
		return undefined;
        }
	return ( this.isIE() ) ? this.createObjectIE( data ) : this.createObjectNS ( data );
    },

    //---
    // activate( el )
    // works the magic, tearing an object down
    // and then rebuilding the data back into a useable object
    // returns the object created, if any
    //---
    
    activate: function( el ) {
	
	// Only run if this is an object
	if ( !( el.tagName && RegExp('object', 'i').exec( el.tagName ) ) ){
	    return undefined;
	}
	
	var data = this.parse( el );
	var object = this.createObject( data );

	if ( !object ) {
	    return undefined;
	}

	// Create the container within which to stick the new element
	// IE needs this
	var container = document.createElement('span');
	container.setAttribute('id', ( el.id + '_objectContainer' ) );
	container.style.display = 'none';
    
    if ( typeof( object ) == 'string' ) {
	    container.innerHTML = object;
	} else if ( typeof( object ) == 'object' ) {
	    container.appendChild( object );
	} else {
      return undefined;
    }
    
	// Insert the container span, before the original flash object,
	// remove the original flash object,
	// write the new flash object out to the container
	el.parentNode.insertBefore( container, el );
	el.parentNode.removeChild( el );
	
	
	// Move the new flash object to a place right before the container
	// and delete the container, making the dom exactly as it originally was
	var newEl = container.childNodes[0];
	container.parentNode.insertBefore( newEl, container );
	container.parentNode.removeChild( container );
	
	return newEl;
    },

    //---
    // run()
    // loop through the objects and pass them to activate()
    //---
    
    run: function(el) {

	var isMain = 0;
	if ( !el ) {
	    if ( this.main ) {
	      return 0;
	    }
	    el = document.body;
	    isMain = 1;
            this.main++;
	}	
	
	// activate the object and it's descendants
	if ( this.activate( el ) ) {
	    this.activated++;
	}
	var childNodes = el.childNodes;
	for ( var i = 0; i < childNodes.length; ++i ) {
	    this.run( childNodes[i] );
	}
	if ( isMain ) {
	    //	    window.alert('activated ' + this.activated);
	}
	return 1;
    },

    //---
    // init()
    // just get things going, having the run() method run periodically
    // until the full dom is loaded
    // subverts the need for an onLoad.
    // we could make this conditional via this.isIE(),
    // but might as well run in any browser to make sure
    // everyone has a relatively similar dom experience?
    //---

    init: function() {
			// give it time for the body to load, in milliseconds
			// in some instances it's been seen that 50 isn't enough
			setTimeout('PBS_ObjectWorkaround.run()', 60);
    }
}

PBS_ObjectWorkaround.init();
