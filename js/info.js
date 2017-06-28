var info = function(game){};
info.prototype = {
    create: function(){
        //C: need to change background image
        var infoBG = game.add.tileSprite(0, 0, game.width, game.height,"infobg");

        //C: images spacing & sizes adjusted

        var howTo = game.add.image(game.width / 2, 10, "howTo");
            howTo.anchor.set(0.5,0);
            howTo.scale.setTo(0.7, 0.7);
        var useArrowToMove = game.add.image(30, 70, "useArrowToMove");
            useArrowToMove.anchor.set(0,0);
            useArrowToMove.scale.setTo(0.6, 0.6);
        var leftAndRight = game.add.image(405, 70, "leftAndRight");
        	leftAndRight.anchor.set(0,0);
            leftAndRight.scale.setTo(0.6, 0.6);
        var spacebar = game.add.image(game.width / 2, 120, "spacebar");
            spacebar.anchor.set(0.5,0);
            spacebar.scale.setTo(0.6, 0.6);

        var goal = game.add.image(game.width / 2, 175, "goal");
        	goal.anchor.set(0.5,0);
            goal.scale.setTo(0.6, 0.6);
        var getAsManyBytes = game.add.image(30, 230, "getAsManyBytes");
        	getAsManyBytes.anchor.set(0,0);
            getAsManyBytes.scale.setTo(0.6, 0.6);
        var asPossible = game.add.image(385, 230, "asPossible");
            asPossible.anchor.set(0,0);
            asPossible.scale.setTo(0.6, 0.6);

        var catchTheseTo = game.add.image(game.width / 2, 285, "catchTheseTo");
            catchTheseTo.anchor.set(0.5,0);
            catchTheseTo.scale.setTo(0.7, 0.7);

        var zero = game.add.image(30, 355, "0");
            zero.anchor.set(0.5,0);
        var one = game.add.image(70, 355, "1");
            one.anchor.set(0.5,0);
        var onezerozero = game.add.image(140, 355, "100");
            onezerozero.anchor.set(0.5,0);
        var onezeroone = game.add.image(230, 355, "101");
            onezeroone.anchor.set(0.5,0);
        var onezero = game.add.image(30, 385, "10");
            onezero.anchor.set(0.5,0);
        var oneone = game.add.image(90, 385, "11");
            oneone.anchor.set(0.5,0);
        var oneonezero = game.add.image(158, 385, "110");
            oneonezero.anchor.set(0.5,0);
        var oneoneone = game.add.image(248, 385, "111");
            oneoneone.anchor.set(0.5,0);

        var increaseBytes = game.add.image(270, 360, "increaseBytes");
            increaseBytes.anchor.set(0,0);
            increaseBytes.scale.setTo(0.6, 0.6);

        var virus = game.add.image(140, 440, "virus");
            virus.anchor.set(0.5,0);
        var virusSuper = game.add.image(210, 440, "virusSuper");
            virusSuper.anchor.set(0.5,0);
        var loseBytes = game.add.image(270, 440, "loseBytes");
        	loseBytes.anchor.set(0,0);
            loseBytes.scale.setTo(0.6, 0.6);

        var coffee = game.add.image(180, 510, "coffee");
        coffee.anchor.set(0.5,0);
        var jumpHigher = game.add.image(270, 510, "jumpHigher");
            jumpHigher.anchor.set(0,0);
            jumpHigher.scale.setTo(0.6, 0.6);

        var beer = game.add.image(180, 590, "beer");
            beer.anchor.set(0.5,0);
        var jumpLower = game.add.image(270, 590, "jumpLower");
        	jumpLower.anchor.set(0,0);
            jumpLower.scale.setTo(0.6, 0.6);

        var banana = game.add.image(180, 670, "banana");
            banana.anchor.set(0.5,0);
        var becomeInvincible = game.add.image(270, 670, "becomeInvincible");
            becomeInvincible.anchor.set(0,0);
            becomeInvincible.scale.setTo(0.6, 0.6);

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
