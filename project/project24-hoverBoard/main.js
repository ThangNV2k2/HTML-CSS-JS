const container = document.querySelector('.container')

function rand() {
    let charColor = "0123456789abcdef"
    var color = "#"
    for(let i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)]
    }
    return color
}
for(let i = 0; i < 200; i++) {
    let square = document.createElement('div')
    square.classList.add('box')
    container.appendChild(square)


    square.addEventListener('mouseenter', function(e) {
        let el = e.currentTarget
        el.style.background = rand()
        el.style.boxShadow = `0 0 10px ${rand()}, 0 0 100px ${rand()}`
    })
    square.addEventListener('mouseleave', function(e) {
        let el = e.currentTarget
        el.style.background = '#242228'
        el.style.boxShadow = '0 0 2px #000'
    })
}