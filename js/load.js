document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            read(event);
            document.getElementById('loader').style.display='block';
            drawGrid(tilesWidth,tilesHeight);
            blobber();
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });