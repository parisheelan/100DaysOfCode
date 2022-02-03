var buttonLength = document.querySelectorAll("button").length;
var instrument = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

function click0() {
  var audio = new Audio(instrument[0]).play();
}
function click1() {
  var audio = new Audio(instrument[1]).play();
}
function click2() {
  var audio = new Audio(instrument[2]).play();
}
function click3(){
    var audio=new Audio(instrument[3]).play();
}
function click4(){
    var audio=new Audio(instrument[4]).play();
}
function click5(){
    var audio=new Audio(instrument[5]).play();
}
function click6(){
    var audio=new Audio(instrument[6]).play();
}
document.querySelectorAll("button")[0].addEventListener("click", click0);
document.querySelectorAll("button")[1].addEventListener("click", click1);
document.querySelectorAll("button")[2].addEventListener("click", click2);
document.querySelectorAll("button")[3].addEventListener("click", click3);
document.querySelectorAll("button")[4].addEventListener("click", click4);
document.querySelectorAll("button")[5].addEventListener("click", click5);
document.querySelectorAll("button")[6].addEventListener("click", click6);