//import { Canvg } from 'canvg'

//draw grid
// https://stackoverflow.com/questions/11735856/draw-a-grid-on-an-html-5-canvas-element
function drawGrid(width,height){
    canvas = document.getElementById("canvas");
    canvas.width = width + 20;
    canvas.height = height + 20;

    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      ctxt.save();
      ctxt.beginPath();

      ctxt.strokeStyle = "black";

      var pad = 10; //padding
      //adjust width and height to account for external grid padding

      for(var x = 0; x <= width; x += 120){
        ctxt.moveTo(0.5 + x + pad, pad);
        ctxt.lineTo(0.5 + x + pad, height+pad);
        //ctxt.stroke();
      }

      for (var y = 0; y <=height; y+=120){
        ctxt.moveTo(pad, 0.5 + y + pad);
        ctxt.lineTo(width + pad, 0.5 + y + pad);
        //ctxt.stroke();
      }
      ctxt.stroke();
      ctxt.closePath();

      tileParse();
    }
}

//draw river (d6)
function drawRiver(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");

      ctxt.strokeStyle = "black";
      ctxt.fillStyle = "blue";

      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.fillRect(startX, startY, 120, 120); //fills the full tile with blue by drawing blue-fill rectangle
    }
}

// working with SVGs: https://github.com/canvg/canvg

//draw mountain (d10)
function drawMountain(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      const image = new Image(120,120);
      image.src = "/assets/mountains/Mountains.svg"; //know it's not a source issue

      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
}

//draw settlement (d8)
function drawSettlement(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");


    }
}

//draw forest (d20)
function drawForest(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");


    }
}

//draw valley (d20)
function drawValley(tileRow, tileCol){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");


  }
}
