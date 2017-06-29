var game;
window.onload = function() {
	game = new Phaser.Game(640, 960);
	game.state.add("Boot", boot);
	game.state.add("Preload", preload);
	game.state.add("Titlescreen", titlescreen);
	game.state.add("Info", info); //C: new info screen
	game.state.add("Playgame", playgame);
	game.state.add("GameOverScreen", gameoverscreen);
	game.state.start("Boot");
};

var boot = function(game){};
boot.prototype = {
	preload: function(){
		game.load.image("loading","assets/sprites/loading.png");
		game.load.spritesheet("loadingMonkey", "assets/images/monkey_sheet.png", 180, 100, 16);
		game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");
	},
	create: function(){
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.maxWidth = this.game.width;
    	this.scale.maxHeight = this.game.height;
		game.state.start("Preload");
	}
};
