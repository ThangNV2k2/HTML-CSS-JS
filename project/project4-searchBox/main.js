var searchBtn = document.querySelector('.search-box__btn')

searchBtn.addEventListener('click', function(e) {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})