function include() {
  let file, xhttp; 
  let allElements = document.getElementsByTagName('*'); //get all elements on the page

  for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
    file = allElements[i].getAttribute('includefile');  
    if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { allElements[i].innerHTML = this.responseText;}
          if (this.status == 400) { allElements[i].innerHTML = "Page not found!";}
          allElements[i].removeAttribute('includefile');
          include();
        }

       }
        xhttp.open('GET', 'modules/' + file, true); // matching file names in includes folder
        xhttp.send();
        return;
    
    }
  }
}

include();  // initial function call

function wayfinding(){
    var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !=="") {
	var menu = document.querySelectorAll('#myTopnav a');
	var i;

	for (i=0; i<menu.length; i++) {
		var currentURL = (menu[i].getAttribute("href"));
		menu[i].parentNode.className="";
		if (currentURL===pageHREF) {
			menu[i].parentNode.className="active";
		}
	}
}
}