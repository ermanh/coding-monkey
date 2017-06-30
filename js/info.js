var info = function(game){};
info.prototype = {
    create: function(){

        var center = game.width/2;
        var spriteStart = game.width/4-20;
        var spriteTextStart = game.width/2-45;
        var descriptionSize = 40;
        game.stage.backgroundColor = 0x021b45;

        var items = game.add.bitmapText(center, 65 , "font", "ITEMS", 60);
        items.anchor.x = 0.5;
        items.tint = 0x00a000;

        game.add.sprite(spriteStart, 170, "0").anchor.y = 0.5;
        game.add.sprite(spriteStart+45, 170, "1").anchor.y = 0.5;
        game.add.bitmapText(spriteTextStart, 170, "font", "earn bytes", descriptionSize).anchor.y = 0.5;

        var virus = game.add.sprite(spriteStart, 230, "virus");
        virus.anchor.y = 0.5;
        virus.scale.setTo(0.8,0.8);
        var virusSuper = game.add.sprite(spriteStart+60, 230, "virusSuper");
        virusSuper.anchor.y = 0.5;
        virusSuper.scale.setTo(0.8,0.8);
        game.add.bitmapText(spriteTextStart, 230, "font", "lose bytes", descriptionSize).anchor.y = 0.5;

        var banana = game.add.sprite(spriteStart, 290, "beer");
        banana.anchor.y = 0.5;
        banana.scale.setTo(0.8,0.8);
        game.add.bitmapText(spriteTextStart, 290, "font", "get drunk", descriptionSize).anchor.y = 0.5;

        var coffee = game.add.sprite(spriteStart, 350, "coffee");
        coffee.anchor.y = 0.5;
        coffee.scale.setTo(0.85,0.85);
        game.add.bitmapText(spriteTextStart, 350, "font", "get energy", descriptionSize).anchor.y = 0.5;

        var banana = game.add.sprite(spriteStart, 410, "banana");
        banana.anchor.y = 0.5;
        banana.scale.setTo(0.85,0.85);
        game.add.bitmapText(spriteTextStart, 410, "font", "get immunity", descriptionSize).anchor.y = 0.5;

        var play = game.add.bitmapText(center, 480 , "font", "PLAY", 60);
        play.anchor.x = 0.5;
        play.tint = 0x00a000;

        var mobile = game.add.bitmapText(game.width/2.5, 560 , "font", "mobile", descriptionSize);
        mobile.anchor.x = 0.5;
        mobile.tint = 0xfc5800;
        var desktop = game.add.bitmapText(game.width/3*2.1, 560 , "font", "desktop", descriptionSize);
        desktop.anchor.x = 0.5;
        desktop.tint = 0x0083ff;

        game.add.bitmapText(game.width/10, 620 , "font", "MOVE", descriptionSize);
        var tilt = game.add.bitmapText(game.width/2.6, 620 , "font", "tilt", descriptionSize);
        tilt.anchor.x = 0.5;
        tilt.tint = 0xffa777;
        var leftRight = game.add.bitmapText(game.width/3*2.1, 620 , "font", "left, right", descriptionSize)
        leftRight.anchor.x = 0.5;
        leftRight.tint = 0x60e1ff;

        game.add.bitmapText(game.width/10, 680 , "font", "SHOOT", descriptionSize);
        var tap = game.add.bitmapText(game.width/2.6, 680 , "font", "tap", descriptionSize);
        tap.anchor.x = 0.5;
        tap.tint = 0xffa777;
        var clickSpace = game.add.bitmapText(game.width/3*2.1, 680 , "font", "click / space", descriptionSize)
        clickSpace.anchor.x = 0.5;
        clickSpace.tint = 0x60e1ff;

        // Play button
        var playButton = game.add.button(game.width / 2, game.height - 120, "playbutton", this.startGame);
        playButton.tint = 0x7cff7c;
    	playButton.anchor.set(0.5);
        playButton.scale.setTo(1, 1);
        var tween = game.add.tween(playButton).to({
    		width: 120,
    		height:120
    	}, 1800, "Linear", true, 0, -1);
    	tween.yoyo(true);
        console.log("info started");
    },
    startGame: function(){
        game.state.start("Playgame");
        console.log("playButton pressed");
    }
}
