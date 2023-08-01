let color = document.querySelector('#color')
let eraser = document.querySelector('#eraser')
let decrease = document.querySelector('#decrease')
let crease = document.querySelector('#crease')
let size = document.querySelector('#size')
let save = document.querySelector('#save')
let close = document.querySelector('#close')
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let colorPaint= 'black'
let sz = parseInt(size.innerText)
let isDrawing = false
let post1 = {
    x: 0,
    y: 0
}

let post2 = {
    x: 0,
    y: 0
}

// an chuot
canvas.addEventListener('mousedown', function(e) {
    post1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})

//keo
canvas.addEventListener('mousemove', function(e) {
    if(isDrawing) {
        post2 = {
            x: e.offsetX,
            y: e.offsetY
        }
        ctx.beginPath()
        ctx.arc(post1.x, post1.y, sz, 0, 2 * Math.PI)
        ctx.fillStyle = colorPaint
        ctx.fill()


        ctx.beginPath();
        ctx.moveTo(post1.x, post1.y);
        ctx.lineTo(post2.x, post2.y);
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = sz * 2
        ctx.stroke();

        post1.x = post2.x;
        post1.y = post2.y;
    }
})
//tha
canvas.addEventListener('mouseup', function(e) {
    isDrawing = false;
})
//doi mau
color.addEventListener('change', function(e) {
    colorPaint = e.target.value
})
//tay
eraser.addEventListener('click', function(e) {
    colorPaint = 'white'
})
//giam size
decrease.addEventListener('click', function(e) {
    if(sz > 5) {
        sz -= 5
        size.innerText = sz
    }
})
//tang size
crease.addEventListener('click', function(e) {
    if(sz < 35) {
        sz += 5
        size.innerText = sz
    }
})
//xoa tat ca
close.addEventListener('click', function(e) {
    let canvasSt = canvas.getClientRects()[0]
    ctx.clearRect(0, 0, 600, 600)
})

// save

save.addEventListener('click', function(e) {
    var output = canvas.toDataURL('img/jpg')
    save.setAttribute('href', output)
})

