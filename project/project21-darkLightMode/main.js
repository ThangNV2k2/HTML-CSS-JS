let toggle = document.querySelector('.toggle-wrapper label')
let body = document.querySelector('body')

function init() {
    let mode = localStorage.getItem('mode')
    body.setAttribute('class', mode)
}
toggle.addEventListener('click', function() {
    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ? "dark" : ""
    localStorage.setItem('mode', mode)
})
init()