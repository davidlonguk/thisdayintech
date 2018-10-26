/* TDIT Model 
Author: David Long
*/
/*jshint esversion: 6 */
// Create TDIT Model Object so we namespace all our objects and functions

var tditModel = {};


// tditModel.Data is an array of objects containing the records
/* properties
    Data, eventDate, id, image, relatedItems, summary, title
*/
tditModel.Data = [ 
	{	id: "1210", title: "iPhone Launch", eventDate: "2007-10-12", summary: "Steve Jobs announces the first iPhone at Apple Conference in Silicon Valley",  image: "images/10-12-jobs.jpg", relatedItems: ["Apple", "Steve Jobs"]	},
	{	id: "1310", title: "Superstar Fire Tech Developer born", eventDate: "1990-10-13", summary: "Khushboo Sharma, Web Developer, was born in Gujurat India",  image: "https://scontent-lht6-1.cdninstagram.com/vp/abd44c7fde0401eaf289ba8e1bf43d4d/5C5C5E75/t51.2885-15/sh0.08/e35/p640x640/42173846_744972985846714_528677272311884953_n.jpg", relatedItems: ["Khushboo"]	},
	{	id: "1410", title: "First Web Browser ", eventDate: "1990-10-14", summary: "Tim Berners-Lee invented the first web browser to display and edit the World Wide Web",  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/330px-Sir_Tim_Berners-Lee_%28cropped%29.jpg", relatedItems: ["Tim Berners-Lee"]	},
	{	id: "1510", title: "Fire Tech Launches", eventDate: "2013-10-15", summary: "Jill Hodges founds Fire Tech and launches the first summer camp",  image: "https://cdn.firetechcamp.com/wp-content/uploads/2018/09/05151439/how-we-got-there2.jpg", relatedItems: ["Jill Hodges", "Fire Tech"]	},
	{	id: "2610", title: "Pay Day", eventDate: "2018-10-26", summary: "Fire Tech staff get paid and keep the lights on for another month",  image: "https://media.giphy.com/media/5fBH6z8aMV1RbA4FaSc/giphy.gif", relatedItems: ["Money", "Fire Tech"]	},
	{	id: "2610b", title: "Dev team completes sprint on schedule", eventDate: "2018-10-26", summary: "Against all the odds the Fire Tech Dev team completes a sprint on time for the first time ever.",  image: "https://media.giphy.com/media/p3P8lFeNeemwcPY00B/giphy.gif", relatedItems: ["Fire Tech"]	},
];

// tditModel.tags is an taxonomy referenced by tditModel.Data records. They are names of tags and links to their webpages they have a 1 to many relationship
tditModel.tags = [
		{ name: "Apple", url: "http://www.apple.com" },
		{ name: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
		{ name: "Tim Berners-Lee", url: "https://en.wikipedia.org/wiki/Tim_Berners-Lee#Career" },
		{ name: "Khushboo", url: "https://stackoverflow.com/users/3717479/khushboo" },
		{ name: "Jill Hodges", url: "https://www.firetechcamp.com/about/" },
		{ name: "Fire Tech", url: "https://www.firetechcamp.com/" },
		{ name: "Money", url: "https://giphy.com/search/money" }
]

/* **************************
 *	TDIT Model Classes  	*
 ****************************/

class tditEvent {

	constructor(eventID) {
		this.ID = String(eventID);
		this.eventData = this.findEvent(this.ID);
		this.title = this.eventData.title;
		this.eventDate = this.eventData.eventDate;
		this.summary = this.eventData.summary;
		this.image = this.eventData.image;
		this.relatedItems = this.eventData.relatedItems;
		this.tags = this.findTags(this.relatedItems)
	}
	// look up record based on id
	findEvent(eventID) {
		let eventData = tditModel.Data.find(eventRecord => eventRecord.id === eventID);
		if (typeof eventData == 'undefined' ) {
  		
	  		eventData = {
	  			name: "Not found",
	  			dob: "Not found",
	  			age: "Not found",
	  			image: "http://placehold.it/200x200"
	  		};
  		}
		return eventData;
	}

	findTags(relatedItems) {
		let tags = [];
		
		for (let i=0; i<relatedItems.length; i++ ) {
			tags[i] = tditModel.tags.find(tag => tag.name === relatedItems[i]);
		}
		return tags;

	}

	getTitle() {
		return this.title;
	}


}
class tditLookUp {

	constructor(eventDay) {
		this.eventDay = String(eventDay);
		this.matchedIDs = this.findEvent(this.eventDay);
		//this.eventRecords = this.findEvent(this.eventDay);
		
	}
	findEvent(eventDay) {
		let eventData = tditModel.Data.filter(eventRecord => eventRecord.eventDate.includes(eventDay));
		//console.log(eventData);
		let idArray = [];
		
		if (typeof eventData == 'undefined' ) {	
	  		return;
  		} else {
  			eventData.forEach(function(eventRecord){
  				idArray.push(eventRecord.id);
  		}) ;

  			
  		return idArray;
  			//return eventData.length;
  		}
	}

}