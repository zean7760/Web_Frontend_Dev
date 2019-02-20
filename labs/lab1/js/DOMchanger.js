// JavaScript Document

var background = document.getElementById("body");
var neon_img = document.getElementById("neon_img");
var button = document.getElementById("button");

var count = 0;
function changeSeason(){
    if(count === 0){
        neon_img.src="img/sunny.png";
        count++;
    }
    else if(count === 1){
        neon_img.src="img/cloud.png";
        count--;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeTextColor(){
    button.style.color= getRandomColor();
}
neon_img.addEventListener("mouseover", changeTextColor, false);
button.addEventListener("click", changeSeason, false);
