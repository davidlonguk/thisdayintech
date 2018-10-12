/* TDIT Model 
Author: David Long
*/

// Create TDIT Model Object so we namespace all our objects and functions
var tditModel = {};


// tditModel.Data is an array of objects containing the records
tditModel.Data = [ 
	{	id: "1210", title: "iPhone Launch", EventDate: "2007-10-12", EventDay: "10-12", summary: "Steve Jobs announces the first iPhone at Apple Conference in Silicon Valley",  image: "images/10-12-jobs.jpg", relatedItems: ["Apple", "Steve Job"]	},
	{	id: "1310", title: "Superstar Fire Tech Developer born", EventDate: "1990-10-13", EventDay: "10-13", summary: "Khushboo Sharma, Web Developer, was born in Gujurat India",  image: "https://scontent-lht6-1.cdninstagram.com/vp/abd44c7fde0401eaf289ba8e1bf43d4d/5C5C5E75/t51.2885-15/sh0.08/e35/p640x640/42173846_744972985846714_528677272311884953_n.jpg", relatedItems: ["Khushboo"]	},
	{	id: "1410", title: "First Web Browser ", EventDate: "1990-10-14", EventDay: "10-14", summary: "Tim Berners-Lee invented the first web browser to display and edit the World Wide Web",  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/330px-Sir_Tim_Berners-Lee_%28cropped%29.jpg", relatedItems: ["Tim Berners-Lee"]	},
];

// tditModel.tags is an taxonomy referenced by tditModel.Data records. They are names of tags and links to their webpages they have a 1 to many relationship
tditModel.tags = [
		{ name: "Apple", url: "http://www.apple.com" },
		{ name: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
		{ name: "Tim Berners-Lee", url: "https://en.wikipedia.org/wiki/Tim_Berners-Lee#Career" },
		{ name: "Khushboo", url: "https://stackoverflow.com/users/3717479/khushboo"}
]

/* **************************
 *	TDIT Model Classes  	*
 ****************************/

 //class tditEvent




