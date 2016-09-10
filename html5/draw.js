console.log("I'm fine")

var c = document.getElementById('myCanvas1');
var ctx = c.getContext('2d');

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');

var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');

var c5 = document.getElementById('myCanvas5');
var ctx5 = c5.getContext('2d');

// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

ctx.fillStyle = "rgb(255,0,0)"
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "rgb(0,255,0)"
ctx.strokeRect(80,80,140,140);
ctx.clearRect(130,130,40,40);

ctx2.fillStyle = "rgb(0,0,0)"
ctx2.fillRect(0,0,100,100);
ctx2.fillRect(200,0,100,100);
ctx2.fillRect(100,100,100,100);
ctx2.fillRect(0,200,100,100);
ctx2.fillRect(200,200,100,100);

ctx3.fillStyle = "rgb(0,0,0)"
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(20,160,120,120);
ctx3.clearRect(160,160,120,120);
/////////////////////////////////////////////////

var x=0;
var y=0;
var width=300;
var height=300;
ctx4.fillRect(x,y,width,height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height-= 20;
	ctx4.clearRect(x,y,width,height);
	x += 10;
	y += 10;
	width -= 20;
	height-= 20;
	ctx4.fillRect(x,y,width,height);
}

ctx5.fillStyle = "rgb(0,0,0)"
ctx5.fillCircle(30,30,100,100)
