let xDir = "rotateY"
let yDir = "rotateX"

document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY
  
  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2
  
  const box = document.querySelector("section")
  
  box.style.left = x + "px"
  box.style.top = y + "px"
  
  box.style.transform = xDir + "(" + midX + "deg) " + yDir + "(" + midY + "deg)"
})

document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", function () {
    if (this.name == "xDir") {
      xDir = this.value
    } else {
      yDir = this.value
    }
  })
})