/**
* Interactive Game Resource Script
* Version 1.0
* Copyright Ragdoll Ltd.
*/

var activeXControls = new Array();
activeXControls[0] = new Array("WMPlayer.OCX.7", "6BF52A52-394A-11D3-B153-00C04F79FAA6", "WindowsMedia7+", "0");
activeXControls[1] = new Array("WMPlayer.OCX", "05589FA1-C356-11CE-BF01-00AA0055595A", "WindowsMedia", "1");
activeXControls[2] = new Array("MediaPlayer.MediaPlayer.1", "22D6F312-B0F6-11D0-94AB-0080C74C7E95", "WindowsMedia", "1");
activeXControls[3] = new Array("AMOVIE.ActiveMovieControl.2", "05589FA1-C356-11CE-BF01-00AA0055595A", "ActiveMovie", "2");
activeXControls[4] = new Array("QuickTimeCheckObject.QuickTimeCheck.1", "02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", "QuickTime", "3");
activeXControls[5] = new Array("QuickTime.QuickTime.4", "02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", "QuickTime", "3");
activeXControls[6] = new Array("rmocx.RealPlayer G2 Control", "CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA", "RealPlayer", "4");
activeXControls[7] = new Array("rmocx.RealPlayer G2 Control.1", "CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA", "RealPlayer", "4");
activeXControls[8] = new Array("RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA", "RealPlayer", "4");
loadResource("activeXControls", activeXControls);

var jsFunctions = new Array();
jsFunctions[0] = new Array(".controls.play()", ".controls.stop()");			//Windows Media 7+
jsFunctions[1] = new Array(".MediaPlayer.play()", ".MediaPlayer.stop()");		//Windows Media 6.4
jsFunctions[2] = new Array(".run()", ".stop()");					//Active Movie
jsFunctions[3] = new Array(".play()", ".stop()");					//Quick Time
jsFunctions[4] = new Array(".DoPlay()", ".DoStop()");					//Real Player
loadResource("playerControls", jsFunctions);
