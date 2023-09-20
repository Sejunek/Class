const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

const dpr = window.devicePixelRatio
// console.log(dpr)

const windowWidth = innerWidth
const windowHeight = innerHeight

canvas.style.width = windowWidth + 'px'
canvas.style.height = windowHeight + 'px'

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

    update(){
            // this.y += 1
        // for(i = 0; i <= 1000; i++ ){
        //     this.gy += 
        // }
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



let interval = 1000 / 60
let now, delta
let then = Date.now()//현재시간과 then이 똑같이 시작하기 위해서, 여기도 처음에 선언할 때 Date.now()를 사용해줌

function animate(){
    window.requestAnimationFrame(animate)
    now = Date.now() //실시간으로 시간을 가져옴
    delta = now - then

    if(delta < interval) return

    ctx.clearRect(0,0,windowWidth, windowHeight)
    particles.draw()
    particles.update()

    then = now - (delta % interval)

}

animate()

console.log(3%4)