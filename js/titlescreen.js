/*jshint esversion: 6 */

var byteGap = 60;

var titlescreen = function(game){};
titlescreen.prototype = {
    
    create: function() {

        game.stage.backgroundColor = 0x021b45;

        // Raining sprites
        this.bytesGroup = game.add.group();
        for (var i=0; i < 200; i++) {
            var bytesArr = ["0Particle","1Particle"];
            var choice = bytesArr[game.rnd.between(0,1)];
            var byte = game.add.sprite(Math.round(Math.random()*(game.width)), Math.round(Math.random()*(game.height)), choice);
            game.physics.enable(byte, Phaser.Physics.ARCADE);
            byte.anchor.set(0.5);
            byte.body.velocity.y = [200,200][game.rnd.between(0,1)];
            byte.body.velocity.x = Math.random() * [-1,1][game.rnd.between(0,1)];
            this.bytesGroup.add(byte);
        }
        var otherSprites = ['banana', 'beer', 'coffee', 'virus', 'virusSuper', 'banana', 'beer', 'coffee', 'virus', 'virusSuper'];
        spriteGroup = this.bytesGroup;
        otherSprites.forEach(function(item){
            var sprite = game.add.sprite(Math.round(Math.random()*(game.width)), Math.round(Math.random()*(game.height)), item);
            game.physics.enable(sprite, Phaser.Physics.ARCADE);
            sprite.anchor.set(0.5);
            sprite.scale.setTo(0.5,0.5);
            sprite.body.velocity.y = [200,200][game.rnd.between(0,1)];
            sprite.body.velocity.x = Math.random() * [-1,1][game.rnd.between(0,1)];
            spriteGroup.add(sprite);
        });

        //title - Coding Monkey
        var title = game.add.image(game.width / 2, 75, "title");
    	title.anchor.set(0.5,0);
        title.scale.setTo(0.6, 0.6);

        // Monkey image
        this.monkeyRun = game.add.sprite(game.width/4*3, 650, 'monkeyRun');
        this.monkeyRun.anchor.set(0.5);
        this.monkeyRun.animations.add('walk');
        this.monkeyRun.animations.play('walk', 1000, true);
        game.physics.enable(this.monkeyRun, Phaser.Physics.ARCADE);

        // Byte being chased image
        this.byteChased = game.add.sprite(game.width/4*3-165, 625, '101');
        this.byteChased.anchor.set(0.5);

        // Randomized monkey movement on screen
        this.timer = setInterval(this.changeJump(this.monkeyRun), 3000);

        // Play button
        var playButton = game.add.button(game.width / 2, game.height - 120, "playbutton", this.startInfo);
        playButton.tint = 0x7cff7c;
    	playButton.anchor.set(0.5);
        playButton.scale.setTo(1, 1);
        var tween = game.add.tween(playButton).to({
    		width: 120,
    		height:120
    	}, 1800, "Linear", true, 0, -1);
    	tween.yoyo(true);
    	console.log("titlescreen started");
    },

    update: function() {

        // Update monkey direction when crossing screen boundaries
        if (this.monkeyRun.x <= 0) {
            this.monkeyRun.x += game.width;
        } else if (this.monkeyRun.x > game.width) {
            this.monkeyRun.x -= game.width;
        }
        if (this.monkeyRun.y <= 0) {
            this.monkeyRun.y += game.height;
            this.monkeyRun.scale.x *= -1;
            this.monkeyRun.body.velocity.x *= -1;
        }

        // Update byte movement and direction according to monkey movement and direction
        if (this.monkeyRun.scale.x === -1) {
            this.byteChased.x = this.monkeyRun.x + 165;
        } else {
            this.byteChased.x = this.monkeyRun.x - 165;
        }
        this.byteChased.y = this.monkeyRun.y - 25;

        this.bytesGroup.forEach(function(item){
            if (item.y > game.height) {
                item.y -= game.height;
                item.x = Math.round(Math.random()*(game.width));
            }
        }, this);
    },

    startInfo: function() {
        game.state.start("Info");
        console.log("playButton pressed");
    },

    changeJump: function(monkey) {
        var speeds = [325,-325];
        var dir = game.rnd.between(0,1);
        if (dir === 0) {
            monkey.scale.x = -1;
        }
        monkey.body.velocity.x = speeds[dir];
        monkey.body.velocity.y = (Math.floor(Math.random()*-150))-100;
    }

};
