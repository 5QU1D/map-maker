// need to implement some sort of promise or callback 
// so that this fires AFTER reading the file
// and loading its contents

// settimeout does not seem to be a viable solution to this, even as a placeholder. sadge.

document
    .getElementById('FileInput')
    .addEventListener('change', function () {
        drawGrid(tilesWidth,tilesHeight);
    });