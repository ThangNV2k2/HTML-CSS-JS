let animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimation(element) {
    let rect = element.getClientRects()[0]
    let heightScreen = window.innerHeight

    //check xem element có năm trong màn hình hay không
    if(!(rect.bottom < 0 ||rect.top > heightScreen)) {
        //trong màn hình
        element.classList.add('start')
    } else {
        element.classList.remove('start')
    }
}

function checkAnimation() {
    animationElements.forEach((el) => {
        toggleAnimation(el)
    })
}

window.onscroll = checkAnimation
checkAnimation()
