document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (event) {
            read(event);
        }

        document.getElementById("runner").addEventListener('click', function() {
            //check map dimensions
            if(tilesWidth/300 > 50 || tilesHeight/300 > 50) {
                alert("Current advised recommended map size is WITHIN 50 x 50 tiles. See below for more details.");
                //returns early from function to avoid DOMException due to canvas size limitations and current implementation
                return false;
            }

            document.getElementById('finMap').src='';
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

            blobber();
        })


        reader.onerror = (event) => alert(event.error.name);
        reader.readAsText(file);
    });