var titlescreen = function(game){};
titlescreen.prototype = {
    create: function(){
        //C: need to change background image
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"testbg");

        //C: need to add title
        var title = game.add.image(game.width / 2, 60, "title");
        	title.anchor.set(0.5,0);
            title.scale.setTo(0.6, 0.6);

        //C: need to adjust size of button image at beginning
        var playButton = game.add.button(game.width / 2, game.height - 120, "playbutton", this.startInfo);
        	playButton.anchor.set(0.5);
            playButton.scale.setTo(0.25, 0.25);

        var tween = game.add.tween(playButton).to({
        		width: 180,
        		height:180
        	}, 900, "Linear", true, 0, -1);
        	tween.yoyo(true);
        	console.log("titlescreen started");
    },
    startInfo: function(){
        game.state.start("Info");
        console.log("playButton pressed");
    }


}
