// need to implement some sort of promise or callback 
// so that this fires AFTER reading the file
// and loading its contents

document
    .getElementById('FileInput')
    .addEventListener('change', function (event) {
        drawGrid(tilesWidth,tilesHeight);
    });