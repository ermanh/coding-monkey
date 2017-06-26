var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		game.load.image("title", "assets/sprites/title.png");
		game.load.image("playbutton", "assets/sprites/playbutton.png");
    	game.load.image("backsplash", "assets/sprites/backsplash.png");
		game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");
		game.load.image("monkey", "assets/images/monkey_left_75x73.png");
		game.load.image("tree", "assets/images/trees_640.png");
		game.load.image("branch", "assets/images/branch.png");
		game.load.image("beer", "assets/images/beer_50x62.png");
		game.load.image("coffee", "assets/images/coffee_50x50.png");
		game.load.image("virus", "assets/images/virus_50x50.png");
		game.load.image("banana", "assets/images/banana_50x50.png");
		game.load.image("0", "assets/images/0.png");
		game.load.image("1", "assets/images/1.png");
		game.load.image("10", "assets/images/10.png");
		game.load.image("11", "assets/images/11.png");
		game.load.image("100", "assets/images/100.png");
		game.load.image("101", "assets/images/101.png");
		game.load.image("110", "assets/images/110.png");
		game.load.image("111", "assets/images/111.png");
		},
	create: function(){
		game.state.start("Titlescreen");
		console.log("preload started");
	}
}
