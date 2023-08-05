let imgs = document.querySelectorAll('.zoomer img')
let mirror = document.querySelector('.zoomer .zoom')

imgs.forEach(img => {
    img.addEventListener('mousemove', function(e) {
        mirror.classList.remove('hide')
        mirror.style.top = `${e.clientY}px`
        mirror.style.left = `${e.clientX}px`
    
        mirror.style.backgroundSize = `800px 800px`
        const sourceImg = e.target.getAttribute('src')
        mirror.style.backgroundImage = `url(${sourceImg})`
        let percentWidth = (e.offsetX / this.offsetWidth) * 100
        let percentHeight = (e.offsetY / this.offsetHeight) * 100
        mirror.style.backgroundPosition = `${percentWidth}% ${percentHeight}%`
        img.addEventListener('mouseleave', function(e) {
            mirror.classList.add('hide')
        })
    })
})