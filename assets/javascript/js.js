

$(document).ready(function(){
	alert("hello world");
	var config = {
		 	apiKey: "AIzaSyBhCRp1HcS8EIFAlJB2AzcsFncRUqxY_MU",
		    authDomain: "rockpaperscissor-b9726.firebaseapp.com",
		    databaseURL: "https://rockpaperscissor-b9726.firebaseio.com",
		    projectId: "rockpaperscissor-b9726",
		    storageBucket: "rockpaperscissor-b9726.appspot.com",
		    messagingSenderId: "152250190760"
	};

	firebase.initializeApp(config);
	var database = firebase.database();
	var userInput = "";
	var user1 = "";
	var user2 = "";
	var lastObj = "";
	var lastObj2= "";

	$("#click-button").on("click",function(){
		event.preventDefault();
		var userInput = $("#name-input").val().trim();
		alert(userInput);
		if($("#user1").is(":empty")){
			var user1 = userInput;
			
			database.ref("/game/user1").push({	
			user1:user1

			});
			$("#user1").html(lastObj.user1);
			$("#name-input").val("");
		}
		else{
			user2 = userInput;
			
			database.ref("/game/user2").push({
				user2:user2
			
			});
			$("#user2").html(lastObj2.user2);
			$("#name-input").val("");
		}
	});
database.ref("/game/user1").on("value", function(snapshot) {
	var sv = snapshot.val();
	var svArr = Object.keys(sv);
	var lastIndex = svArr.length -1;
	var lastKey = svArr[lastIndex];
		lastObj = sv[lastKey];

	//console.log(snapshot.val());
	console.log(lastObj.user1);
	



},function(errorObject) {
      console.log("The read failed: " + errorObject.code);
});
database.ref("/game/user2").on("value", function(snapshot) {
	var sv = snapshot.val();
	var svArr = Object.keys(sv);
	var lastIndex = svArr.length -1;
	var lastKey = svArr[lastIndex];
		lastObj2 = sv[lastKey];

	//console.log(snapshot.val());
	console.log(lastObj2.user2);




},function(errorObject) {
      console.log("The read failed: " + errorObject.code);
});
}); //end of ready function
	