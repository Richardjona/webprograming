const btn = document.getElementById("btn")

btn.addEventListener("mouseover", (event) => {
    
    const x = (event.pageX - btn.offsetLeft)
    const y = (event.pageY - btn.offsetTop)

    btn.style.setProperty("--xPos", x + "px")
    btn.style.setProperty("--yPos", y + "px")
})