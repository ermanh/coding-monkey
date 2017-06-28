var titlescreen = function(game){};
titlescreen.prototype = {
    create: function(){
        //C: need to change background image
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height,"titlebg");

        //title - Coding Monkey
        var title = game.add.image(game.width / 2, 60, "title");
        	title.anchor.set(0.5,0);
            title.scale.setTo(0.6, 0.6);

        // Monkey image
        var monkeyImage = game.add.image(game.width / 2, 650, "monkey");
            monkeyImage.anchor.set(0.5,0);
        var monkeyTween = game.add.tween(monkeyImage).to({
        		y: 400
        	}, 1100, "Linear", true, 0, -1);
            monkeyTween.yoyo(true);

        //Other images (for making bg image)
        // var branchImage = game.add.image(120, 355, "branch");
        //     branchImage.anchor.set(0.5,0);
        //     var branchImage = game.add.image(570, 480, "branch");
        //         branchImage.anchor.set(0.5,0);
        //         var branchImage = game.add.image(390, 700, "branch");
        //             branchImage.anchor.set(0.5,0);
        //             var branchImage = game.add.image(250, 235, "branch");
        //                 branchImage.anchor.set(0.5,0);
        //
        // var zero = game.add.image(360, 355, "0");
        //     zero.anchor.set(0.5,0);
        // var one = game.add.image(452, 600, "1");
        //     one.anchor.set(0.5,0);
        // var onezerozero = game.add.image(321, 789, "100");
        //     onezerozero.anchor.set(0.5,0);
        // var onezeroone = game.add.image(500, 452, "101");
        //     onezeroone.anchor.set(0.5,0);
        // var onezero = game.add.image(96, 173, "10");
        //     onezero.anchor.set(0.5,0);
        // var oneone = game.add.image(90, 385, "11");
        //     oneone.anchor.set(0.5,0);
        // var oneonezero = game.add.image(400, 876, "110");
        //     oneonezero.anchor.set(0.5,0);
        // var oneoneone = game.add.image(558, 234, "111");
        //     oneoneone.anchor.set(0.5,0);
        // var virus = game.add.image(446, 180, "virus");
        //     virus.anchor.set(0.5,0);
        // var virusSuper = game.add.image(210, 617, "virusSuper");
        //     virusSuper.anchor.set(0.5,0);
        // var coffee = game.add.image(400, 510, "coffee");
        //     coffee.anchor.set(0.5,0);
        // var beer = game.add.image(130, 680, "beer");
        //     beer.anchor.set(0.5,0);
        // var banana = game.add.image(180, 256, "banana");
        //     banana.anchor.set(0.5,0);


        // playbutton
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
