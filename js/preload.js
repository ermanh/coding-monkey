var preload = function(game){};
preload.prototype = {
	preload: function(){
		var loadingMonkey = this.add.sprite(game.width / 2-70, game.height / 2, "loadingMonkey");
		loadingMonkey.animations.add('walk');
		loadingMonkey.animations.play('walk', 1000, true);

		var loadingBar = this.add.sprite(game.width / 2, game.height / 2+150, "loading");
		loadingBar.tint = 0x098216;
		loadingBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(loadingBar);
		//percentage
		var loadingText = game.add.bitmapText(game.width / 2-150, 650,'font', 'loading... 0%',50);
		loadingText.tint = 0x098216;
        var progressDisplay = 0;
        var timerEvt = game.time.events.loop(100, function (){
            if(progressDisplay < 100){
                if(progressDisplay < game.load.progress){
                    loadingText.text = 'loading... '+(++progressDisplay)+'%';
                }
            }else{
                loadingText.text = 'Ready, Go!';
                game.time.events.remove(timerEvt);
            }
        }, this);

		game.load.image("title", "assets/sprites/title.png");
		game.load.image("playbutton", "assets/sprites/playbutton.png");
		game.load.image("titlebg", "assets/images/titlebg.png");
		game.load.image("infobg", "assets/images/infobg.png");
		game.load.image("monkey", "assets/images/monkey_left_75x73.png");
		game.load.image("monkeyBig", "assets/images/monkey_left_100x97.png");
		game.load.image("tree", "assets/images/trees_640.png");
		game.load.image("branch", "assets/images/branch.png");
		game.load.image("ground", "assets/images/platform.png");
		game.load.image("beer", "assets/images/beer_50x62.png");
		game.load.image("coffee", "assets/images/coffee_50x50.png");
		game.load.image("virus", "assets/images/virus_50x50.png");
		game.load.image("virusParticle", "assets/images/virus_35x35.png");
		game.load.image("virusSuper", "assets/images/virusSuper_50x50.png");
		game.load.image("virusSuperParticle", "assets/images/virusSuper_35x35.png");
		game.load.image("banana", "assets/images/banana_50x50.png");
		game.load.image("0", "assets/images/0.png");
		game.load.image("1", "assets/images/1.png");
		game.load.image("10", "assets/images/10.png");
		game.load.image("11", "assets/images/11.png");
		game.load.image("100", "assets/images/100.png");
		game.load.image("101", "assets/images/101.png");
		game.load.image("110", "assets/images/110.png");
		game.load.image("111", "assets/images/111.png");
		game.load.image("0Particle", "assets/images/0_small.png");
		game.load.image("1Particle", "assets/images/1_small.png");
		game.load.image("bananaDart", "assets/images/bananaDart_25x27.png");
		game.load.image("star", "assets/images/star.png");
		game.load.image("horse", "assets/images/horse_75x74.png");
		game.load.image("horseParticle", "assets/images/horse_50x49.png");

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
