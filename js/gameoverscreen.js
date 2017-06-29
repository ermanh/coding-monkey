var gameoverscreen = function(game){};
gameoverscreen.prototype = {

     create: function(){

        game.stage.backgroundColor = 0x1a4ca3;
        var finalScore = score.toString();

        // Words printed according to final score
        if (finalScore < 0){
            game.add.bitmapText(game.width / 2, 80 , "font", "Stop drinking", 80).anchor.x = 0.5;
            game.add.bitmapText(game.width / 2, 170 , "font", "so much beer!", 80).anchor.x = 0.5;
        } else if (finalScore <= 3000){
            game.add.bitmapText(game.width / 2, 80 , "font", "Drink more", 80).anchor.x = 0.5;
            game.add.bitmapText(game.width / 2, 170 , "font", "coffee!", 80).anchor.x = 0.5;
        } else if (finalScore <= 10000){
            game.add.bitmapText(game.width / 2, 145 , "font", "Keep coding!", 80).anchor.x = 0.5;
        } else if (finalScore > 10000){
            game.add.bitmapText(game.width / 2, 80 , "font", "You are the", 80).anchor.x = 0.5;
            game.add.bitmapText(game.width / 2, 170 , "font", "Monkey King!", 80).anchor.x = 0.5;
        }
        var bytesText = game.add.bitmapText(game.width / 2, 300 , "font", "Bytes:", 120);
        bytesText.anchor.x = 0.5;
        bytesText.tint = 0x00a000;
        var scoreText = game.add.bitmapText(game.width / 2, 430 , "font", finalScore, 120);
        scoreText.anchor.x = 0.5;
        scoreText.tint = 0x00a000;
        game.add.bitmapText(game.width -210, game.height -30, "font", "Music credit: http://www.bensound.com, http://www.noiseforfun.com", 12).anchor.x = 0.5;

        // Monkey image
        this.monkeyRun = game.add.sprite(game.width/2+35, 650, 'monkeyRun');
        this.monkeyRun.anchor.set(0.5);
        this.monkeyRun.animations.add('walk');
        this.monkeyRun.animations.play('walk', 1000, true);
        //game.physics.enable(this.monkeyRun, Phaser.Physics.ARCADE);
        //this.monkeyRun.body.velocity.x = -350;

        var playButton = game.add.button(game.width / 2, game.height - 150, "restart", this.startGame);
        playButton.tint = 0x82abed;
        playButton.anchor.set(0.5);
        playButton.scale.setTo(1.2, 1.2);
        var tween = game.add.tween(playButton).to({
            width: 135,
            height: 135
        }, 1800, "Linear", true, 0, -1);
        tween.yoyo(true);
        console.log("info started");
    },

    startGame: function(){
        game.state.start("Playgame");
        console.log("playButton pressed");
    }
};
