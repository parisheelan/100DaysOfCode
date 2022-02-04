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

function clickq() {
   new Audio(instrument[0]).play();
}
function clickw() {
   new Audio(instrument[1]).play();
}
function clicke() {
   new Audio(instrument[2]).play();
}
function clickr(){
    new Audio(instrument[3]).play();
}
function clickt(){
    new Audio(instrument[4]).play();
}
function clicky(){
    new Audio(instrument[5]).play();
}
function clicku(){
    new Audio(instrument[6]).play();
}


function click0(event){
  if(event.key==="w")
  new Audio(instrument[0]).play();
}
function click1(event){
  if(event.key==="a")
  new Audio(instrument[1]).play();
}
function click2(event){
  if(event.key==="s")
  new Audio(instrument[2]).play();
}
function click3(event){
  if(event.key==="d")
   new Audio(instrument[3]).play();
}
function click4(event){
  if(event.key==="j")
   new Audio(instrument[4]).play();
}
function click5(event){
  if(event.key==="k")
   new Audio(instrument[5]).play();
}
function click6(event){
  if(event.key==="l")
   new Audio(instrument[6]).play();
}

document.querySelectorAll("button")[0].addEventListener("click", clickq);
document.querySelectorAll("button")[1].addEventListener("click", clickw);
document.querySelectorAll("button")[2].addEventListener("click", clicke);
document.querySelectorAll("button")[3].addEventListener("click", clickr);
document.querySelectorAll("button")[4].addEventListener("click", clickt);
document.querySelectorAll("button")[5].addEventListener("click", clicky);
document.querySelectorAll("button")[6].addEventListener("click", clicku);

document.addEventListener("keypress", click0);
document.addEventListener("keypress", click1);
document.addEventListener("keypress", click2);
document.addEventListener("keypress", click3);
document.addEventListener("keypress", click4);
document.addEventListener("keypress", click5);
document.addEventListener("keypress", click6);
