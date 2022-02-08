
var length=document.querySelectorAll("button").length;
console.log(length);
for(var i=0;i<length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickme);
    function clickme(){
        new Audio("sounds/crash.mp3").play();
    }
}