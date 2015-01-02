document.addEventListener ("DOMContentLoaded", function(){

var rotated = false;

var button = document.querySelector("#spin-button");

button.addEventListener("click", function(){

var puppies = document.querySelector("#puppies");

if(rotated){

puppies.style.webkitTransform = "rotate(0)";
rotated = false;

}

else{

puppies.style.webkitTransform = "rotate(500deg)";

rotated = true;

}

})

})