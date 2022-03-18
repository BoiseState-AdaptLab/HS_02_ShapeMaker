
loadCanvas(0);
drawRectangle();



function loadCanvas(id) {
    
    var div = document.createElement('div');
    div.id= "myDiv";
    document.body.appendChild(div); 
    var canvas = document.createElement('canvas');
    canvas.id     = "myCanvas";
    canvas.width  = 1224;
    canvas.height = 768;
    canvas.style.zIndex   = 8;
    canvas.style.position = "absolute";
    canvas.style.border   = "1px solid";
    div.appendChild(canvas)
}

function drawRectangle(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth="6";
    ctx.strokeStyle="red";
    ctx.rect(5,5,290,140);  
    ctx.stroke();
}
