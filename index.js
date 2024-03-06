
var c=Math.floor(Math.random()*6)+1;

var randomimage="./dice"+c+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var d=Math.floor(Math.random()*6)+1;

var randomimage2="./dice"+d+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
if(c>d)
{
    
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!";
}
else if(c===d){
    document.querySelector("h1").innerHTML="It's a draw!";
}
else
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}
