document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            document.getElementById('finMap').src='';
            read(event);
            document.getElementById('loader').style.display='block';

            //check content of radio button to determine function call for drawGrid
            radioVal = getSelectedRadioValue("tileset");

            switch(radioVal) {
                case 'fullsketch':
                case 'noext':
                    drawGrid(tilesWidth,tilesHeight);
                    break;
                case 'colortiles':
                    var numTilesW = tilesWidth/300;
                    var numTilesH = tilesHeight/300;
                    drawcolGrid(200*numTilesW,200*numTilesH);
                    break;
            }
            //all other adjustments for function calls are in tileParse.js

            blobber();
        };

        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });