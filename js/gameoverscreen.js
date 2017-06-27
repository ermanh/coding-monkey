var gameoverscreen = function(game){};
gameoverscreen.prototype = {
create: function(){
    var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"testbg");

    game.add.bitmapText(game.width / 2, 50 , "font", "Your score", 48).anchor.x = 0.5;
    game.add.bitmapText(game.width / 2, 150 , "font", score.toString(), 72).anchor.x = 0.5;

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
