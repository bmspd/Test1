let mouseX = 0;
let mouseY = 0;
let oldX = 0;
let oldY = 0;

const canvas = document.getElementById("drawCanvas");
const canvasCtx = canvas.getContext("2d");
canvasCtx.strokestyle = "black";
canvasCtx.strokeRect(0, 0, canvas.width, canvas.height);
const bigX = canvas.width / 2;
const bigY = canvas.width / 2;
const bigR = canvas.width / 2.5;
const smallR = canvas.width / 20;
let smallX = bigX;
let smallY = bigY;
drawSmallCircle(bigX, bigY);
canvas.addEventListener("mousemove", movement)


drawBigCircle();
function drawBigCircle() {
    canvasCtx.beginPath();
    canvasCtx.arc(canvas.width / 2, canvas.height / 2, canvas.width/2.5, 0, 2 * Math.PI);
    canvasCtx.strokestyle = "darkblue";
    canvasCtx.stroke();
}

function drawSmallCircle(x, y) {
    canvasCtx.beginPath();
    canvasCtx.arc(x, y, canvas.width/20, 0, 2 * Math.PI, true);
    canvasCtx.fillStyle = "red";
    canvasCtx.fill();
}

function clearCanvas() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.strokestyle = "black";
    canvasCtx.strokeRect(0, 0, canvas.width, canvas.height);
}
function clearBigCircle() {
    canvasCtx.beginPath();

}


function movement(e) {
    let pos = getMousePosition(canvas, e);
    if (Math.sqrt(Math.pow(bigX - smallX, 2) + Math.pow(bigY - smallY, 2)) + smallR   < bigR)
    {
        if (Math.sqrt(Math.pow(smallX - pos.x, 2) + Math.pow(smallY - pos.y, 2)) < smallR + 20) {
            smallX += (pos.x - oldX);
            smallY += (pos.y - oldY);
        }
        console.log("wtf1")
    }
    else if (Math.sqrt(Math.pow(bigX - (smallX + pos.x - oldX), 2) + Math.pow(bigY - (smallY + pos.y - oldY), 2)) + smallR  < bigR)
    {
        console.log("wtf2")
        smallX += (pos.x - oldX);
        smallY += (pos.y - oldY);
    }


    clearCanvas();
    drawBigCircle();
    drawSmallCircle(smallX, smallY);



    oldX = pos.x;
    oldY = pos.y;
}

function getMousePosition(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}


//trigonometry
function findSide(sideA, sideB, angle) {
    angle = (angle * Math.PI) / 180;
    return Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angle));

}

