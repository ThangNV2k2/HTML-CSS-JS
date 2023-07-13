var images = document.querySelectorAll('.image img')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery__inner img')
var close = document.querySelector('.close')
var prev = document.querySelector('.left')
var next = document.querySelector('.right')

var currentIndex = 0
function showArrowPrev() {
    if(currentIndex == 0) {
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide')
    }
}
function showArrowNext() {
    if(currentIndex == 7) {
        next.classList.add('hide')
    }
    else {
        next.classList.remove('hide')
    }
}
function show() {
    showArrowPrev()
    showArrowNext()
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index
        show()
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

prev.addEventListener('click', function() {
    currentIndex--
    show()
})

next.addEventListener('click', function() {
    currentIndex++
    show()
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27)
        gallery.classList.remove('show')
})