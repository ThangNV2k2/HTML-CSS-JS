const btnSuccess = document.querySelector('.box.box1')
const btnWarning = document.querySelector('.box.box2')
const btnError = document.querySelector('.box.box3')

btnSuccess.addEventListener('click', function() {
    createAlert('success')
})
btnWarning.addEventListener('click', function() {
    createAlert('warning')
})
btnError.addEventListener('click', function() {
    createAlert('error')
})


function createAlert(status) {
    var addAleart = document.createElement('div')
    addAleart.classList.add('alert')
    addAleart.classList.add(status)
    if(status === 'success') {
        addAleart.innerHTML= `
        <i class="fa-solid fa-check"></i>
        <span class="message">This is a success message!</span>
        <div class="countdown"></div>
        `
    } else if(status === 'warning') {
        addAleart.innerHTML= `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="message">This is a warning message!</span>
        <div class="countdown"></div>
        `
    } else {
        addAleart.innerHTML= `
        <i class="fa-solid fa-xmark"></i>
        <span class="message">This is a error message!</span>
        <div class="countdown"></div>
        `
    }
    
    var alerts = document.querySelector('.alerts')
    alerts.appendChild(addAleart)
    setTimeout(function() {
        addAleart.style.animation = 'slide_hide 2s ease forwards'
    }, 3600)
    setTimeout(function() {
        addAleart.remove()
    }, 6000)
}