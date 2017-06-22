An asterisk* means the code can be considered in an upgrade at a later point.

#Game concept
Goal: To collect as much code (0's & 1's) as possible.
Gameplay: Coding Monkey collecting code (0's & 1's) among branches and trying to survive (not fall). Scoring in bytes. Avoiding bugs & virus. Coffee, beer & banana change Monkey's jumping ability.
Monkey jumps vertically upwards. Can land on branches.

#States
Boot, preload, title screen, etc.

#Background
Environment: Tree trunk & branches
Bg tiles: Plain bg & tree trunk

#Sprites
1. Main character: Monkey
2. Reward: 0,1,10,11,100,101,111
  a. sprite disappear
  b. increase bytes
3. Penalty - bugs & virus
  a. sprite disappear
  b. decrease bytes
  c. Monkey blinks & scream
  d*. Effect: 0's & 1's fly out from Monkey
4. Helping/special effect items - coffee, beer, banana*
  a. Coffee - Monkey jump higher
  b. Beer - Monkey jump lower
  c*. Banana - Monkey invincible
5. Group sprites: branches
  a. Monkey can land on branches, can't go through from bottom
  (b*. Can go through from bottom)

#Control
1. Monkey's movement:
  a. Jump - auto
  b. land
  c. Go left/right - tilting
  d*. Shooting bugs & virus - clicking

#Functionality
1. Group sprites & Bg tiles:
  a. move downwards as Monkey jumps
  b. destroyed when out of screen
2. Scoring: bytes bar
  a. increase with catching 0's & 1's
  b. decrease with catching bugs $ virus
3*. Monkey can jump across screen
