/* TDIT Model */

class TodayDay {
	
	constructor (evetData) {
		
	this.title = title;
    this.summary = summary;
    this.edate = edate;
    this.eimage = eimage;
    this.author = _getAuthor(evetData.author);
	}
	
	_getAuthor(author) {
    let author = "Steve";
    return author;
  }

}