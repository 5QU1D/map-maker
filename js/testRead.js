document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            const file = event.target.result;
            let width = 120;
            let height = 120;

            const lines = file.split(/\r\n|\n/);
            //content = lines.join('\n');
            
            width = width * lines[0][0];
            height = height * lines[0][2];

            // let threeDArray = [
            //     [
            //       ['A1', 'A2'],
            //       ['B1', 'B2']
            //     ],
            //     [
            //       ['C1', 'C2'],
            //       ['D1', 'D2']
            //     ],
            //     [
            //       ['E1', 'E2'],
            //       ['F1', 'F2']
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

            //check if lines.length() is valid syntax

            let threeDArray = new Array();

            //4 chars to a tile coord, plus the space between coords
            // 3 3
            // 00(0,0) 01(0,0) 02(C,1)
            // 10(M,1) 11(0,0) 12(0,0)
            // 20(0,0) 21(R,1) 22(0,0)
            
            for (let i = 0; i < width; i++) {
                threeDArray[i] = new Array();
                for (let j = 0; j < height; j++) {
                    threeDArray[i][j] = new Array();
                }
            }

            //i can calc how many tuples (and therefore chars) in a line[i]
                //= width*(4*5) + (width-1)


            // here will be the read from array into a 2D array of tuples for the grid
            for (let i = 1; i < lines.length(); i++) {
                for (let j = 0; j < lines[i].length(); j++) {
                    //read in from lines[i] (a string) to threeDArray[i-1][i-1][0] and threeDArray[i-1][i-1][1]
                }
            }

            document
                .getElementById('fileContents')
                //print string and the content of the bytes array, seaparated by comma and space
                .textContent = 'width ' + width + ' tiles ' + lines[0][0] + ' height ' + height + ' tiles ' + lines[0][2];
            //console.log('ArrayBuffer:', arrayBuffer);
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });