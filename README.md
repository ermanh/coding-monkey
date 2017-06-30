# Game project - Coding Monkey
Link: nickcodingmonkey.surge.sh

# Group members
Corah Chiu, Herman Leung, Nick Tsai

# Game concept
Coding Monkey is an endless runner game. It is designed to be played on a computer as well as mobile device.
The hero can move forward in the game infinitely by jumping upwards. It moves up and down automatically according to Phaser's physics and gravity setup, while its environment moves downwards with reference to the hero's coordination or other special conditions (such as the hero touching a special item sprite). The hero would appear to be jumping upwards as it lands on barriers and bounce back. The hero collects reward items to score points and loses points when it collides with penalty items. Colliding with other special effect items will have different effects on the hero and its interaction with other sprite items. The hero can shoot certain item sprites. The game becomes more difficult as it goes on, or when the hero collides with certain special item sprites. The game is over when the hero falls below the game stage out of the screen, or when it hits certain special item sprites. 

# Gameplay
The goal of the game is for the Coding Monkey (the hero) to collect as many bits as possible. 

## About the Sprites
### 1. The Monkey has the ability to:
- jump upwards
- bounce upwards when it touches a branch
- collect bits (reward items) to increase its bytes (score)
- collide with special item sprites to change its interaction with the environment and other sprites

### 2. Other sprites and their effects on collision or overlap with Monkey:
#### a. Barrier sprite:
- Branches \- Monkey can jump upwards
#### b. Reward sprite:
- Bits (0, 1, 10, 11, 100, 101, 110, 111) \- Increase bytes
#### c. Penalty sprites:
- Viruses (purple virus, red super virus) \- Lose bytes
- Trojan horse \- Monkey dies and the game is over
#### d. Special item sprites: 
- Coffee \- Monkey gets more energy, jumps higher, gets bigger
- Beer \- Monkey gets drunk, spins around, and knocks away bits rather than collect them
- Banana \- Monkey becomes invicible; collision effects with viruses, coffee, beer, and trojan horse are temporarily disabled

### 3. Scoring sprite:
- Bytes count (bottom right) \- number increases or decreases depending on which sprite the Monkey collides with

## The game is over when:
- The Monkey falls below the screen view
- The Monkey dies from touching the Trojan Horse

## Game control:
### 1. On computer:
- Use arrows to move left and right, and spacebar to shoot penalty and special item sprites.

# States included in the game and their functionalities
Boot, preload, title, info, play game, game over
## 1. Boot
- Game boots
## 2. Preload
- Images and audios load into the game
- Game loads
- Loading bar, percentage count and running monkey image show that the game is loading
## 3. Title
- Shows the name of the game
- Has a background color, raining some sprite images, and the Monkey chasing a bit across the screen
- Has a play button that leads to the info screen
## 4. Info
- Shows instructions of how to play the game
- Has a play button that leads to the game screen
## 5. Play game
- Game starts
- The Monkey jumps and interacts with other sprites. It can jump through one side of the screen to go to the other side
- Sprites except the Monkey are semi-randomly generated on the screen, and destroyed when they have moved out of the screen
- The tree background tiles moves along the game
## 6. Game over
- Score is recorded
- Has a restart button that leads back to the game screen

# Resources used
- Javascript library: Phaser
- Music and images downloaded from the Internet and some images adapted
- Text editor: Atom
- Image editors: Inkscape, Gimp

# ???????? The process of making the game
1. Auto jump
2. Move monkey left to right on keyboard
3. Accelerometer
4. Generating random branches
5. Generating random item sprites
6. Set up bytes count, reward and penalty items (\*different scoring & penalty)
7. Set up helping/special items
8. titlescreen
9. gamoverscreen
10. music
11. instructions

# ??????? Problems encountered

# ????? Things learnt
Reduce number of images used by combining them into one image if possible.

# ??????? Possible improvement/upgrade
Elements, special item sprites
Working on the mobile version

# Credits
### Music credits
http://www.bensound.com, http://www.noiseforfun.com
### Image credits
- picturetopeople.org/text_generator/others/transparent/transparent-text-generator.html \- title font ("Coding Monkey")
- iconfinder.com \- star
- flaticons.net \- banana dart
- freeiconspng.com \- banana, coffee, trojan horse (with modifications)
- weclipart.com \- grass
- iconscout.com \- tree trunk (adaptation of part of an image by Danil Polshin)
- icons8.com \- viruses
- Twemoji-1.0 (Twitter emoji) \- monkey (with modifications for animation effects)

