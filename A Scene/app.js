var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var img1 = new Image();
img1.src = 'apple.png';

ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(0,400);
ctx.lineTo(800,400);
ctx.lineTo(800,800);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "brown";
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineTo(200,200);
ctx.lineTo(240,200);
ctx.lineTo(240,400);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "grey";
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,200);
ctx.arc(180,180,30,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

ctx.beginPath();
ctx.arc(250,220,45,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(150,250,45,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(260,250,20,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

ctx.beginPath();
ctx.arc(220,120,45,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(230,200,30,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

ctx.beginPath();
ctx.arc(230,200,30,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(260,180,25,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

ctx.beginPath();
ctx.arc(260,120,35,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "Green";
ctx.fill();

ctx.beginPath();
ctx.arc(130,160,50,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

ctx.beginPath();
ctx.arc(300,150,50,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "GreenYellow";
ctx.fill();

img1.onload = function() {
	ctx.drawImage(img,300,300,100,80)
}