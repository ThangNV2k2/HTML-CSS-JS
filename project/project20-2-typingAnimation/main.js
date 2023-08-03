let ptext = document.querySelector('.typing-wrapper p')
let text = ptext.innerHTML
let index = 0
let check = true
setInterval(function () {
    if (check == true) {
        index++
        if (index > text.length)
            check = false
    }
    else {
        index--
        if (index < 0) {
            check = true
        }
    }

    ptext.innerHTML = text.substring(0, index)
}, 200)


