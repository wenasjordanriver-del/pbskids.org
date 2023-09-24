// Set speed of auto-advance
var advanceDelay = 10000;

// Go to the next .content item
function goNext(rotate, transition) {
	// Test if it's at the end of the list
	if ( $('#kids-rotator-content .content.active').next().length > 0 ) {
		if ( transition == true ) {
			$('#kids-rotator-content .content.active').fadeOut('slow');
			$('#kids-rotator-content .content.active').next().fadeIn('slow');
		}
		else {
			$('#kids-rotator-content .content.active').hide();
			$('#kids-rotator-content .content.active').next().show();
		}
		$('#kids-rotator-content .content.active').removeClass('active').next().addClass('active');
	}
	// If it doesn't, go to first item in the list
	else {
		if ( transition == true ) {
			$('#kids-rotator-content .content.active').fadeOut('slow');
			$('#kids-rotator-content .content.active').parent().children(':first-child').fadeIn('slow');
		}
		else {
			$('#kids-rotator-content .content.active').hide();
			$('#kids-rotator-content .content.active').parent().children(':first-child').show();
		}
		$('#kids-rotator-content .content.active').removeClass('active').parent().children(':first-child').addClass('active');
	}
	// Test to see whether it's been sent by a timer or a click
	if ( rotate == true ) {
		// If by a timer, keep it going
		clearTimeout(rotator);
		rotator = setTimeout ('goNext(true, true)', advanceDelay);
	}
	else {
		// If by a click, stop automatic advance
		clearTimeout(rotator);
	}
}

// Go to the previous .content item
function goBack(rotate, transition) {
	if ( $('#kids-rotator-content .content.active').prev().length > 0) {
		if ( transition == true ) {
			$('#kids-rotator-content .content.active').fadeOut('slow');
			$('#kids-rotator-content .content.active').prev().fadeIn('slow');
		}
		else {
			$('#kids-rotator-content .content.active').hide();
			$('#kids-rotator-content .content.active').prev().show();
		}
		$('#kids-rotator-content .content.active').removeClass('active').prev().addClass('active');
	}
	else {
		if ( transition == true ) {
			$('#kids-rotator-content .content.active').fadeOut('slow');
			$('#kids-rotator-content .content.active').parent().children(':last-child').fadeIn('slow');
		}
		else {
			$('#kids-rotator-content .content.active').hide();
			$('#kids-rotator-content .content.active').parent().children(':last-child').show();
		}
		$('#kids-rotator-content .content.active').parent().children(':last-child').removeClass('active').parent().children(':last-child').addClass('active');
	}
	clearTimeout(rotator);
	rotator = setTimeout ('goNext(true, true)', advanceDelay);
}

$(document).ready(function() {
						   
	/* $('#kids-rotator-content .content').each(function () {
		$(this).show();
		$(this).hide();
	}); */
	
	// Randomly select one of the first two items to display
	var randomNumber = (Math.floor(Math.random()*2) + 1);
	// Display one of the first two items and assign it the class of 'active'
	$('#kids-rotator-content .content:nth-child(' + randomNumber + ')').show().addClass('active');
	
	
	// If the second one is pulled up, remove the first one and place it after the second so that it is viewed immediately after the first one
	if (randomNumber == 2) {
		$('#kids-rotator-content .content:nth-child(1)').clone().insertAfter('#kids-rotator-content .content:nth-child(2)');
		$('#kids-rotator-content .content:nth-child(1)').remove();
	}
	
	// Start up the auto-advance
	rotator = setTimeout ('goNext(true, true)', advanceDelay);
	
	// Create click function for Next button
	$('#nav-next').click(function() {
		// For now, at least, we want auto-advance to continue.  Just remove 'true' to take this away.
		goNext(false, false);
		return false;
	});
	
	// Create click function for Back button
	$('#nav-back').click(function() {
		goBack(false, false);
		return false;
	});
	
	// On mouseover, pause auto-advance
	$('#kids-rotator').mouseover(function() {
		clearTimeout(rotator);
	});
	// On mouseout, resume auto-advance
	$('#kids-rotator').mouseout(function() {
		rotator = setTimeout ('goNext(true, true)', (advanceDelay/2));
	});
});
