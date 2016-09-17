console.log ("working");

var c1 = document.getElementById('myCanvas1');
var ctx1 = c1.getContext('2d');

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');

var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');

var c5 = document.getElementById('myCanvas5');
var ctx5 = c5.getContext('2d');

ctx1.beginPath();
ctx1.strokeStyle = "blue";
ctx1.moveTo(75,0);
ctx1.lineTo(150,100);
ctx1.lineTo(0,100);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "red";
ctx1.fill();

ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.moveTo(75,0);
ctx2.lineTo(150,100);
ctx2.lineTo(75,200);
ctx2.lineTo(0,100);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

ctx3.beginPath();
ctx3.strokeStyle = "blue";
ctx3.moveTo(0,0);
ctx3.lineTo(0,300);
ctx3.lineTo(150,150);
ctx3.lineTo(300,0);
ctx3.lineTo(300,300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "red";
ctx3.fill();

ctx4.beginPath();
ctx4.strokeStyle = "blue";
ctx4.moveTo(150,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,150);
ctx4.lineTo(150,0);
ctx4.lineTo(300,0);
ctx4.moveTo(150,150);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.moveTo(150,150);
ctx4.lineTo(300,150);
ctx4.lineTo(300,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "red";
ctx4.fill();

ctx5.beginPath();
ctx5.arc(150,150,40,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "red";
ctx5.fill();