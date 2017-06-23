var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		game.load.image("title", "assets/sprites/title.png");
		game.load.image("playbutton", "assets/sprites/playbutton.png");
    	game.load.image("backsplash", "assets/sprites/backsplash.png");
		game.load.image("wall", "assets/sprites/wall.png");
		game.load.image("tree", "assets/images/trees_640.png");
		game.load.image("monkey", "assets/images/monkey_left_75x73.png");
        game.load.image("branch", "assets/images/branch.png")
		},
	create: function(){
		game.state.start("Titlescreen");
		console.log("preload started");
	}
}
