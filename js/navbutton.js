var navbutton = document.createElement("a")
navbutton.setAttribute("href", "/playgrounds.html")
navbutton.setAttribute("id", "nav_button")
navbutton.innerHTML = "▨"
navbutton.style.color = "lightslategray"
navbutton.style.position = "fixed"
navbutton.style.top = "5px"
navbutton.style.right = "5px"
navbutton.style.fontSize = "20px"

document.body.appendChild(navbutton)