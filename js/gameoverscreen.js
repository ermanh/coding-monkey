var gameoverscreen = function(game){};
gameoverscreen.prototype = {
     create: function(){

        var finalScore = score.toString();
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"testbg");

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

        var continueButton = game.add.button(game.width / 2, game.height - 120, "playbutton", this.startGame);
            continueButton.anchor.set(0.5);
            continueButton.scale.setTo(0.25, 0.25);
        var tween = game.add.tween(continueButton).to({
                width: 180,
                height: 180
            }, 900, "Linear", true, 0, -1);
            tween.yoyo(true);
            console.log("info started");
        },
        startGame: function(){
            game.state.start("Playgame");
            console.log("continueButton pressed");
     }
}
