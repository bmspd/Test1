let mouseX = 0;
let mouseY = 0;


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
    let abc = Math.pow(pos.x - bigX, 2) + Math.pow(pos.y - bigY, 2);

    if (abc <= (bigR - smallR) * (bigR - smallR))
    {
        //clearCanvas();
        //drawBigCircle()
        let tempX = smallX;
        let tempY = smallY;
        let abc0 = Math.sqrt(Math.pow(pos.x - smallX, 2) + Math.pow(pos.y - smallY, 2));
        let a =  (abc0 <= smallR + 5)
        if (a)
        {
            if (pos.y >= smallY && pos.x >= smallX)  //Right Down
            {
                console.log("RD")
                smallX = pos.x - smallR;
                smallY = pos.y - smallR;
                let radiusDistance = (Math.sqrt(Math.pow(smallX - bigX, 2) + Math.pow(smallY - bigY, 2)))
                // console.log(radiusDistance + smallR);
                // console.log(bigR);
                let i = 0;
                if (radiusDistance + smallR >= bigR)
                {
                    if (pos.y > bigY && pos.x < bigX) {
                        console.log("HELLO")
                        console.log(pos.x + ' ' +  pos.y);
                        console.log(bigX + '' + bigY);
                        console.log(bigR*bigR)
                        var x7 = nerdamer.solveEquations(['3*x^2/y=2', 'z*x*y-1=35', '5*z^2+7=52']);
                        console.log(x7.toString());
                    }
                    else {
                        console.log("BYE")

                    }
                }

            }
            else if (pos.y >= smallY && pos.x <= smallX) //Left Down
            {
                console.log("LD")
                smallX = pos.x + smallR;
                smallY = pos.y - smallR;
            }
            else if (pos.y <= smallY && pos.x >= smallX) //Right Up
            {
                console.log("RU")
                smallX = pos.x - smallR;
                smallY = pos.y + smallR;
            }
            else//Left Up
            {
                console.log("LU")
                smallX = pos.x + smallR;
                smallY = pos.y + smallR;
            }
            clearCanvas();
            drawBigCircle();
            let radiusDistance = Math.sqrt(Math.pow(smallX - bigX, 2) + Math.pow(smallY - bigY, 2))
            if (radiusDistance + smallR < bigR)
                drawSmallCircle(smallX, smallY);
            else
            {
                smallX = tempX;
                smallY = tempY;
                drawSmallCircle(smallX, smallY);
            }
        }

    }
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

