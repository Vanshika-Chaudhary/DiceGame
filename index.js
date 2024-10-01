let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceImage = "dice"+randomNumber1+".png";
let randomDiceSource1 = "images/"+ randomDiceImage;
var img1 = document.getElementsByClassName("img1")[0].setAttribute("src",randomDiceSource1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "dice"+randomNumber2+".png";
let randomDiceSource2 = "images/"+ randomDiceImage2;
var img2 = document.getElementsByClassName("img2")[0].setAttribute("src",randomDiceSource2);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText = " Player 1 Wins";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerText = "Draw!";
}