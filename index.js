var randomNumber1 = Math.floor(Math.random()*6);  //1-6 values of dice
var randomDice1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];
document.querySelectorAll("img")[0].setAttribute("src",randomDice1[randomNumber1]);

var randomNumber2 = Math.floor(Math.random()*6);
var randomDice2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];
document.querySelectorAll("img")[1].setAttribute("src",randomDice2[randomNumber2]);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML="Draw";
}
