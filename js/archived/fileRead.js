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
            let bytes = [];
            for (let i = 0; i < Math.min(20, fileSize); i++) {
                bytes.push(array[i]);
            }
            document
                .getElementById('fileContents')
                .textContent = 'First 20 butes of file as ArrayBuffer: ' + bytes.join(', ');
            console.log('ArrayBuffer:', arrayBuffer);
        };

        reader.readAsArrayBuffer(file);
    });