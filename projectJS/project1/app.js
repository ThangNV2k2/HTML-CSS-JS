const buttons = document.querySelectorAll("button")
let count = 0
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if(button.classList.contains('card--lower')) {
            count--
        }
        else if(button.classList.contains('card--add')) {
            count++
        }
        const counter = document.querySelector('.counter')
        if(count >= 0) {
            counter.textContent = count
            counter.style.color = 'green'
        }
        else {
            count = 0
            counter.textContent = count
            counter.style.color = 'red'
        }
    })
})