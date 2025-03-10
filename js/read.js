function read(event) {
    const file = event.target.result;
            let width = 120;
            let height = 120;

            const line = file.split(/\r\n|\n/);
            let lines = new Array();
            lines = Object.values(line);
            //content = lines.join('\n');
            //console.log(typeof lines); // object (array)
            //console.log(typeof lines[0]); // string
            
            tileW = lines[0][0];
            tileH = lines[0][2];
            width = width * tileW;
            height = height * tileH;

            // let threeDArray = [
            //     [
            //       ['A1', 'A2'], //=> [0][0][0] == A1 ; [0][0][1] == A2
            //       ['B1', 'B2'] //=> [0][1][0] == A1 ; [0][1][1] == A2
            //     ],
            //     [
            //       ['C1', 'C2'], //=> [1][0][0] == C1 ; [1][0][1] == C2
            //       ['D1', 'D2'] //=> [1][1][0] == D1 ; [1][1][1] == D2
            //     ],
            //     [
            //       ['E1', 'E2'], //=> [2][0][0] == E1 ; [2][0][1] == E2
            //       ['F1', 'F2'] //=> [2][1][0] == F1 ; [2][1][1] == F2
            //     ]
            //   ];

            // building 3d arrays : https://stackoverflow.com/questions/4943633/creating-and-parsing-a-3d-array-in-javascript

            // var myArr = new Array();
            // myArr[0] = new Array();
            // myArr[0][0] = new Array();
            // myArr[0][0][0] = "Howdy";
            // myArr[0][0][1] = "pardner";

            // for (var i = 0; i<numberOfQuestions; i++){
            //     data[i] = new Array();
            //     data[i][0] = something;
            //     data[i][1] = somethingElse;
            //    }

            let threeDArray = new Array();

            //4 chars to a tile coord, plus the space between coords
            // 3 3
            // 00(0,0) 01(0,0) 02(C,1)
            // 10(M,1) 11(0,0) 12(0,0)
            // 20(0,0) 21(R,1) 22(0,0)
            
            for (let i = 0; i < tileW; i++) {
                threeDArray[i] = new Array();
                for (let j = 0; j < tileH; j++) {
                    threeDArray[i][j] = new Array();
                }
            }

            //lines: [
                // "3 3", 
                // "(0,0) (0,0) (C,1)", 
                // "(M,1) (0,0) (0,0)", 
                // "(0,0) (R,1) (0,0)"
            // ]

            // here will be the read from array into a 2D array of tuples for the grid
            for (let i = 1; i <= tileH; i++) {
                for (let j = 0; j < tileW; j++) {
                    //read in from lines[i] (a string) to threeDArray[i-1][j][0] and threeDArray[i-1][j][1]
                    threeDArray[i-1][j][0] = 1 + 5*j;
                    threeDArray[i-1][j][1] = 3 + 5*j;
                }
            }

            document
                .getElementById('fileContents')
                .textContent = 'width ' + width + ' tiles ' + tileW + ' height ' + height + ' tiles ' + tileH;

            tilesHeight = height;
            tilesWidth = width;
            tilesArray = threeDArray;
}