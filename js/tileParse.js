async function tileParse(){
    for (let row = 0; row < tilesArray.length ; row++) {
        for (let col = 0; col < tilesArray[row].length ; col++) {
            let type = tilesArray[row][col][0];
            let extremeness = tilesArray[row][col][1];

            switch(type) {
                case 'R':
                    if(radioVal=="fullsketch") {await drawRiver(row, col, extremeness);}
                    else if (radioVal=="noext") {await drawRiver(row, col, 6);}
                    //implement coldrawDriver
                    else if (radioVal=="colortiles") {await coldrawRiver(row, col, extremeness);}
                    break;
                case 'M':
                    if(radioVal=="fullsketch") {await drawMountain(row, col, extremeness);}
                    else if (radioVal=="noext") {await drawMountain(row, col, 6);}
                    //implement
                    else if (radioVal=="colortiles") {await coldrawMountain(row, col, extremeness);}
                    break;
                case 'V':
                    if(radioVal=="fullsketch") {await drawValley(row, col, extremeness);}
                    else if (radioVal=="noext") {await drawValley(row, col, 6);}
                    //implement
                    else if (radioVal=="colortiles") {await coldrawValley(row, col, extremeness);}
                    break;
                case 'S':
                    if(radioVal=="fullsketch") {await drawSettlement(row, col, extremeness);}
                    else if (radioVal=="noext") {await drawSettlement(row, col, 6);}
                    //implement
                    else if (radioVal=="colortiles") {await coldrawSettlement(row, col, extremeness);}
                    break;
                case 'F':
                    if(radioVal=="fullsketch") {await drawForest(row, col, extremeness);}
                    else if (radioVal=="noext") {await drawForest(row, col, 6);}
                    //implement
                    else if (radioVal=="colortiles") {await coldrawForest(row, col, extremeness);}
                    break;
                default:
                    //leave blank unless colortiles
                    if (radioVal=="colortiles") {
                        await coldrawBlank(row,col);
                    }
            }
        }
    }  
}