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
            // const canvas = document.getElementById("canvas");
            // const url = canvas.toDataURL();
            // console.log(url);
            // document.getElementById('finMap').src = url;
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                console.log(url);
                document.getElementById('finMap').src = url;

                //adding functionality to download image
                // var image = url.replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
                // window.location.href = image; //launches new window with png
            })
            // import("./canvas2image").then((convertToPNG) => {
            //     console.log(Canvas2Image.convertToPNG(canvas, tilesWidth*120, tilesHeight*120));
            // })
            // console.log(Canvas2Image.convertToPNG(canvas, tilesWidth*120, tilesHeight*120));
              
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });