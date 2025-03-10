document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            read(event);
            drawGrid(tilesWidth,tilesHeight);
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });