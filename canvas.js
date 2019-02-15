//Get Canvas Info
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

//Setup drawline
ctx.linJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

//Fill canvas background white
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Application Variables
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var colorPicker = 0;

var colorRed = '#FF3333';
var colorBrown = '#692F2F';
var colorWhite = '#FFFFFF';
var colorBlack = '#000000';
var colorGold = '#F7FF00';
var colorGreen = '#17FF00';
var colorBlue = '#000CFF';

var selectedColor = new Array();
selectedColor.push(colorBrown);
selectedColor.push(colorRed);
selectedColor.push(colorBlack);
selectedColor.push(colorGold);
selectedColor.push(colorGreen);
selectedColor.push(colorBlue);
selectedColor.push(colorWhite);

function draw(line) {
    if(!isDrawing){
        return;
    }

    console.log(line);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(line.offsetX, line.offsetY);
    ctx.strokeStyle = selectedColor[colorPicker];
    ctx.stroke();
    lastX = line.offsetX;
    lastY = line.offsetY;
}

canvas.addEventListener('mousedown', function(line){
    isDrawing = true;
    lastX = line.offsetX;
    lastY = line.offsetY;
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function(){
    isDrawing = false;
});

canvas.addEventListener('mouseout', function(){
    isDrawing = false;
});

function brown(){
    colorPicker = 0;
}

function red(){
    colorPicker = 1;
}

function black(){
    colorPicker = 2;
}

function gold(){
    colorPicker = 3;
}

function green(){
    colorPicker = 4;
}

function blue(){
    colorPicker = 5;
}

function white(){
    colorPicker = 6;
}