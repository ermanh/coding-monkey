# Game project - Coding Monkey
?? Link: 

# Group members
Corah Chiu, Herman Leung, Nick Tsai

# Game concept
Coding Monkey is an endless runner game. It can be played on the computer and ??????? on any mobile device.
The hero can move forward in the game infinitely by 'jumping upwards'. It moves up and down automatically according to Phaser's physics and gravity setup, while its environment moves downwards with reference to the hero's coordination or other special conditions (such as the hero touching a special item sprite). The hero would appear to be jumping upwards as it lands on barriers and bounce back. The hero collect reward items to score points and loses points when it collides with penalty items. Colliding with other special effect items will have different effects on the hero and its interaction with other sprite items. The hero can shoot certain item sprites. The game becomes more difficult as it goes on, or when the hero collides with certain special item sprites. The game is over when the hero moves lower than the game height (falls out of the screen), or when it hits a certain special item sprites. The user controls the hero sprite by using the keyboard on the computer,??????? and by tilting or tapping on a mobile device.

# Gameplay
The goal of the game is for the Coding Monkey (the hero) to collect as many bits as possible. 

## About the Sprites
### 1. The Monkey has the ability to:
- jump upwards
- bounce upwards when it lands on a branch (barrier sprite)
- collect bits (reward items) to increase its bytes (score)
- collide with special item sprites to change its interaction with the environments and the other sprites

### 2. Other sprites and their effects on collision with Monkey:
#### a. Barrier sprite:
- Branches \- Monkey can jump upwards
#### b. Reward sprite:
- Bits (0, 1, 10, 11, 100, 101, 110, 111) \- increase bytes
#### c. Penalty sprites:
- Viruses (purple viruse, red super virus) \- lose bytes
- Trojan horse \- Monkey dies and the game is over
#### d. Special item sprites: 
- Coffee \- Monkey gets more energy, spins around and jumps higher
- Beer \- Monkey gets drunk, spins around, and can't collect bits
- Banana \- Monkey becomes invicible, and doesn't lose bytes or die when it collides with Viruses or the Trojan Horse

### 3. Scoring sprite:
- Bytes bar \- number increases or decreases depending on which sprite the Monkey collides with

## The game is over when:
- The Monkey falls below the screen view.
- The Monkey dies from touching the Trojan Horse

## Game control:
### 1. On computer:
- Use arrows to move left and right, and spacebar to shoot penalty and special item sprites.
### 2. On mobile device:
- Move Monkey left or right by tilting, and shoot penalty and special item sprites by tapping screen.

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
- Has a background color, raining some sprite images, and the Monkey running across the screen
- Has a play button that leads to the info screen
## 4. Info
- Shows instructions of how to play the game
- Has a play button that leads to the game screen
## 5. Play game
- Game played
- The Monkey jumps and interacts with other sprites
- The background of tree backgroundtiles
## 6. Game over
1. Group sprites & Bg tiles:
  - move downwards as Monkey jumps
  - destroyed when out of screen
2. Scoring: bytes bar
  - increase with catching 0's & 1's
  - decrease with catching bugs $ virus
3. Monkey can jump across screen

# Resources used
- Phaser
- Javascript
- Music download
- Images download
- Editor - Atom
- Image editor - Inkscape

# The process of making the game

# To-do
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
! 11. instructions

# Diary (Done/Goal)
## 23-6-2017 (Fri)
#### Corah
- ! Added code for Accelerometer, NEED TESTING

- ! Added code for branches (create and destroy), NEED TESTING

- ! Haven't coded how Monkey will stand on branches

#### Herman
#### Nick


## 24-6-2017, 25-6-2017 (Weekend)
### To-do
#### Corah

- titlescren
- instructions
- gameoverscreen
- playgame: branches - NO PUSHING

#### Herman
- wait for Nick, playgame

- sprite items (bytes, virus, beer, coffee, banana)
#### Nick
- playgame

- platform, auto jump, tree bgtile

# Problems encountered

# ????? Things learnt
Reduce number of images used by combining them into one image if possible.

# Possible improvement/upgrade
Elements, special item sprites


### Music credit
http://www.bensound.com, http://www.noiseforfun.com
### Image credit
https://www.iconfinder.com/
