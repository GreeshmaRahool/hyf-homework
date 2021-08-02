//Paint a circle to a canvas element
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const X =40;
const Y = 40;
const radius = 30;

ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';

ctx.beginPath();
ctx.arc(X, Y, radius, 0, 2 * Math.PI, false);
ctx.stroke();
ctx. fillStyle = "red";
ctx.fill();

//Class creation time!
class Circle{
    constructor(x,y,r,startAngle,endAngle,fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {       
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        
    }
}

// const c1 = new Circle(70, 70, 60, 0, 2 * Math.PI, "#23c9cf");
// c1.draw();
// const c2 = new Circle(220, 85, 80, 0, 2 * Math.PI, "#cf5f23");
// c2.draw();

function getRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')';
  
}
function createRandomCircle() {
    const canvas = document.getElementById('canvas')

    canvas.width = window.innerWidth   
    canvas.height = window.innerHeight

    const circleWidth = Math.floor(Math.random() * window.screen.width);
    const circleHeight = Math.floor(Math.random() * window.screen.height);
    const circleRadius = Math.floor(Math.random() * 100);

    const fillColor = getRandomColor();
    const c3 = new Circle(circleWidth, circleHeight, circleRadius, 0, 2 * Math.PI, fillColor);
    c3.draw();
}
//Now lets make art!
setInterval(createRandomCircle, 100);
//Follow the mouse - optional
//document.body.addEventListener("mousemove", createRandomCircle);


