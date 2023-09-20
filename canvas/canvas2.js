const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

const dpr = window.devicePixelRatio
console.log(dpr)

const windowWidth = 300
const windowHeight = 300

canvas.style.width = 300 + 'px'
canvas.style.height = 300 + 'px'

canvas.width = windowWidth * dpr
canvas.height = windowHeight * dpr

// ctx.fillRect(10,10,50,50)
// ctx.fill()

//아래가 원 만드는 방식


ctx.scale(dpr,dpr)

let x,y,z

class Particle{
    constructor(x,y,radius){
        this.x = x
        this.y = y
        this.r = radius
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI / 180 * 360)
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.closePath()
    }

}

const particles = new Particle(100, 100,50)

particles.draw()