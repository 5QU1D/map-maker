# map-drawer

A project by Syd A.

## Progress

- js, json, and html files added *(2/11)*
  - html has head and body tags *(2/11)*
  - html has some scripting with intent to read in a file (further data handling required) *(2/11)*
- README now serves as a project overview as well as a simple progress tracker. Thoughts and concerns can be expressed here, as well as within commented sections of the project code.
- Grid math: each grid tile will be a 120x120 px square. Grid sizes will be stored to the file as tile numbers; the conversion from number of tiles to full px values for the canvas will be done within a script *(2/24)*
- File values:
  - First line: HEIGHT (number of tiles; integer), WIDTH (number of tiles; integer)
  - Subsequent lines: rows of the grid (will be stored in a 2D array)
    - tuples separated by spaces: (CONTENT (char),EXTREMENESS (float)) 
    - empty "tiles" in (0,0) format for ease of parsing *(3/05)*

## To Do

- [x] initial grid math
  - [x] pass grid size into html canvas *(3/8)*
- [x] subdivide grid
  - [x] ensure grid-drawing script fires *after* file is read *(3/10)*
- [ ] create assets for tiles ~~determine drawing inputs for each map "feature" type (and create assets!!)~~
  - [ ] mountain
    - [ ] extremeness 1
    - [ ] extremeness 2
    - [x] extremeness 3 *(3/11)*
  - [ ] city
    - [ ] extremeness 1
    - [ ] extremeness 2
    - [x] extremeness 3 *(3/11)*
  - [ ] lake
    - [ ] extremeness 1
    - [ ] extremeness 2
    - [x] extremeness 3 *(3/11)*
  - [ ] valley
    - [ ] extremeness 1
    - [ ] extremeness 2
    - [x] extremeness 3 *(3/11)*
  - [ ] river
    - [ ] extremeness 1
    - [ ] extremeness 2
    - [x] extremeness 3 *(3/11)*
- [x] implement asset placement *(3/11)*
- [ ] implement extremeness handling for draw functions

The draw function will likely divide into sub-functions for drawing the different features, taking in a grid square meant to be drawn within, and the feature type and extremeness value. The extremeness value determines how much of the grid square is utilized. The feature type determines which drawing function is used.

- [x] Live testing environment
- [x] Hosting
  - [ ] Hosting off of GitHub
