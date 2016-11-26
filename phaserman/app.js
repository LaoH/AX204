console.log("working");

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score= 0;
var life = 3;

function preload() {
	game.load.image('sky', 'assts/sky.png');
	game.load.image('ground', 'assts/platform.png');
	game.load.image('star', 'assts/star.png');
	game.load.spritesheeet('dude', 'assts/dude.png' 32, 48);
	game.load.spritesheet('baddie', 'assts/baddie.png' 32, 32);
}

function create() {
	game.physics.starSystem(Phaser.Physics.Arcade);
	game.add.sprite(0, 0, 'sky');
	platforms = game.add.physicsGroup();
	platform.enablebody = true;

	var ground = platforms.create(0, game.world.height - 50, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	var ledge = platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	ledge= platforms.create(-150,250, 'ground');
	ledge.body.immovable = true;

	player = game.add.sprite(32, 400, 'dude');
		player.animations.add('left', [0,1,2,3], true);
		player.animations.add('right', [0,1,2,3], true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy1 = game.add.sprite(32, 400, 'baddie');
		enemy1.animations.add('left', [0,1], true);
		enemy1.animations.add('right', [2,3], true);
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);

	player.body.velocity.x = 0

	if (cursor.left.isDown) {
		player.body.velocity.x = -150;
		player.animation.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animation.play('right');
	} else {
		player.animation.stop();
		player.frame = 4;
	}

	if (enemy1.x > 759) {
		enemy1.body.velocity.x = -120;
		enemy1.animations.play('left');
	} else if (enemy1.x  < 405) {
		enemy1.body.velocity.x = 120;
		enemy1.animations.play('right');
	}
}