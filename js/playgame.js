var tunnelWidth = 440;
var monkeyverticalhigh = 100;
var monkeyMoveDelay = 0;
var playgame = function(game) {};
playgame.prototype = {
    create: function(){
  		game.stage.backgroundColor = "#4488AA";
  		var tunnelBG = game.add.tileSprite(0, 0, game.width, game.height, "tree");

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


        //this.tunnelBG.tilePosition.y += 50;

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
          this.monkey.body.velocity.x = -2000;
        } else if( this.cursor.right.isDown ) {
          this.monkey.body.velocity.x = 2000;
        } else {
          this.monkey.body.velocity.x = 0;
        }

        // handle hero jumping
        if( this.cursor.up.isDown && this.monkey.body.touching.down ) {
          this.monkey.body.velocity.y = -350;
        }


        // wrap world coordinated so that you can warp from left to right and right to left
        this.world.wrap( this.monkey, this.monkey.width / 2, false );

        // track the maximum amount that the hero has travelled
        this.monkey.yChange = Math.max( this.monkey.yChange, Math.abs( this.monkey.y - this.monkey.yOrig ) );

        // if the hero falls below the camera view, gameover
        if( this.monkey.y > this.cameraYMin + this.game.height && this.monkey.alive ) {
           game.state.start("GameOverScreen");
       }
    },



}
