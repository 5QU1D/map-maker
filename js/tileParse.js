function tileParse(){
    for (let row = 0; row < tilesArray.length ; row++) {
        for (let col = 0; col < tilesArray[row].length ; col++) {
            let type = tilesArray[row][col][0];
            let extremeness = tilesArray[row][col][1];

            switch(type) {
                case 'R':
                    drawRiver(row,col, extremeness);
                    break;
                case 'M':
                    drawMountain(row,col, extremeness);
                    break;
                case 'V':
                    drawValley(row,col, extremeness);
                    break;
                case 'C':
                    drawSettlement(row,col, extremeness);
                    break;
                case 'F':
                    drawForest(row,col, extremeness);
                    break;
                default:
                    //leave blank
            }
        }
    }
}