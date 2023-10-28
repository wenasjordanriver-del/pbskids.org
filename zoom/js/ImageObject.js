/************************
	IMAGE CLASS
	- object constructor
	- load method
	= get method
************************/

function ImageObject(imgPath,Height,Width,preload) {
  // define local properties
  this.path = imgPath;
  // we don't need this image until we are ready to load
  this.imageobj = null;
	
  // attach object's methods
  this.load = ImageObjectLoad; //  force the loading of the image
  this.getImage = ImageObjectGetImage; /* this function will 
    retrieve the source of the image from this object for use by other
    javscript objects */
	
  // complete constuctor
  if (preload) { // if preload is true load the image up right away
    this.load();
  }
}

// define object's methods
function ImageObjectLoad() {
  this.imageobj = new Image(); // create the image object
  this.imageobj.src = this.path;
}

function ImageObjectGetImage() {
  if (this.imageobj) { // if we already have it, send the src along
    return this.imageobj.src;
  } else { // if not send the path to the source back
    /* note, it may be better form to load() and then return the full
        source when its done loading, but this is a much easier way to
        code it and works because the image.src is "overloaded" and can
        handle either case */
    this.load();
    return this.path;

  }
}

/************************
	BUTTON CLASS
	- object constructor
	- over method
	- out method
************************/

function ButtonObject(ID,divname,OutPath,OverPath,Height,Width) {
	// define object's properties
	this.key = ID;
	this.layer = divname;
	//	this.layer = divname.ID;
	if (document.all) {
		this.key = document.all[this.key];
	}
	else if (document.layers) {
		this.key = document.layers[this.layer].document[this.key];
		alert(document.layers[this.layer].document[this.key].name + "\n");
	}
	else {
		this.key = document.getElementById(this.key);
	}
	this.OutImgPath = new ImageObject(OutPath,Height,Width,true);
	this.OverImgPath = new ImageObject(OverPath,Height,Width,true);
	
	// attach object's methods
	this.Over = ButtonObjectOver;
	this.Out = ButtonObjectOut;
}

// define object's methods
function ButtonObjectOver() { 
    //db : added null check
    if(this.key) {
//	this.key.src = this.OverImgPath.getImage(); }
	if (document.all) {
		this.key.src = this.OverImgPath.getImage();
	}
	else if (document.layers) {
		document.layers[divname].document[this.key].src = this.OverImgPath.getImage();
	}
	else {
		this.key.src = this.OverImgPath.getImage();
	}}
}

function ButtonObjectOut() { 
    //db : added null check
    if(this.key) {
//	this.key.src = this.OutImgPath.getImage();    
        if (document.all) {
            this.key.src = this.OutImgPath.getImage();
        }
        else if (document.layers) {
            document.layers[divname].document[this.key].src = this.OutImgPath.getImage();
        }
        else {
            this.key.src = this.OutImgPath.getImage();
        }
	}
}


/************************
	MAKEBUTTON
	- utility function
	- makes a button object
	- uses above classes
************************/
function MakeButton(ID,divname,OutPath,OverPath,Height,Width) {
	return new ButtonObject(ID,divname,OutPath,OverPath,Height,Width);
 }



}
