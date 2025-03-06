//uncertain if necessary
//to call functions from other scripts:
// import { myFunction } from './module.js'; //brackets are necessary part of import


//draw grid
// https://stackoverflow.com/questions/11735856/draw-a-grid-on-an-html-5-canvas-element
function drawGrid(width,height){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      ctxt.save();
      ctxt.beginPath();

      ctxt.strokeStyle = "black";

      var pad = 10; //padding
      //adjust width and height to account for external grid padding
      width -= 20;
      height -= 20;

      for(var x = 0; x <= width; x += 120){
        ctxt.moveTo(0.5 + x + pad, pad);
        ctxt.lineTo(0.5 + x + pad, height+pad);
      }
      for (var y = 0; y <=height; y+=120){
        ctxt.moveTo(pad, 0.5 + y + pad);
        ctxt.lineTo(width + pad, 0.5 + y + pad);
      }

      ctxt.stroke();
      ctxt.closePath();
    }
}

//draw river (d6)
function drawRiver(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");

      ctxt.strokeStyle = "black";
      ctxt.fillStyle = "blue";

      startX = (tileRow*120)+10;
      startY = (tileCol*120)+10;

      ctxt.fillRect(startX, startY, 120, 120); //fills the full tile with blue by drawing blue-fill rectangle
    }
}

//draw mountain (d10)
function drawMountain(tileRow, tileCol){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");

      ctxt.strokeStyle = "black";

      startX = (tileRow*120)+10;
      startY = (tileCol*120)+10;
      
      ctxt.beginPath();
      ctxt.moveTo(startX,startY);
      ctxt.lineTo(startX,startY+110);
      ctxt.moveTo(startX,startY+110);
      ctxt.lineTo(startX+120,startY);

      ctxt.stroke();
      ctxt.closePath();
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