for(var i=0; i<document.querySelectorAll(".drum").length ; i++){

document.querySelectorAll("button")[i].addEventListener("click",function() {
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch(key){
    case "w":
    var tom1 =new Audio("crash.mp3");
    tom1.play();
    case "a":
    var tom1 =new Audio("kick-bass.mp3");
    tom1.play();
    case "s":
    var tom1 =new Audio("snare.mp3");
    tom1.play();
    case "d":
    var tom1 =new Audio("tom-1.mp3");
    tom1.play();
    case "j":
    var tom1 =new Audio("tom-2.mp3");
    tom1.play();
    case "k":
    var tom1 =new Audio("tom-3.mp3");
    tom1.play();
    case "l":
    var tom1 =new Audio("tom-4.mp3");
    tom1.play();


  default:console.log(buttonInnerHTML);
  }
}
