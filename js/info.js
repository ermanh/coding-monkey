var info = function(game){};
info.prototype = {
    create: function(){
        //need bg, continueButton, images and words
        //images and continueButton need to be added to preload
        //C: need to change background image
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"testbg");

        //C: need to arrange info image spacing & adjust sizes
        var info = game.add.image(game.width / 2, 20, "info");
        	info.anchor.set(0.5,0);
        var info0 = game.add.image(game.width / 2, 90, "info0");
        	info0.anchor.set(0.5,0);
        var info2 = game.add.image(game.width / 2, 150, "info2");
            info2.anchor.set(0.5,0);
        var info3 = game.add.image(game.width / 2, 210, "info3");
            info3.anchor.set(0.5,0);

        var zero = game.add.image(game.width / 2, 290, "0");
            zero.anchor.set(0.5,0);
        var one = game.add.image(game.width / 2, 290, "1");
            one.anchor.set(0.5,0);
        var onezero = game.add.image(game.width / 2, 290, "10");
            onezero.anchor.set(0.5,0);
        var oneone = game.add.image(game.width / 2, 290, "11");
            oneone.anchor.set(0.5,0);
        var info4 = game.add.image(game.width / 2, 350, "info4");
            info4.anchor.set(0.5,0);

        var virus = game.add.image(game.width / 2, 25, "virus");
            virus.anchor.set(0.5,0);
        var info5 = game.add.image(game.width / 2, 300, "info5");
        	info5.anchor.set(0.5,0);

        var coffee = game.add.image(game.width / 2, 25, "coffee");
            coffee.anchor.set(0.5,0);
        var info6 = game.add.image(game.width / 2, 350, "info6");
            info6.anchor.set(0.5,0);

        var beer = game.add.image(game.width / 2, 25, "beer");
            beer.anchor.set(0.5,0);
        var info7 = game.add.image(game.width / 2, 400, "info7");
        	info7.anchor.set(0.5,0);

        var banana = game.add.image(game.width / 2, 25, "banana");
            banana.anchor.set(0.5,0);
        var info8 = game.add.image(game.width / 2, 450, "info8");
            info8.anchor.set(0.5,0);

        //C: need to adjust size of image
        var continueButton = game.add.button(game.width / 2, game.height - 150, "continueButton", this.startGame);
        	continueButton.anchor.set(0.5);
        var tween = game.add.tween(continueButton).to({
        		width: 220,
        		height:220
        	}, 1500, "Linear", true, 0, -1);
        	tween.yoyo(true);
        	console.log("info started");
        },
        startGame: function(){
            game.state.start("Playgame");
        	console.log("continueButton pressed");
        }

}
