function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
var slides = ["img/cycling1.jpg", "img/cycling2.jpg", "img/cycling3.jpg", "img/cycling4.jpg","img/cycling5.jpg","img/cycling6.jpg","img/cycling7.jpg"];
var count = 0;
$("document").ready(function () {
    setInterval(switchImage2, 3000); //calls switchImage every 3000 milliseconds
    $('.answer').hide(); //selects all divs with class="answer" and hides them
    $('.question').click(fadeAnswer); //toggles fading in and out the answer
});

$( ".road" ).click(function() {
    $(".destination").show( 1500 );
    $('.destTxt').text("The wide-open rolling terrain of the Yampa Valley has "+
    "long been home to Steamboat's ranching legacy. Pedal our roads and you will "+
    "be rewarded with miles of great vistas. Popular routes include everything "+
    "from 20-mile out and backs, to 40-mile circuits, to mixed dirt touring, to "+
    "epic hill climbs and century rides. Road rides vary in mileage so you’ll "+
    "have options for a quick cruise, or an all- day crusher.");
    $(".dest").attr("src", "img/Steamboat.jpg")

});

$( ".mountain" ).click(function() {
    $('.destTxt').text("Crested Butte and the Gunnison Valley offer an" +
    "expansive mountain-biking experience like no other. The area’s more than "+
    "750 miles of mountain-biking trails lead to wildflower-peppered valleys, "+
    "unparalleled mountain vistas and multi-hued desert expanses.");
    $(".dest").attr("src", "img/CrestedButte.jpg")

});

$( ".cyclecross" ).click(function() {
    $('.destTxt').text("The Boulder Valmont Bike Park is a 42-acre, natural "+
    "surface cycling terrain park offering diverse amenities for several "+
    "riding styles and abilities. The park is free and open daily from dawn to dusk.");
    $(".dest").attr("src", "img/Boulder_valmont.jpg")

});

function switchImage2() {
    $(".img_fit").animate({ opacity: 0.0 }, 500, function () {
      if (count < 2) {
        count++;
      } else {
        count = 0;
      }
      $(".img_fit").attr("src", slides[count]).animate({ opacity: 1.0 }, 500);
    });
  }
  function fadeAnswer() {
    $(this).next('.answer').slideToggle(1000); //toggles showing and hiding the answer
    $(this).toggleClass('close'); //toggles adding and removing a class named close to the h2 tag
  }
