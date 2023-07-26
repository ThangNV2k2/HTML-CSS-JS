const range = document.querySelector(".range")
const process = document.querySelector(".process")
const value = document.querySelector("span")
const body = document.querySelector("body")

function edit(percent) {
    value.innerText = `${percent}%`
    process.style.width = `${percent}%`
    body.style.background = `rgba(0, 0, 0, ${percent/100})`

}
range.addEventListener("mousemove", function(e) {
    var processWith = e.pageX - this.offsetLeft
    var percent = Math.round(processWith / this.offsetWidth * 100)
    edit(percent)
})

edit(20)