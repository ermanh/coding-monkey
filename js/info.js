var info = function(game){};
info.prototype = {
    create: function(){
        //C: need to change background image
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"testbg");

        //C: images spacing & sizes adjusted
        var info = game.add.image(game.width / 2, 20, "info");
        	info.anchor.set(0.5,0);
            info.scale.setTo(0.8, 0.8);
        var info0 = game.add.image(game.width / 2, 75, "info0");
        	info0.anchor.set(0.5,0);
            info0.scale.setTo(0.8, 0.8);
        var info2 = game.add.image(game.width / 2, 130, "info2");
            info2.anchor.set(0.5,0);
            info2.scale.setTo(0.8, 0.8);

        var info3 = game.add.image(game.width / 2, 200, "info3");
            info3.anchor.set(0.5,0);
            info3.scale.setTo(0.7, 0.7);

        var zero = game.add.image(30, 260, "0");
            zero.anchor.set(0.5,0);
        var one = game.add.image(70, 260, "1");
            one.anchor.set(0.5,0);
        var onezerozero = game.add.image(140, 260, "100");
            onezerozero.anchor.set(0.5,0);
        var onezeroone = game.add.image(230, 260, "101");
            onezeroone.anchor.set(0.5,0);
        var onezero = game.add.image(30, 290, "10");
            onezero.anchor.set(0.5,0);
        var oneone = game.add.image(90, 290, "11");
            oneone.anchor.set(0.5,0);
        var oneonezero = game.add.image(160, 290, "110");
            oneonezero.anchor.set(0.5,0);
        var oneoneone = game.add.image(250, 290, "111");
            oneoneone.anchor.set(0.5,0);

        var info4 = game.add.image(280, 255, "info4");
            info4.anchor.set(0,0);
            info4.scale.setTo(0.7, 0.7);

        var virus = game.add.image(180, 350, "virus");
            virus.anchor.set(0.5,0);
        var info5 = game.add.image(240, 345, "info5");
        	info5.anchor.set(0,0);
            info5.scale.setTo(0.7, 0.7);

        var coffee = game.add.image(180, 460, "coffee");
        coffee.anchor.set(0.5,0);
        var info6 = game.add.image(240, 460, "info6");
            info6.anchor.set(0,0);
            info6.scale.setTo(0.7, 0.7);

        var beer = game.add.image(180, 570, "beer");
            beer.anchor.set(0.5,0);
        var info7 = game.add.image(240, 570, "info7");
        	info7.anchor.set(0,0);
            info7.scale.setTo(0.7, 0.7);

        var banana = game.add.image(180, 685, "banana");
            banana.anchor.set(0.5,0);
        var info8 = game.add.image(240, 685, "info8");
            info8.anchor.set(0,0);
            info8.scale.setTo(0.7, 0.7);

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
