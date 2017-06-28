var gameoverscreen = function(game){};
gameoverscreen.prototype = {

     create: function(){

        var finalScore = score.toString();
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"titlebg");

        if (finalScore < 0){
            game.add.bitmapText(game.width / 2, 115 , "font", "Stop drinking so", 80).anchor.x = 0.5;
            game.add.bitmapText(game.width / 2, 205 , "font", "much beer!", 80).anchor.x = 0.5;
        } else if (finalScore <= 500){
            game.add.bitmapText(game.width / 2, 190 , "font", "Drink more coffee!", 65).anchor.x = 0.5;
        } else if (finalScore <= 800){
            game.add.bitmapText(game.width / 2, 180 , "font", "Keep coding!", 85).anchor.x = 0.5;
        } else if (finalScore > 800){
            game.add.bitmapText(game.width / 2, 115 , "font", "You are the", 80).anchor.x = 0.5;
            game.add.bitmapText(game.width / 2, 205 , "font", "Monkey King!", 80).anchor.x = 0.5;
        }
        game.add.bitmapText(game.width / 2, 350 , "font", "Bytes:", 120).anchor.x = 0.5;
        game.add.bitmapText(game.width / 2, 490 , "font", finalScore, 120).anchor.x = 0.5;
        game.add.bitmapText(game.width -220, game.height -50 , "font", "Music credit: http://www.bensound.com, http://www.noiseforfun.com", 12).anchor.x = 0.5;

        // Monkey image
        var monkeyImage = game.add.image(400, 630, "monkey");
            monkeyImage.anchor.set(0.5,0);
        var monkeyTween = game.add.tween(monkeyImage).to({
                y: 450
            }, 700, "Linear", true, 0, -1);
            monkeyTween.yoyo(true);

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
};
