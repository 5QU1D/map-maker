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