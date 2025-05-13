# Map Maker

A project by Syd A.

Access the hosted project [HERE](https://5qu1d.github.io/map-maker/).

## Progress

- js, json, and html files added *(2/11)*
  - html has head and body tags *(2/11)*
  - html has some scripting with intent to read in a file (further data handling required) *(2/11)*
- README now serves as a project overview as well as a simple progress tracker. Thoughts and concerns can be expressed here, as well as within commented sections of the project code.
- Grid math: each grid tile will be a 120x120 px square. Grid sizes will be stored to the file as tile numbers; the conversion from number of tiles to full px values for the canvas will be done within a script *(2/24)*
  - pass grid size into html canvas *(3/8)*
  - subdivide grid — ensure grid-drawing script fires *after* file is read *(3/10)*
- File values:
  - First line: HEIGHT (number of tiles; integer), WIDTH (number of tiles; integer)
  - Subsequent lines: rows of the grid (will be stored in a 2D array)
    - tuples separated by spaces: (CONTENT (char),EXTREMENESS (float)) 
    - empty "tiles" in (0,0) format for ease of parsing *(3/05)*
- Tiles:
  - create assets for tiles (first variant of mountain, settlement, valley, river, forest) *(first set done 3/11, other two extremenesses completed 3/30)*
- implemented asset placement *(3/11)*
- implemented extremenss handling for draw functions *(4/2)*
- live testing environment implemented
- hosting through GitHub Pages is live

## To Do
- [x] File generation program *(4/9)*
  - [x] Add documentation to README file for program, and link in this project's README *(5/12)*
- [x] Export canvas to PNG for display and download
  - [x] Display *(partial implementation done 4/22; finished 4/23)*
  - [x] Download *(4/28)*
- [x] Two more extremenesses per tile type for first set (5 extremenesses in total) *(4/24)*
- [x] ~~One very nice tile set *(4/30)*~~
- [x] Three variant tilesets with functionality *(5/11)*
- [x] Clean UI (90s aesthetic?) *(4/27)*
- [x] Usage guidance written *(5/12)*
