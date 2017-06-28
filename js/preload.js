var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingBar = this.add.sprite(game.width / 2, game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		game.load.image("title", "assets/sprites/title.png");
		game.load.image("playbutton", "assets/sprites/playbutton.png");
		game.load.image("titlebg", "assets/images/titlebg.png");
		game.load.image("infobg", "assets/images/infobg.png");


		//C: info text images:
		game.load.image("goal", "assets/images/info.png")
		game.load.image("getAsManyBytes", "assets/images/info0.png")
		game.load.image("asPossible", "assets/images/info2.png")
		game.load.image("catchTheseTo", "assets/images/info3.png")
		game.load.image("increaseBytes", "assets/images/info4.png")
		game.load.image("loseBytes", "assets/images/info5.png")
		game.load.image("jumpHigher", "assets/images/info6.png")
		game.load.image("jumpLower", "assets/images/info7.png")
		game.load.image("becomeInvincible", "assets/images/info8.png")
		game.load.image("howTo", "assets/images/info_howto.png")
		game.load.image("useArrowToMove", "assets/images/info_usearrowtomove.png")
		game.load.image("leftAndRight", "assets/images/info_leftandright.png")
		game.load.image("spacebar", "assets/images/info_spacebar.png")

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

		game.load.image("star", "assets/images/star.png");

		game.load.image("horse", "assets/images/horse_75x74.png");

		//audio
		game.load.audio("bgmusic", "assets/audio/bensound-funkyelement.mp3")
		game.load.audio("touchHorse", "assets/audio/horse.wav");
		game.load.audio("touchVirus", "assets/audio/virus.wav");
		game.load.audio("touchBanana", "assets/audio/banana.wav");
		game.load.audio("touchCoffee", "assets/audio/coffee.wav");
		game.load.audio("touchBeer", "assets/audio/beer.wav");
		game.load.audio("touchByte", "assets/audio/bytes.wav");
		game.load.audio("dartHit", "assets/audio/darthit.wav");
		game.load.audio("fallToDeath", "assets/audio/fall.wav");
		game.load.audio("shootDart", "assets/audio/shootdart.wav");
		game.load.audio("horseOnScreen", "assets/audio/horseonscreen.wav");

		},
	create: function(){
		game.state.start("Titlescreen");
		console.log("preload started");
	}
};
