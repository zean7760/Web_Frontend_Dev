function fnmouseenter() {
  $("#text").css("color", "#FFD700");
  $( "img.img_fit" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
}

function fnmouseleave() {
  $("#text").css("color", "black");
}
$("button").click(function(){
  $("div").animate({left: '250px'});
});

$(document).ready(function(){
  $("#text").hover(fnmouseenter, fnmouseleave);
  $( "button.btn" ).slideUp( 700 ).fadeIn( 400 );
});
