function read(event) {
    const file = event.target.result;
            //tiles are 120px squares, so we set the width and height to reflect a single tile
            let width = 120;
            let height = 120;

            //read in file data
            const line = file.split(/\r\n|\n/);
            let lines = new Array();
            lines = Object.values(line);
            
            let whString = lines[0].split(" ");
            let tileW = whString[0];
            let tileH = whString[1];
            width = width * tileW;
            height = height * tileH;

            // building 3d arrays : https://stackoverflow.com/questions/4943633/creating-and-parsing-a-3d-array-in-javascript

            let threeDArray = new Array();
            
            for (let i = 0; i < tileH; i++) {
                threeDArray[i] = new Array();
                for (let j = 0; j < tileW; j++) {
                    threeDArray[i][j] = new Array();
                }
            }

            // read from array into a 2D array of tuples for the grid
            for (let i = 1; i <= tileH; i++) {
                for (let j = 0; j < tileW; j++) {
                    //read in from lines[i] (a string) to threeDArray[i-1][j][0] and threeDArray[i-1][j][1]
                    threeDArray[i-1][j][0] = lines[i][1 + 6*j];
                    threeDArray[i-1][j][1] = lines[i][3 + 6*j];
                }
            }

            document
                .getElementById('fileContents')
                // .textContent = 'width ' + width + ' tiles ' + tileW + ' height ' + height + ' tiles ' + tileH;

            // copying information from the file into the global variables defined in main.js  
            tilesHeight = height;
            tilesWidth = width;

            tilesArray = new Array();

            for (let i = 0; i < tileH; i++) {
                tilesArray[i] = new Array();
                for (let j = 0; j < tileW; j++) {
                    tilesArray[i][j] = new Array();
                }
            }

            for (let i = 0; i < threeDArray.length; i++) {
                for (let j = 0; j < threeDArray[i].length; j++) {
                    tilesArray[i][j].push(threeDArray[i][j][0]);
                    tilesArray[i][j].push(threeDArray[i][j][1]);
                }
            }
}