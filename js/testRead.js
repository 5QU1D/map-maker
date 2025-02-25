document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            let arrayBuffer = event.target.result;
            let array = new Uint8Array(arrayBuffer);

            //Display some info about the file - testing purposes
            let fileSize = arrayBuffer.byteLength;
            let bytes = []; //structure of empty array declaration
            // let tile : [char, float]; //only a valid structure in TS
            // a guide to TS arrays and tuples: https://type-level-typescript.com/arrays-and-tuples

            //from James
            // let tupleArray: [string, number][][] = [
            //     [
            //       ["apple", 1],
            //       ["banana", 2]
            //     ],
            //     [
            //       ["cherry", 3],
            //       ["date", 4]
            //     ],
            //     [
            //       ["elderberry", 5],
            //       ["fig", 6]
            //     ]
            //   ];

            // same sort of structure, I just can't do type annotations
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

            // read from array (built from buffer) into bytes (empty array we declared on line 13)
            for (let i = 0; i < Math.min(20, fileSize); i++) {
                bytes.push(array[i]);
            }

            // here will be the read from array into a 2D array of tuples for the grid
            // outer for loop (row)
                // inner for loop (column)

            document
                .getElementById('fileContents')
                //print string and the content of the bytes array, seaparated by comma and space
                .textContent = 'TEXT HERE' + bytes.join(', ');
            console.log('ArrayBuffer:', arrayBuffer);
        };

        reader.readAsArrayBuffer(file);
    });