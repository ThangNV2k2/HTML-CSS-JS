var openModal = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconclose = document.querySelector('.modal__header i')
var btnclose = document.querySelector('.modal__footer button')

function toggleModal(e) {
    modal.classList.toggle('hide')
}
openModal.addEventListener('click', toggleModal)
iconclose.addEventListener('click', toggleModal)
btnclose.addEventListener('click', toggleModal)
