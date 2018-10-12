/* TDIT View */

var EventView = function EventView(element) {
  this.element = element;
};


EventView.prototype.render = function render(viewEvent) {
  this.element.innerHTML = '<div class="main-div"><div class="left-panel"><h2>'+viewEvent.eventDate+'</h2><img src="'+ viewEvent.image +'"><p>In This Event:<br/><a href="'+viewEvent.relatedlink +'">Apple</a></p></div><div class="right-panel"><h4>On this Day:</h4><p>'+viewEvent.summary+'</p><p><button name="share-btn" class="share-button">Share</button></p></div></div>';
  
  this.previousIndex = viewEvent.previousIndex;
  this.nextIndex = viewEvent.nextIndex;
  
};
