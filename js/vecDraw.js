//draw grid
// https://stackoverflow.com/questions/11735856/draw-a-grid-on-an-html-5-canvas-element
function drawGrid(width,height){
  canvas = document.getElementById("canvas");
  canvas.width = width + 20;
  canvas.height = height + 20;

  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    ctxt.save();

    //add white background to canvas
    ctxt.fillStyle = "white";
    ctxt.fillRect(0, 0, canvas.width, canvas.height);

    ctxt.beginPath();

    ctxt.strokeStyle = "black";

    var pad = 10; //padding
    //adjust width and height to account for external grid padding

    for(var x = 0; x <= width; x += 300){
      ctxt.moveTo(0.5 + x + pad, pad);
      ctxt.lineTo(0.5 + x + pad, height+pad);
    }

    for (var y = 0; y <=height; y+=300){
      ctxt.moveTo(pad, 0.5 + y + pad);
      ctxt.lineTo(width + pad, 0.5 + y + pad);
    }
    ctxt.stroke();
    ctxt.closePath();
  }
}

//draw river
function drawRiver(tileRow, tileCol, extremeness){
  return new Promise((resolve) => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(300,300);
      image.crossOrigin="anonymous";

      switch(extremeness){
        case '1':
          image.src = 'assets/hand-drawn/rivers/River1.svg';
          break;
        case '2':
          image.src = 'assets/hand-drawn/rivers/River2.svg';
          break;
        case '3':
          image.src = 'assets/hand-drawn/rivers/River3.svg';
          break;
        case '4':
          image.src = 'assets/hand-drawn/rivers/River4.svg';
          break;
        case '5':
          image.src = 'assets/hand-drawn/rivers/River5.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/hand-drawn/rivers/River.svg';
      }

      image.onload = () => {
        startX = (tileCol*300)+10;
        startY = (tileRow*300)+10;

        ctxt.drawImage(image, startX, startY, image.width, image.height);
        resolve();
      }
    }
  })
  
}

//draw mountain
function drawMountain(tileRow, tileCol, extremeness){
  return new Promise((resolve) => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(300,300);
      image.crossOrigin="anonymous";

      switch(extremeness){
        case '1':
          image.src = 'assets/hand-drawn/mountains/Mountain1.svg';
          break;
        case '2':
          image.src = 'assets/hand-drawn/mountains/Mountain2.svg';
          break;
        case '3':
          image.src = 'assets/hand-drawn/mountains/Mountain3.svg';
          break;
        case '4':
          image.src = 'assets/hand-drawn/mountains/Mountain4.svg';
          break;
        case '5':
          image.src = 'assets/hand-drawn/mountains/Mountain5.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/hand-drawn/mountains/Mountains.svg';
      }

      image.onload = () => {
        startX = (tileCol*300)+10;
        startY = (tileRow*300)+10;

        ctxt.drawImage(image, startX, startY, image.width, image.height);
        resolve();
      }
    }
  }) 
}

//draw settlement
function drawSettlement(tileRow, tileCol, extremeness){
  return new Promise((resolve) => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(300,300);
      image.crossOrigin="anonymous";

      switch(extremeness){
        case '1':
          image.src = 'assets/hand-drawn/settlements/Settlement1.svg';
          break;
        case '2':
          image.src = 'assets/hand-drawn/settlements/Settlement2.svg';
          break;
        case '3':
          image.src = 'assets/hand-drawn/settlements/Settlement3.svg';
          break;
        case '4':
          image.src = 'assets/hand-drawn/settlements/Settlement4.svg';
          break;
        case '5':
          image.src = 'assets/hand-drawn/settlements/Settlement5.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/hand-drawn/settlements/Settlement.svg';
      }

      image.onload = () => {
        startX = (tileCol*300)+10;
        startY = (tileRow*300)+10;

        ctxt.drawImage(image, startX, startY, image.width, image.height);
        resolve();
      }
    }
  })
}

//draw forest
function drawForest(tileRow, tileCol, extremeness){
  return new Promise((resolve) => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(300,300);
      image.crossOrigin="anonymous";

      switch(extremeness){
        case '1':
          image.src = 'assets/hand-drawn/forests/Forest1.svg';
          break;
        case '2':
          image.src = 'assets/hand-drawn/forests/Forest2.svg';
          break;
        case '3':
          image.src = 'assets/hand-drawn/forests/Forest3.svg';
          break;
        case '4':
          image.src = 'assets/hand-drawn/forests/Forest4.svg';
          break;
        case '5':
          image.src = 'assets/hand-drawn/forests/Forest5.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/hand-drawn/forests/Forest.svg';
      }

      image.onload = function(){
        startX = (tileCol*300)+10;
        startY = (tileRow*300)+10;

        ctxt.drawImage(image, startX, startY, image.width, image.height);
        resolve();
      }
    }
  }) 
}

//draw valley
function drawValley(tileRow, tileCol, extremeness){
  return new Promise((resolve) => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(300,300);
      image.crossOrigin="anonymous";

      switch(extremeness){
        case '1':
          image.src = 'assets/hand-drawn/valleys/Valley1.svg';
          break;
        case '2':
          image.src = 'assets/hand-drawn/valleys/Valley2.svg';
          break;
        case '3':
          image.src = 'assets/hand-drawn/valleys/Valley3.svg';
          break;
        case '4':
          image.src = 'assets/hand-drawn/valleys/Valley4.svg';
          break;
        case '5':
          image.src = 'assets/hand-drawn/valleys/Valley5.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/hand-drawn/valleys/Valley.svg';
      }

      image.onload = () => {
        startX = (tileCol*300)+10;
        startY = (tileRow*300)+10;

        ctxt.drawImage(image, startX, startY, image.width, image.height);
        resolve();
      }
    }
  }) 
}

//convert canvas to png
async function blobber() {
  tileParse().then(() => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      // console.log(url);
      document.getElementById('loader').style.display = 'none';
      document.getElementById('finMap').src = url;
      document.getElementById('download').href = url;
      document.getElementById('download').style.display = 'block';
    })
  })
}