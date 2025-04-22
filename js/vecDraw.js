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
    }

    for (var y = 0; y <=height; y+=120){
      ctxt.moveTo(pad, 0.5 + y + pad);
      ctxt.lineTo(width + pad, 0.5 + y + pad);
    }
    ctxt.stroke();
    ctxt.closePath();
  }
}

//draw river
function drawRiver(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);
    image.crossOrigin="anonymous";

    switch(extremeness){
      case '1':
        image.src = 'assets/rivers/River1.svg';
        break;
      case '2':
        image.src = 'assets/rivers/River2.svg';
        break;
      case '3':
        image.src = 'assets/rivers/River3.svg';
        break;
      case '4':
        image.src = 'assets/rivers/River4.svg';
        break;
      case '5':
        image.src = 'assets/rivers/River5.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/rivers/River.svg';
    }

    image.onload = () => {
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
  }
}

//draw mountain
function drawMountain(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);
    image.crossOrigin="anonymous";

    switch(extremeness){
      case '1':
        image.src = 'assets/mountains/Mountain1.svg';
        break;
      case '2':
        image.src = 'assets/mountains/Mountain2.svg';
        break;
      case '3':
        image.src = 'assets/mountains/Mountain3.svg';
        break;
      case '4':
        image.src = 'assets/mountains/Mountain4.svg';
        break;
      case '5':
        image.src = 'assets/mountains/Mountain5.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/mountains/Mountains.svg';
    }

    image.onload = () => {
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
  }
}

//draw settlement
function drawSettlement(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);
    image.crossOrigin="anonymous";

    switch(extremeness){
      case '1':
        image.src = 'assets/settlements/Settlement1.svg';
        break;
      case '2':
        image.src = 'assets/settlements/Settlement2.svg';
        break;
      case '3':
        image.src = 'assets/settlements/Settlement3.svg';
        break;
      case '4':
        image.src = 'assets/settlements/Settlement4.svg';
        break;
      case '5':
        image.src = 'assets/settlements/Settlement5.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/settlements/Settlement.svg';
    }

    image.onload = () => {
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
  }
}

//draw forest
function drawForest(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);
    image.crossOrigin="anonymous";

    switch(extremeness){
      case '1':
        image.src = 'assets/forests/Forest1.svg';
        break;
      case '2':
        image.src = 'assets/forests/Forest2.svg';
        break;
      case '3':
        image.src = 'assets/forests/Forest3.svg';
        break;
      case '4':
        image.src = 'assets/forests/Forest4.svg';
        break;
      case '5':
        image.src = 'assets/forests/Forest5.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/forests/Forest.svg';
    }

    image.onload = function(){
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
  }
}

//draw valley
function drawValley(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);
    image.crossOrigin="anonymous";

    switch(extremeness){
      case '1':
        image.src = 'assets/valleys/Valley1.svg';
        break;
      case '2':
        image.src = 'assets/valleys/Valley2.svg';
        break;
      case '3':
        image.src = 'assets/valleys/Valley3.svg';
        break;
      case '4':
        image.src = 'assets/valleys/Valley4.svg';
        break;
      case '5':
        image.src = 'assets/valleys/Valley5.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/valleys/Valley.svg';
    }

    image.onload = () => {
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
  }
}

async function blobber() {
  await tileParse();
  //adding a breakpoint here means it all fires correctly, but no break point means incorrect firing
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    console.log(url);
    document.getElementById('finMap').src = url;

    //adding functionality to download image
    // var image = url.replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
    // window.location.href = image; //launches new window with png
  })
}