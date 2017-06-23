An asterisk* means the code can be considered in an upgrade at a later point.

# Game concept
Goal: To collect as much code (0's & 1's) as possible.

Gameplay: 

Coding Monkey collecting code (0's & 1's) among branches and trying to survive (not fall). 

Scoring in bytes. 

Avoiding bugs & virus. 

Coffee, beer & banana change Monkey's jumping ability.

Monkey jumps vertically upwards. Can land on branches.

# States
Boot, preload, title screen, etc.

# Background
Environment: Tree trunk & branches

Bg tiles: Plain bg & tree trunk

# Sprites
1. Main character: Monkey
2. Reward: 0,1,10,11,100,101,111
  - sprite disappear
  - increase bytes
3. Penalty - bugs & virus (\*different color, trojan horse)
  - sprite disappear
  - decrease bytes
  - Monkey blinks & scream
  - \*Effect: 0's & 1's fly out from Monkey
4. Helping/special effect items - coffee, beer, \*banana
  - Coffee - Monkey jump higher
  - Beer - Monkey jump lower
  - \*Banana - Monkey invincible
5. Bytes bar
6. Group sprites: branches
  - Monkey can land on branches, can't go through from bottom
  (- \*Can go through from bottom)

# Control
1. Monkey's movement:
  - Jump - auto
  - land
  - Go left/right - tilting
  - \*Shooting bugs & virus - clicking

# Functionality
1. Group sprites & Bg tiles:
  - move downwards as Monkey jumps
  - destroyed when out of screen
2. Scoring: bytes bar
  - increase with catching 0's & 1's
  - decrease with catching bugs $ virus
3\*. Monkey can jump across screen

# To-do
1. Auto jump
2. Move monkey left to right on keyboard
3. Accelerometer
4. Generating random branches
5. Generating random item sprites
6. Set up bytes count, reward and penalty items (\*different scoring & penalty)
7. Set up helping/special items
