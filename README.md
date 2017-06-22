An asterisk* means the code can be considered in an upgrade at a later point.

# Game concept
Goal: To collect as much code (0's & 1's) as possible.
Gameplay: Coding Monkey collecting code (0's & 1's) among branches and trying to survive (not fall). 
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
  1. sprite disappear
  2. increase bytes
3. Penalty - bugs & virus
  1. sprite disappear
  2. decrease bytes
  3. Monkey blinks & scream
  4*. Effect: 0's & 1's fly out from Monkey
4. Helping/special effect items - coffee, beer, banana*
  1. Coffee - Monkey jump higher
  2. Beer - Monkey jump lower
  3*. Banana - Monkey invincible
5. Group sprites: branches
  1. Monkey can land on branches, can't go through from bottom
  (2*. Can go through from bottom)

# Control
1. Monkey's movement:
  1. Jump - auto
  2. land
  3. Go left/right - tilting
  4*. Shooting bugs & virus - clicking

# Functionality
1. Group sprites & Bg tiles:
  1. move downwards as Monkey jumps
  2. destroyed when out of screen
2. Scoring: bytes bar
  1. increase with catching 0's & 1's
  2. decrease with catching bugs $ virus
3*. Monkey can jump across screen
