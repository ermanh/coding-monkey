var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		game.load.image("title", "assets/sprites/title.png");
		game.load.image("playbutton", "assets/sprites/playbutton.png");//C:changed button image
		game.load.image("testbg", "testbg.png");//C: need to change bg image
		game.load.image("continueButton", "assets/sprites/continueButton.png")

		//C: info text images:
		game.load.image("info", "assets/images/info.png")
		game.load.image("info0", "assets/images/info0.png")
		game.load.image("info2", "assets/images/info2.png")
		game.load.image("info3", "assets/images/info3.png")
		game.load.image("info4", "assets/images/info4.png")
		game.load.image("info5", "assets/images/info5.png")
		game.load.image("info6", "assets/images/info6.png")
		game.load.image("info7", "assets/images/info7.png")
		game.load.image("info8", "assets/images/info8.png")

		game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");
		game.load.image("monkey", "assets/images/monkey_left_75x73.png");
		game.load.image("tree", "assets/images/trees_640.png");
		game.load.image("branch", "assets/images/branch.png");
		game.load.image("ground", "assets/images/platform.png");
		game.load.image("beer", "assets/images/beer_50x62.png");
		game.load.image("coffee", "assets/images/coffee_50x50.png");
		game.load.image("virus", "assets/images/virus_50x50.png");
		game.load.image("virusSuper", "assets/images/virusSuper_50x50.png");
		game.load.image("banana", "assets/images/banana_50x50.png");
		game.load.image("0", "assets/images/0.png");
		game.load.image("1", "assets/images/1.png");
		game.load.image("10", "assets/images/10.png");
		game.load.image("11", "assets/images/11.png");
		game.load.image("100", "assets/images/100.png");
		game.load.image("101", "assets/images/101.png");
		game.load.image("110", "assets/images/110.png");
		game.load.image("111", "assets/images/111.png");
		game.load.image("bananaDart", "assets/images/bananaDart_25x27.png");
		game.load.image("horse", "assets/images/horse_75x74.png");
		},
	create: function(){
		game.state.start("Titlescreen");
		console.log("preload started");
	}
};
