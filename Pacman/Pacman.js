// Declaring all variables at the top (Elevation of Scope)
var canvas;
var ctx;
// Starting position and radius of player sprite
var x = 300;
var y = 300;
var r = 20;
// Holding the speed in the x and y directions
var mx = 0;
var my = 0;
// Positions of fruits
var ghostX;
var ghostY;
var ghostWidth = 50;
var ghostHeight = 50;
// Boolean to keep track of whether collision is occuring
var ghostCollision = false;
var circleCollision = false;
// Width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;
var gameover = false;
var score = 0;

// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Grabbing and setting up our canvas
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	// Putting fruits in random positions
	ghostX = Math.floor(Math.random() * 550);
	ghostY = Math.floor(Math.random() * 550);
	// Waiting for user to press keyboard (behaviour coded in keydownControl)
	circleX = Math.floor(Math.random() * (580) + 10);
	circleY = Math.floor(Math.random() * (580) + 10);
	window.onkeydown = keydownControl;
	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

// Draw scene function
function draw() {
	clear();
	//if the game is still ongoing
	if (gameover != true){
	drawPacman(x,y,50);
	drawGhost();
	circle(circleX,circleY);
	// Tells our sprite to bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - r || x + mx < 0 + r){
		mx = -mx
	} else if (y + my > WIDTH - r || y + my < 0 + r) {
		my = -my
	}
	// Moves our sprite
	x += mx;  //means the same as x = x + mx
	y += my;
    //Ghost to follow Pacman
    followPacman();
	// Is there a collision?
	collisionCheck();
	collisionHandle();
   }
   if (gameover == true) {
   	ctx.font = "40px Impact";
   	ctx.fillText("Game Over", 200, 300)
   }
}

function followPacman() {
	if (ghostX < x) {
		ghostX += 2
	}
	if (ghostY < y) {
		ghostY += 2
	}
	if (ghostX > x) {
		ghostX -= 2
	}
	if (ghostY > y) {
		ghostY -= 2
	}
} 

function collisionHandle() {
	// If there is a collision, resets position of fruit and changes the score
	if (ghostCollision == true) {
		gameover = true;
	}
	if (circleCollision == true) {
		circleX = Math.floor(Math.random() * (580) + 10);
	    circleY = Math.floor(Math.random() * (580) + 10);
	    score += 1;
	    document.getElementById("score").innterHTML = score;
	}

}

function collisionCheck() {
	// Accounting for collision from the top left and the bottom right
	if( (x >= ghostX) && (x <= ghostX + ghostWidth) && (y >= ghostY) && (y <= ghostY + ghostHeight) ) {
		ghostCollision = true;
	} else {
		ghostCollision = false;
	}
	if( (x >= circleX) && (x <= circleX) && (y >= circleY) && (y <= circleY) ) {
		ghostCollision = true;
	} else {
		circleCollision = false;
	}
}

function keydownControl(e) {
	// Change the speed depending on which button is pressed
	if(e.keyCode == 37) {
		mx = -4;
		my = 0
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}

// Importing images onto canvas
function drawPacman(x,y,r) {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var pacman = new Image();
	pacman.src = "pacman.png";
	ctx.drawImage(pacman, x, y, r, r);
}

function drawGhost() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var ghost = new Image();
	ghost.src = "ghost.png";
	ctx.drawImage(ghost, ghostX, ghostY, 50, 50);
}

function cicle (circleX,circleY) {
	ctx.beginPath();
	ctx.arc(circleX, circleY, r, 10, 6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();

}

init();