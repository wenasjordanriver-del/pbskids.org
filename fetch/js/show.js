// this is the special rollovers for the contestants on the "my show" index page

messages=new Array();

messages['khalil']=["They call him \"Waterhead\"!"];
messages['anna']=["Keeper of the three-legged cat!"];
messages['brian']=["Ketchup throwers need not apply!"];
messages['julia']=["Our midnight ice cream wanderer!"];
messages['noah']=["\"Wheelie\" good at stunts!"];
messages['taylor']=["PJ maker extraordinaire!"];

names=new Array('khalil','anna','brian','julia','taylor','noah');


function doshow(place) {



var msg=messages[place];
//alert(msg[0]);

var ran=Math.floor(Math.random() * msg.length);
var showmsg=msg[ran];

var id='castfact';

if (document.getElementById) {
	document.getElementById(id).innerHTML=showmsg;
//	window.status = msg;
}
	return true;

}

function unshow(place) {
msg="Roll over! Sit! Stay! (Heh, heh, heh...)";
var id='castfact';

if (document.getElementById) {
	document.getElementById(id).innerHTML=msg;
//	window.status = msg;
}
	return true;
}


function Taglines(elem) {
	if (typeof(elem) == 'string') elem = document.getElementById(elem);
    if (elem == null) return; // I guess this bails if can't do getElementById

	for(var zz in names) {
		var name=names[zz];
		img=document.getElementById('img_' + name);
		img.showit=name;
		img.onmouseover = imgRollover2;
		img.onmouseout = imgRollout2;
		img.rolloverSet = true;
	}
}



function imgRollover2() {this.src = this.overimg;doshow(this.showit);} 
function imgRollout2() {this.src = this.offimg;unshow(this.showit);} 




}
