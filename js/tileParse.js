async function tileParse(){
    for (let row = 0; row < tilesArray.length ; row++) {
        for (let col = 0; col < tilesArray[row].length ; col++) {
            let type = tilesArray[row][col][0];
            let extremeness = tilesArray[row][col][1];

            switch(type) {
                case 'R':
                    await drawRiver(row, col, extremeness);
                    break;
                case 'M':
                    await drawMountain(row, col, extremeness);
                    break;
                case 'V':
                    await drawValley(row, col, extremeness);
                    break;
                case 'S':
                    await drawSettlement(row, col, extremeness);
                    break;
                case 'F':
                    await drawForest(row, col, extremeness);
                    break;
                default:
                    //leave blank
            }
        }
    }  
}