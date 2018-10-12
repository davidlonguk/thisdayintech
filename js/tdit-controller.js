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

		id = "" + day + (today.getMonth()+1);
		
		// get data for this day
		let todayData = new tditEvent(id);

		// send Data to view 
		renderEvent(todayData);
	}

// tell view to render using data object