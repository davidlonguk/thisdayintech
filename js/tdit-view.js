/* TDIT View */
/*
var EventView = function EventView(element) {
  this.element = element;
};


EventView.prototype.render = function render(viewEvent) {
  this.element.innerHTML = '<div class="main-div"><div class="left-panel"><h2>'+viewEvent.eventDate+'</h2><img src="'+ viewEvent.image +'"><p>In This Event:<br/><a href="'+viewEvent.relatedlink +'">Apple</a></p></div><div class="right-panel"><h4>On this Day:</h4><p>'+viewEvent.summary+'</p><p><button name="share-btn" class="share-button">Share</button></p></div></div>';
  
  this.previousIndex = viewEvent.previousIndex;
  this.nextIndex = viewEvent.nextIndex;
  
};
*/

//var tditRender = {};

function renderEvent(eventData) {

	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];

	let targetDate = new Date(eventData.eventDate);

	let renderHTML = `<div class="main-div">
				<div class="left-panel">
					`;
	renderHTML +=  "<h2>" + targetDate.getDate() + " " + monthNames[targetDate.getMonth()] + "</h2>";
	renderHTML +=  '<img src="' + eventData.image + '" alt="' + eventData.title +'" width="350">';
	renderHTML +=  '<p>	In This Event:<br/>';
	for (var i = 0; i < eventData.tags.length; i++) {
	 renderHTML += ' <a href="' + eventData.tags[i].url + '">' + eventData.tags[i].name +  '</a> &nbsp;';
	}
	renderHTML += `</p>
				</div>
				<div class="right-panel">`;
	renderHTML += '<h4>On this Day in ' + targetDate.getFullYear() + ': ' + eventData.title + '</h4>';
	renderHTML += '<p>' + eventData.summary + '</p>';
	renderHTML += `<p>
						<button name="share-btn" class="share-button">Share</button>
					</p>
				</div>
			</div>
		</div>
		`;

		$( document ).ready(function() {
			$("#tdit").html(renderHTML);
		});
}