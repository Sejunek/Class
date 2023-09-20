const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const dpr = window.devicePixelRatio

const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

canvas.style.width = canvasWidth
canvas.style.height = canvasHeight

canvas.width = canvasWidth * dpr
canvas.height = canvasHeight * dpr
 
class Rect{
    constructor(x,y,radius){
        this.x = x
        this.y = y
        this.r = radius
    }

    draw(){
        ctx.fillRect(x,y,r,r)
        ctx.fill()
    }
}


const drawRect = new Rect(10,10,50)

drawRect.draw()
