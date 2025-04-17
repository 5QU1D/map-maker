document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            read(event);
            drawGrid(tilesWidth,tilesHeight);
            tileParse();

            //once map is drawn, convert to image for display
            //currently not capturing SVG rendered to canvas?
            const canvas = document.getElementById("canvas");
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                document.getElementById('finMap').src = url;
              });
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });