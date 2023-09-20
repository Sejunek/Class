const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const dpr = window.devicePixelRatio

const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

canvas.style.width = canvasWidth
canvas.style.height = canvasHeight

canvas.width = canvasWidth * dpr
canvas.height = canvasHeight * dpr

let timeId;
let coorX = canvas.width/2
let coorY = canvas.height/2
let r = 0;
let cnt = setInterval(function(){
    cnt ++;
},100)

function rad(deg){
    return deg * Math.PI / 180
}


function draw(){
    ctx.clearRect(0,0,canvasWidth, canvasHeight)
    ctx.beginPath()
    ctx.arc(coorX,coorY,r,0,rad(360),true)
    ctx.fillStyle = 'black'
    // ctx.fill()
    ctx.stroke()
    ctx.closePath()
    
    // coorX += 1;
    // coorY += 1;

    if(r >= 300){
        r = 0;
    }else{
        r ++;
    }

    // if(r == 100){
    //     draw()
    // }
    

    // coorX += Math(Math.random() * 1000);
    // coorY += Math(Math.random() * 1000);
    
    timeId = requestAnimationFrame(draw)

}


for(let i = 0; i <= 10; i++){
    draw();
}



