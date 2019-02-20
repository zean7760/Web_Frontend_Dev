// Get a reference to the database service
var database = firebase.database();

// Create a storage reference from our storage service
var storageRef = database.ref("fire_report");

//create instance of the Google provider instance
var provider = new firebase.auth.GoogleAuthProvider();

function report(){
    var name;
    var email;
    var phone;
    var caught;
    var trigger;
    var location;

    name = document.getElementById("name").value;

    email = document.getElementById("email").value;

    phone = document.getElementById("phone").value;

    if (document.getElementById("caught_yes").checked == true){
		caught = document.getElementById("caught_yes").value;
	} else {
		caught = document.getElementById("caught_no").value;
    }

    if (document.getElementById("trigger_yes").checked == true){
		trigger = document.getElementById("trigger_yes").value;
	} else {
		trigger = document.getElementById("trigger_no").value;
    }

    location = document.getElementById("location").value;

    storageRef.push(
        {
            name: name,
            email: email,
            phone: phone,
            location: location,
            caught: caught,
            trigger:trigger

        }
    ).then(window.location.href = "#");

}

document.getElementById("enter").addEventListener("click", report);

var history_list = document.getElementById("history");

storageRef.on("child_added", function(snapshot){
    console.log(snapshot.val());
    var name=snapshot.val().name;
    var phone=snapshot.val().phone;
    var email=snapshot.val().email;
    var trigger=snapshot.val().trigger;
    var caught=snapshot.val().caught;
    var location=snapshot.val().location;

    history_list.innerHTML += "<span class='name'>" + name + "</span><span class='email'> " + email + "</span><span class='phone'> " + phone +"</span><span class='trigger'> " + trigger + "</span><span class='caught'> "+ caught + "</span><span class='location'> " + location  ;
});

$( ".history_button" ).click(function() {

    $(".history").slideToggle(1000);

  });
