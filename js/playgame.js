var tunnelWidth = 440;
var monkeyverticalhigh = 100;
var shipMoveDelay = 0;
var branchSpeed = 0; //not sure about the speed as it will move with monkey
var branchGap = 60;

var playgame = function(game) {};
playgame.prototype = {
    create: function(){
  		//var tintColor = bgColors[game.rnd.between(0, bgColors.length - 1)];
      game.stage.backgroundColor = "#4488AA";
  		var tunnelBG = game.add.tileSprite(0, 0, game.width, game.height, "tree");
  		//tunnelBG.tint = tintColor;
      console.log("playgame started");

      //create monkey
      this.monkey = game.add.sprite(game.width/2, game.height-50, "monkey");
      //this.monkey.side = 0;
      this.monkey.anchor.set(0.5);
      this.game.physics.enable(this.monkey, Phaser.Physics.ARCADE);
      this.monkey.canMove = true;
      game.input.onDown.add(this.moveMonkey, this);

      // //create branches
      // this.branchGroup = game.add.group();
      // var branch = new Branch(game, branchSpeed);
      // game.add.existing(branch);
      // this.branchGroup.add(branch);
      this.branchGroup = game.add.group();
      this.addBranch(this.branchGroup);

      },
      //create branches
      addBranch: function(group){
        var branch = new Branch(game, branchSpeed);
        game.add.existing(branch);
        group.add(branch);
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


}

// Generate branches
var Branch = function (game, speed) {
    var positions = [Math.random()*(280-40)+40, Math.random()*(600-360)+360];
	var position = game.rnd.between(0, 1);
	Phaser.Sprite.call(this, game, positions[position], -100, "branch");
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
    if(this.placeBranch && this.y > branchGap){
		this.placeBranch = false;
		playgame.prototype.addBranch(this.parent);
	}
}
