/* TDIT Controller */

// on page load trigger current date
$( document ).ready(function() {
	loadTargetDate();
});

// request data object from model for target Date
	function loadTargetDate(targetDate) { 
		let today = "";
		if (targetDate == null) {
			today = new Date();
		} else {
			today = new Date(targetDate);
		}
		let day = "";
		if ( today.getDate().length < 1 ) {
			day = "0" + today.getDate();
		} else {
			day = today.getDate();
		}

		id = (today.getMonth()+1) + "-" + day ;

		// check if records exist for this day 
		let todayLookup = new tditLookUp(id);
		
		let todayData = [];

		// look up date for matched dates
		if (todayLookup.matchedIDs != "undefined") {
			for (var i = 0; i < todayLookup.matchedIDs.length; i++) {
				todayData[i] = new tditEvent(todayLookup.matchedIDs[i]);
			}
		};
		//console.log(todayData);
		// get data for this day
		//let todayData = new tditEvent(id);

		// send Data to view 
			//renderEvent(todayData);
		// send first item to replace the content
		renderEvent(todayData[0], true);
		// if more than one append additional items instead of replace
		if (todayData.length > 1) {
			for (var i = 1; i < todayData.length; i++) {
				renderEvent(todayData[i], false);	
			}
		}
	}

// tell view to render using data object