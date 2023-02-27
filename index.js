document
  .querySelectorAll(".drum")
  .forEach((element) => element.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  }));

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

var crashAudio = new Audio("./sounds/crash.mp3");
var kickAudio = new Audio("./sounds/kick-bass.mp3");
var snareAudio = new Audio("./sounds/snare.mp3");
var tom1Audio = new Audio("./sounds/tom-1.mp3");
var tom2Audio = new Audio("./sounds/tom-2.mp3");
var tom3Audio = new Audio("./sounds/tom-3.mp3");
var tom4Audio = new Audio("./sounds/tom-4.mp3");

function makeSound(key) {
  switch (key) {
    case "w":
      tom1Audio.play();
      break;
    case "a":
        tom2Audio.play();
      break;
    case "s":
        tom3Audio.play();
      break;
    case "d":
        tom4Audio.play();
      break;
    case "j":
        crashAudio.play();
      break;
    case "k":
        kickAudio.play();
      break;
    case "l":
        snareAudio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } ,100);
    

}

