var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		},
	create: function(){
		this.game.state.start("TitleScreen");
	}
}
