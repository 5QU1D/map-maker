console.log("Hello,Javascript!"); //initial tester of file

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
  
      ctxt.strokeStyle = "blue";
      ctxt.beginPath();
      ctxt.moveTo(10,10);
      ctxt.lineTo(100,100);
      ctxt.moveTo(100,100); //if you don't move to next location, it will continue drawing from starting point - (10,10) in this case
      ctxt.lineTo(200,100);
      ctxt.closePath();
      //ctxt.fill(); //fill for shapes/enclosed areas
      ctxt.stroke();
    }
}
  
  draw();