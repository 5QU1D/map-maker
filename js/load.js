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
                console.log(url);
                document.getElementById('finMap').src = url;

                //adding functionality to download image
                // var image = url.replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
                // window.location.href = image; //launches new window with png
              });
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });