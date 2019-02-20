// Get a reference to the database service
var database = firebase.database();

// Create a storage reference from our storage service
var storageRef = database.ref("good_things");

//create instance of the Google provider instance
var provider = new firebase.auth.GoogleAuthProvider();

function diary()
{
	var name;
	var date;
	var mood;
    var thing1;
    var thing2;
    var thing3;

	//name
    name = document.getElementById("name").value;

    //date
	date = document.getElementById("date").value;

	//mood
	mood = document.getElementById("mood").value;

    //thing1
    thing1 = document.getElementById("thing1").value;

    //thing2
	thing2 = document.getElementById("thing2").value;

	//thing3
	thing3 = document.getElementById("thing3").value;


	//write to firebase
	storageRef.push(
        {
            name: name,
            date: date,
            mood: mood,
            thing1: thing1,
            thing2: thing2,
            thing3: thing3
        }
    ).then(window.location.href = "#");
}

document.getElementById("enter").addEventListener("click", diary);

var history_list = document.getElementById("history");

storageRef.on("child_added", function(snapshot){
    console.log(snapshot.val());
    var name=snapshot.val().name;
    var date=snapshot.val().date;
    var mood=snapshot.val().mood;
    var thing1=snapshot.val().thing1;
    var thing2=snapshot.val().thing2;
    var thing3=snapshot.val().thing3;
    history_list.innerHTML += "<span class='name'>" + name + "</span><span class='date'>" + date + "</span><span class='mood'>" + mood +"</span><span class='things'>" +"<ul><li>"+ thing1+ "</li><li>" + thing2+ "</li><li>"+ thing3+ "</li><ul>"+ "</span>";
});

$( ".history_button" ).click(function() {

    $(".history").slideToggle(1000);

  });
