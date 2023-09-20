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

ctx.fillStyle = 'white'

//아래가 원 만드는 방식
ctx.beginPath()
ctx.arc(100,100,50,0,Math.PI / 180 * 360)
ctx.fill()
ctx.closePath()



ctx.scale(dpr,dpr)

