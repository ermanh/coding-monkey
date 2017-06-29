var info = function(game){};
info.prototype = {
    create: function(){
        // Background image
        var infoBG = game.add.tileSprite(0, 0, game.width, game.height,"infobg");

        // Play button
        var playButton = game.add.button(game.width / 2, game.height - 120, "playbutton", this.startGame);
        playButton.anchor.set(0.5);
        playButton.scale.setTo(0.25, 0.25);
        var tween = game.add.tween(playButton).to({
        		width: 180,
        		height: 180
        	}, 900, "Linear", true, 0, -1);
        tween.yoyo(true);
        console.log("info started");
    },
    startGame: function(){
        game.state.start("Playgame");
        console.log("playButton pressed");
    }
}
