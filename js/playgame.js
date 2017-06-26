var monkeyverticalhigh = 100;
var monkeyMoveDelay = 0;
var monkeyJumpHeight = -400;

var treeBG;


var monkeySpeed; // Herman: this should be related to the screen moving down when the monkey jumps up
                 //         need this for movement of sprites down the screen

var branchSpeed = 0; //not sure about the speed as it will move with monkey
var branchGap = 60;

var byteGap = 120;          // controls how often bytes appear
var virusGap = 600;         // controls how often viruses appear (once every 500px)
var beerGap = 1000;         // controls how often beer appears
var coffeeGap = 1000;       // controls how often coffee appears
var bananaGap = 2000;       // controls how often banana appears

var scoreKey = {'0':1, '1':100, '10':200, '11':300, '100':400, '101':500, '110':600, '111':700};
var mouseTouchDown = false;

var playgame = function(game) {};
playgame.prototype = {
    create: function(){
  		game.stage.backgroundColor = "#4488AA";
  	    treeBG = game.add.tileSprite(0, 0, game.width, game.height, "tree");

        this.physics.startSystem( Phaser.Physics.ARCADE );
        console.log("playgame started");

        // camera and platform tracking vars
        this.cameraYMin = 99999;
        this.platformYMin = 99999;

        // create platforms
        this.platformsCreate();

        // create hero
        this.monkeyCreate();

        // cursor controls
        this.cursor = this.input.keyboard.createCursorKeys();
        //tilting


        // Bytes score setup
        score = 0;
        this.scoreText = game.add.bitmapText(game.width-20, game.height-65, "font", "0", 48);
        this.scoreText.alpha = 0.75;
        this.scoreText.anchor.set(1,0);

        // //create branches
        // this.branchGroup = game.add.group();
        // var branch = new Branch(game, branchSpeed);
        // game.add.existing(branch);
        // this.branchGroup.add(branch);
        this.branchGroup = game.add.group();
        this.addBranch(this.branchGroup);

        // Create other sprite groups
        this.bytesGroup = game.add.group();
        this.addByte(this.bytesGroup);
        this.virusGroup = game.add.group();
        this.addVirus(this.virusGroup);
        this.beerGroup = game.add.group();
        this.addBeer(this.beerGroup);
        this.coffeeGroup = game.add.group();
        this.addCoffee(this.coffeeGroup);
        this.bananaGroup = game.add.group();
        this.addBanana(this.bananaGroup);
        this.dartsGroup = game.add.group(); // only add dart when mouseTouchDown (see lower down)

        // For testing
        var byte = new Bytes(game, monkeySpeed, game.height-200);
        game.add.existing(byte);
        this.bytesGroup.add(byte);
        var byte2 = new Bytes(game, monkeySpeed, game.height-225);
        game.add.existing(byte2);
        this.bytesGroup.add(byte2);
        var byte3 = new Bytes(game, monkeySpeed, game.height-210);
        game.add.existing(byte3);
        this.bytesGroup.add(byte3);
        var byte4 = new Bytes(game, monkeySpeed, game.height-215);
        game.add.existing(byte4);
        this.bytesGroup.add(byte4);
        var byte5 = new Bytes(game, monkeySpeed, game.height-230);
        game.add.existing(byte5);
        this.bytesGroup.add(byte5);
        var byte6 = new Bytes(game, monkeySpeed, game.height-205);
        game.add.existing(byte6);
        this.bytesGroup.add(byte6);
        var virus = new Virus(game, monkeySpeed, game.height-200);
        game.add.existing(virus);
        this.virusGroup.add(virus);
        var banana2 = new Banana(game, monkeySpeed, game.height-300);
        game.add.existing(banana2);
        this.bananaGroup.add(banana2);
        var beer2 = new Beer(game, monkeySpeed, game.height-175);
        game.add.existing(beer2);
        this.beerGroup.add(beer2);
        var coffee2 = new Coffee(game, monkeySpeed, game.height-75);
        game.add.existing(coffee2);
        this.coffeeGroup.add(coffee2);

    },

    update: function() {
        // this is where the main magic happens
        // the y offset and the height of the world are adjusted
        // to match the highest point the hero has reached
        this.world.setBounds( 0, -this.monkey.yChange, this.world.width, this.game.height + this.monkey.yChange );

        // the built in camera follow methods won't work for our needs
        // this is a custom follow style that will not ever move down, it only moves up
        this.cameraYMin = Math.min( this.cameraYMin, this.monkey.y - this.game.height + 70 );
        this.camera.y = this.cameraYMin;

        // hero collisions and movement
        this.physics.arcade.collide( this.monkey, this.platforms );
        this.monkeyMove();


        //treeBG.tilePosition.y += 5;





        /* Collision conditions - belongs inside the "update" function [Herman] */
        if (!this.monkey.destroyed && this.monkey.alpha == 1){

            game.physics.arcade.collide(this.monkey, this.bytesGroup, function(m,b){
                // collide action between monkey and byte sprite
                var scoreText = this.scoreText;
                var addScore = scoreKey[b.byteValue];
                if (b.alpha === 1){ // make byte disappear to alpha 0
                    var byteTween = game.add.tween(b).to({
                        alpha: 0
                    }, 500, Phaser.Easing.Bounce.Out, true);
                    byteTween.onComplete.add(function(){
                        b.destroy();
                        score += addScore;
                        scoreText.text = score.toString();
                    });
                }
            }, null, this);
            game.physics.arcade.overlap(this.dartsGroup, this.bytesGroup, function(d,b){
                // collide action between dart and byte sprite
                var scoreText = this.scoreText;
                var addScore = scoreKey[b.byteValue];
                if (b.alpha === 1){ // make byte disappear to alpha 0
                    var byteTween = game.add.tween(b).to({
                        alpha: 0
                    }, 500, Phaser.Easing.Bounce.Out, true);
                    d.kill();
                    byteTween.onComplete.add(function(){
                        b.destroy();
                        score += addScore;
                        scoreText.text = score.toString();
                    });
                }
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.virusGroup, function(m,v){
                // collide condition between monkey and a virus sprite
                var scoreText = this.scoreText;
                if (v.alpha === 1 && !this.monkey.invincible){
                    var virusTween = game.add.tween(v).to({
                        alpha: 0,
                        height: 100,
                        width: 100,
                    }, 500, "Linear", true);
                    virusTween.onComplete.add(function(){
                        v.destroy();
                        score -= 250;
                        scoreText.text = score.toString(); // update score
                    });
                }
            }, null, this);
            game.physics.arcade.overlap(this.dartsGroup, this.virusGroup, function(d,v){
                // collide condition between dart and a virus sprite
                var scoreText = this.scoreText;
                if (v.alpha === 1 && !this.monkey.invincible){
                    var virusTween = game.add.tween(v).to({
                        alpha: 0,
                        height: 100,
                        width: 100,
                    }, 500, "Linear", true);
                    d.kill();
                    virusTween.onComplete.add(function(){
                        v.destroy();
                        score -= 250;
                        scoreText.text = score.toString(); // update score
                    });
                }
            }, null, this);

            game.physics.arcade.collide(this.monkey, this.beerGroup, function(m,b){
                // collide condition between monkey and a beer sprite
                // temporarily make monkey jump lower
                //var monkey = this.monkey;
                if (!this.monkey.invincible){
                    this.lowerJump();
                    b.destroy();
                }
            }, null, this);
            game.physics.arcade.overlap(this.dartsGroup, this.beerGroup, function(d,b){
                // collide condition between dart and a beer sprite
                if (!this.monkey.invincible){
                    this.lowerJump();
                    d.destroy();
                    b.destroy();
                }
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.coffeeGroup, function(m,c){
                // collide condition between monkey and a coffee sprite
                // temporarily make monkey jump higher
                this.higherJump();
                c.destroy();
            }, null, this);
            game.physics.arcade.overlap(this.dartsGroup, this.coffeeGroup, function(d,c){
                // collide condition between dart and a coffee sprite
                this.higherJump();
                d.destroy();
                c.destroy();
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.bananaGroup, function(m,b){
                // collide action between monkey and a banana sprite
                this.becomeInvincible();
                b.destroy();
            }, null, this);
            game.physics.arcade.overlap(this.dartsGroup, this.bananaGroup, function(d,b){
                // collide condition between dart and a banana sprite
                this.becomeInvincible();
                d.destroy();
                b.destroy();
            }, null, this);

        }

        // Shooting banana darts
        if (game.input.activePointer.isDown) {
            if (!mouseTouchDown) {
                this.touchDown();
            }
        } else {
            if (mouseTouchDown) {
                this.touchUp();
            }
        }

        // Kill banana dart
        this.dartsGroup.forEach(function(item){
            if (item.originalY - item.y > 960) {
                // console.log("A banana dart has been killed.");
                item.destroy();
            }
        }, this);

    },
    monkeyCreate: function(){
        this.monkey = game.add.sprite(game.width/2, game.height-50, "monkey");
        this.monkey.anchor.set(0.5);
        this.game.physics.enable(this.monkey, Phaser.Physics.ARCADE);

        this.monkey.yOrig = this.monkey.y;
        this.monkey.ychange=0;

        this.monkey.body.gravity.y = 500;
        this.monkey.body.checkCollision.up = false;
        this.monkey.body.checkCollision.left = false;
        this.monkey.body.checkCollision.right = false;

        this.monkey.destroyed = false;
        this.monkey.invincible = false; // Herman: for implementing banana effects
    },
    platformsCreate: function(){
        this.platforms = this.add.group();
        this.platforms.enableBody = true;
        this.platforms.createMultiple( 10, 'wall' );

        this.platformsCreateOne(-16, this.world.height - 16, this.world.width + 16 );
    },
    platformsCreateOne:function(x,y,width){
        var platform = this.platforms.getFirstDead();
        platform.reset( x, y );
        platform.scale.x = width;
        platform.scale.y = 16;
        platform.body.immovable = true;
        return platform;
    },
    monkeyMove: function() {
        // handle the left and right movement of the hero
        if( this.cursor.left.isDown ) {
          this.monkey.body.velocity.x = -200;
        } else if( this.cursor.right.isDown ) {
          this.monkey.body.velocity.x = 200;
        } else {
          this.monkey.body.velocity.x = 0;
        }

        // handle hero jumping
        if( this.cursor.up.isDown && this.monkey.body.touching.down ) {
            this.monkey.body.velocity.y = monkeyJumpHeight;
                                       // Herman: I added this variable so it can be manipulated
        }

        // wrap world coordinated so that you can warp from left to right and right to left
        this.world.wrap( this.monkey, this.monkey.width / 2, false );

        // track the maximum amount that the hero has travelled
        this.monkey.yChange = Math.max( this.monkey.yChange, Math.abs( this.monkey.y - this.monkey.yOrig ) );

        // if the hero falls below the camera view, gameover
        if( this.monkey.y > this.cameraYMin + this.game.height && this.monkey.alive ) {
            this.state.start( 'GameOverScreen' );
        }

    },

    addBranch: function(group){
      var branch = new Branch(game, branchSpeed);
      game.add.existing(branch);
      group.add(branch);
    },

    addByte: function(group) {
        var byte = new Bytes(game, monkeySpeed);
        game.add.existing(byte);
        group.add(byte);
    },
    addVirus: function(group) {
        var virus = new Virus(game, monkeySpeed);
        game.add.existing(virus);
        group.add(virus);
    },
    addBeer: function(group) {
        var beer = new Beer(game, monkeySpeed);
        game.add.existing(beer);
        group.add(beer);
    },
    addCoffee: function(group) {
        var coffee = new Coffee(game, monkeySpeed);
        game.add.existing(coffee);
        group.add(coffee);
    },
    addBanana: function(group) {
        var banana = new Banana(game, monkeySpeed);
        game.add.existing(banana);
        group.add(banana);
    },
    addDart: function(group) {
        var dart = new Dart(game, -500, this.monkey.x, this.monkey.y-20);
        game.add.existing(dart);
        group.add(dart);
    },

    // Shooting banana darts
    touchDown: function() {
        mouseTouchDown = true;
        this.fireDart();
    },
    touchUp: function() {
        mouseTouchDown = false;
    },
    fireDart: function() {
        this.addDart(this.dartsGroup);
    },

    // Beer and coffee effects
    lowerJump: function(m) {
        // effects of colliding into beer
        monkeyJumpHeight *= 0.8;
        console.log(`monkeyJumpHeight: ${monkeyJumpHeight} for 3 seconds after beer collide`);
        game.time.events.add(Phaser.Timer.SECOND * 3, function(){monkeyJumpHeight *= 1.25;console.log(`monkeyJumpHeight: ${monkeyJumpHeight}`);}, this);
    },
    higherJump: function() {
        // effects of colliding into coffee
        monkeyJumpHeight *= 1.25;
        console.log(`monkeyJumpHeight: ${monkeyJumpHeight} for 3 seconds after coffee collide`);
        game.time.events.add(Phaser.Timer.SECOND * 3, function(){monkeyJumpHeight *= 0.8;console.log(`monkeyJumpHeight: ${monkeyJumpHeight}`);}, this);
    },
    becomeInvincible: function() {
        // effects of colliding into banana
        var monkey = this.monkey;
        monkey.invincible = true;
        console.log("Monkey invincible for 4 seconds after banana collide");
        game.time.events.add(Phaser.Timer.SECOND * 4, function(){monkey.invincible = false;console.log("Monkey no longer invincible.");}, this);
    }
};


// Generate branches
var Branch = function (game, speed) {
    var positions = [Math.random()*(280-40)+40, Math.random()*(600-360)+360];
	var position = game.rnd.between(0, 1);
	Phaser.Sprite.call(this, game, positions[position], 800, "branch");
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.set(position, 0.5);
	this.body.velocity.y = speed;
    this.body.velocity.y = speed;
	this.placeBranch = true;
};
Branch.prototype = Object.create(Phaser.Sprite.prototype);
Branch.prototype.constructor = Branch;
Branch.prototype.update = function(){
	if(this.y > game.height){
		this.destroy();
	}
    // if(this.placeBranch && this.y > branchGap){
	// 	this.placeBranch = false;
	// 	playgame.prototype.addBranch(this.parent);
	// }
};

// Bytes
var Bytes = function(game, speed, positionY=-50) {  // speed = moving of the screen elements when monkey jumps up
    var bytesArr = ["0", "0", "0",          // 1 byte   // value 0
                    "1", "1", "1", "1", "1",            // value 1
                    "10", "10", "10", "10", // 2 bytes  // value 2
                    "11", "11", "11",                   // value 3
                    "100", "100",                       // value 4
                    "101", "101",           // 3 bytes  // value 5
                    "110",                              // value 6
                    "111"];                             // value 7

    var byte = bytesArr[game.rnd.between(0,bytesArr.length-1)]; // randomized byte value
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, positionY, byte);
                                   // randomized x position
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeByte = true;
    this.byteValue = byte;
};
Bytes.prototype = Object.create(Phaser.Sprite.prototype);
Bytes.prototype.constructor = Bytes;
Bytes.prototype.update = function() {
    if (this.placeByte && this.y > byteGap) {
        this.placeByte = false;
        playgame.prototype.addByte(this.parent);
    }
    if (this.y > game.height) {
        this.destroy();
    }
};

// Viruses
var Virus = function(game, speed, positionY=-100) { // speed = moving of the screen elements when monkey jumps up
    // var virusArr = [] // for future development of different types of viruses
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, positionY, "virus");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeVirus = true;
};
Virus.prototype = Object.create(Phaser.Sprite.prototype);
Virus.prototype.constructor = Virus;
Virus.prototype.update = function() {
    if (this.placeVirus && this.y > virusGap) {
        this.placeVirus = false;
        playgame.prototype.addVirus(this.parent);
    }
    if (this.y > game.height) {
        this.destroy();
    }
};

// Beer
var Beer = function(game, speed, positionY=-150) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, positionY, "beer");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeBeer = true;
};
Beer.prototype = Object.create(Phaser.Sprite.prototype);
Beer.prototype.constructor = Beer;
Beer.prototype.update = function() {
    if (this.placeBeer && this.y > beerGap) {
        this.placeBeer = false;
        playgame.prototype.addBeer(this.parent);
    }
    if (this.y > game.height) {
        this.destroy();
    }
};

// Coffee
var Coffee = function(game, speed, positionY=-125) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, positionY, "coffee");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeCoffee = true;
};
Coffee.prototype = Object.create(Phaser.Sprite.prototype);
Coffee.prototype.constructor = Coffee;
Coffee.prototype.update = function() {
    if (this.placeCoffee && this.y > coffeeGap) {
        this.placeCoffee = false;
        playgame.prototype.addCoffee(this.parent);
    }
    if (this.y > game.height) {
        this.destroy();
    }
};

// Bananas
var Banana = function(game, speed, positionY=-150) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, positionY, "banana");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeBanana = true;
};
Banana.prototype = Object.create(Phaser.Sprite.prototype);
Banana.prototype.constructor = Banana;
Banana.prototype.update = function() {
    if (this.placeBanana && this.y > bananaGap) {
        this.placeBanana = false;
        playgame.prototype.addBanana(this.parent);
    }
    if (this.y > game.height) {
        this.destroy();
    }
};

// Dart
var Dart = function(game, speed, monkeyX, monkeyY) {
    Phaser.Sprite.call(this, game, monkeyX, monkeyY, "bananaDart");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.body.velocity.y = speed;
    this.originalY = this.y;
};
Dart.prototype = Object.create(Phaser.Sprite.prototype);
Dart.prototype.constructor = Dart;
Dart.prototype.update = function() {
    if (this.y - this.originalY > 1200) {
        this.destroy();
    }
};
