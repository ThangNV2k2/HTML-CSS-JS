let targets = document.querySelectorAll('.target')
let boxes = document.querySelectorAll('.box')

let currentTarget = null

targets.forEach(target => {
    target.addEventListener('dragstart', function(e) {
        this.classList.add('dragging')
        currentTarget = this
    })
    target.addEventListener('dragend', function(e) {
        this.classList.remove('dragging')
    })
})

boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault()
    })

    box.addEventListener('drop', function(e) {
        if(!box.querySelector('.target')) {
            this.appendChild(currentTarget)
        }
    })
})