const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth
canvasTag.height = window.innerHeight

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")


let aimX = null
let aimY = null
let currentX = null
let currentY = null

let i = 0
const images = ["images/6/1.png", "images/6/2.png", "images/6/3.png","images/6/4.png", "images/6/5.png", "images/6/6.png",
"images/6/7.png", "images/6/8.png", "images/6/9.png",
"images/6/10.png", "images/6/11.png", "images/6/12.png",
"images/6/13.png", "images/6/14.png", "images/6/15.png"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }

})

canvasTag.addEventListener("click", function () {
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
})


const draw = function () {
  if (currentX) {
    if (images[i].complete) {
    	context.drawImage(images[i], currentX - 50, currentY - 50, 100, 100 * images[i].height/images[i].width)
  	}
    
    currentX = currentX + (aimX - currentX)
    currentY = currentY + (aimY - currentY) 
  }
  
  requestAnimationFrame(draw)
}

draw()