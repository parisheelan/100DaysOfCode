var diceList=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var randomIndex=Math.floor(Math.random()*6);
document.querySelectorAll("img")[0].setAttribute("src",diceList[randomIndex]);

var randomIndex2=Math.floor(Math.random()*6);
document.querySelectorAll("img")[1].setAttribute("src",diceList[randomIndex2]);


if(randomIndex>randomIndex2){
    document.querySelector(".winner h2").innerHTML="Player 1 Wins";
}else if(randomIndex2>randomIndex){
    document.querySelector(".winner h2").innerHTML="Player 2 Wins";
}else{
    document.querySelector(".winner h2").innerHTML="Draw";
}