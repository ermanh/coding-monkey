var monkeyverticalhigh = 100;
var shipMoveDelay = 0;

var byteGap = 120;          // controls how often bytes appear
var virusGap = 600;         // controls how often viruses appear (once every 500px)
var beerGap = 1000;         // controls how often beer appears
var coffeeGap = 1000;         // controls how often coffee appears
var bananaGap = 2000;       // controls how often banana appears

var monkeySpeed; // this is related to the screen moving down when the monkey jumps up

var scoreKey = {'0':1, '1':100, '10':200, '11':300, '100':400, '101':500, '110':600, '111':700}

var playgame = function(game) {};
playgame.prototype = {
    create: function(){
  		//var tintColor = bgColors[game.rnd.between(0, bgColors.length - 1)];
        game.stage.backgroundColor = "#4488AA";
  		var tunnelBG = game.add.tileSprite(0, 0, game.width, game.height, "tree");
  		//tunnelBG.tint = tintColor;
        console.log("playgame started");

        //create monkey
        this.monkey = game.add.sprite(game.width/4, game.height-50, "monkey");
        //this.monkey.side = 0;
        this.monkey.anchor.set(0.5);
        this.game.physics.enable(this.monkey, Phaser.Physics.ARCADE);
        this.monkey.canMove = true;
        game.input.onDown.add(this.moveMonkey, this);
        this.monkey.invincible = false;


        // Bytes score
        score = 0;
        this.scoreText = game.add.bitmapText(game.width-20, game.height-65, "font", "0", 48);
        this.scoreText.alpha = 0.75;
        this.scoreText.anchor.set(1,0);

        this.byte = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 100, "101");
        this.byte.anchor.set(0.5);
        this.virus = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 150, "virus");
        this.virus.anchor.set(0.5);
        this.banana = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 200, "banana");
        this.banana.anchor.set(0.5);
        this.beer = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 400, "beer");
        this.beer.anchor.set(0.5);
        this.coffee = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 300, "coffee");
        this.coffee.anchor.set(0.5);
        this.byte2 = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 350, "10");
        this.byte2.anchor.set(0.5);
        this.byte3 = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 250, "110");
        this.byte3.anchor.set(0.5);
        this.byte4 = game.add.sprite(Math.round(Math.random()*(game.width-100))+50, 450, "1");
        this.byte4.anchor.set(0.5);

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
        /* */

    },
    moveMonkey:function() {
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
        this.monkey.body.velocity.y = -350;
        }

        // wrap world coordinated so that you can warp from left to right and right to left
        this.game.wrap( this.monkey, this.monkey.width / 2, false );

        // track the maximum amount that the hero has travelled
        this.monkey.yChange = Math.max( this.monkey.yChange, Math.abs( this.monkey.y - this.monkey.yOrig ) );

        // if the hero falls below the camera view, gameover
        if( this.monkey.y > this.cameraYMin + this.game.height && this.monkey.alive ) {
        this.state.start( 'Play' );
        }

    },

    update: function(){

        if (!this.monkey.destroyed && this.monkey.alpha == 1){

            game.physics.arcade.collide(this.monkey, this.bytesGroup, function(m,b){
                // collide action between monkey and byte sprite
                var addScore = scoreKey[b.byteValue];
                score += addScore;
                this.scoreText.text = score.toString(); // update score
                if (b.alpha === 1){ // make byte disappear to alpha 0
                    var byteTween = game.add.tween(b).to({
                        alpha: 0
                    }, 200, Phaser.Easing.Bounce.Out, true);
                }
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.virusGroup, function(m,v){
                // collide condition between monkey and a virus sprite
                score -= 250;
                this.scoreText.text = score.toString(); // update score
                if (v.alpha === 1){
                    var virusTween = game.add.tween(v).to({
                        alpha: 0,
                        height: 75,
                        width: 75,
                    }, 500, Phaser.Easing.Bounce.Out, true);
                }
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.beerGroup, function(m,b){
                // collide condition between monkey and a beer sprite
                // temporarily make monkey jump lower
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.coffeeGroup, function(m,c){
                // collide condition between monkey and a coffee sprite
                // temporarily make monkey jump higher
            }, null, this);
            game.physics.arcade.collide(this.monkey, this.bananaGroup, function(m,b){
                // collide action between monkey and a banana sprite
                m.invincible = true;
            }, null, this);

            /* For reference only
            updateScore: function(addScore) {
                score += addScore;
                this.scoreText.text = score.toString();
            }*/
        }
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
    }

};


/* Sprites */

// Bytes
var Bytes = function(game, speed) {  // speed = moving of the screen elements when monkey jumps up
    var bytesArr = ["0", "0", "0",          // 1 byte   // value 0
                    "1", "1", "1", "1", "1",            // value 1
                    "10", "10", "10", "10", // 2 bytes  // value 2
                    "11", "11", "11",                   // value 3
                    "100", "100",                       // value 4
                    "101", "101",           // 3 bytes  // value 5
                    "110",                              // value 6
                    "111"];                             // value 7

    var byte = bytesArr[game.rnd.between(0,bytesArr.length)]; // randomized byte value
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, -100, byte);
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
var Virus = function(game, speed) { // speed = moving of the screen elements when monkey jumps up
    // var virusArr = [] // for future development of different types of viruses
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, -100, "virus");
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
var Beer = function(game, speed) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, -100, "beer");
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
var Coffee = function(game, speed) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, -100, "coffee");
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
var Banana = function(game, speed) { // speed = moving of the screen elements when monkey jumps up
    Phaser.Sprite.call(this, game, Math.round(Math.random()*(game.width-100))+50, -100, "banana");
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
