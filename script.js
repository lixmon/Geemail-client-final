$(document).ready(function(){

	 var geemailsLength = window.geemails.length;
	 console.log(geemailsLength);

	 appendEmailHTML(geemailsLength); //#4
	 appendInboxCount(geemailsLength); //#5
	 startMessageGetter(); //#6
});

function startMessageGetter(){
	setTimeout(
		function(){
			var myMessage = getNewMessage();
			window.geemails.push(myMessage);
			//alert("You've got mail!");
			$("#mySection").append(getMessageArticle(myMessage));
			updateInboxCount();
			startMessageGetter();
		}, 3000);
}

function updateInboxCount(){
	//$("#inboxCount").innerHTML = "Inbox Count " +body.length;
	document.getElementById("inboxCount").innerHTML = "Inbox Count " +window.geemails.length;
}

//create html to display inbox count
//append it to the DOM
function appendInboxCount(geemailsLength){

	var inboxCount = "";
	inboxCount += "<aside id='myAside'>"+
					"<p id='inboxCount'>Inbox Count "+geemailsLength+"</p>"+
				  "</aside>";
	console.log(inboxCount);
	$("#gee-mail").append(inboxCount);
}

//loop through window.geemail 
//for each item in geemail grab the different keys in the object
//append it to the DOM
function appendEmailHTML(geemailsLength){
	var htmlText = "";

	 //$("#gee-mail").append("<section>");
	 htmlText += "<section id='mySection'>";
	 var tempObject;

	 for (var i = 0; i < geemailsLength; i++) {
	 		tempObject = window.geemails[i];
			htmlText += getMessageArticle(tempObject);
	};
	
	// $("#gee-mail").append("</section>");
	htmlText += "</section>";
	$("#gee-mail").append(htmlText);
}

function getMessageArticle(messageObject){
	var date = messageObject.date;
	var sender = messageObject.sender;
	var subject = messageObject.subject;
	var message = messageObject.body;
	
	var htmlText = 
		"<article>"+
			"<details>"+
				"<summary>"+date + sender + subject +"</summary>"+
				"<p>"+message+"</p>"+
			"</details>"+
		"</article>";

	return htmlText;
}