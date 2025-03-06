# map-drawer

A project by Syd A.

## Progress

- js, json, and html files added *(2/11)*
  - html has head and body tags *(2/11)*
  - html has some scripting with intent to read in a file (further data handling required) *(2/11)*
- README now serves as a project overview as well as a simple progress tracker. Thoughts and concerns can be expressed here, as well as within commented sections of the project code.
- Grid math: each grid tile will be a 120x120 px square. Grid sizes will be stored to the file as tile numbers; the conversion from number of tiles to full px values for the canvas will be done within a script *(2/24)*
- File values:
  - First line: HEIGHT (number of tiles, integer), WIDTH (number of tiles, integer)
  - Subsequent lines: rows of the grid (will be stored in a 2D array)
    - tuples separated by spaces: (CONTENT (char),EXTREMENESS (float))

## To Do

- [x] initial grid math
  - [ ] pass grid size into html canvas
- [ ] subdivide grid
- [ ] determine drawing inputs for each map "feature" type
  - [ ] mountain
  - [ ] city
  - [ ] lake
  - [ ] valley?
  - [ ] river?

The draw function will likely divide into sub-functions for drawing the different features, taking in a grid square meant to be drawn within, and the feature type and extremeness value. The extremeness value determines how much of the grid square is utilized. The feature type determines which drawing function is used.

Later(?) work will focus on the hosting. For now testing is done in a JS playground, but I worry that that will restrict how much I can do when it comes to testing out reading file input.

- [ ] Live testing environment
- [ ] Hosting
