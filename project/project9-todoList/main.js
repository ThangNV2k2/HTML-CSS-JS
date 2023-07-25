const input = document.querySelector('form input')
const form = document.querySelector('form')
const todos = document.querySelector('ul')
const remove = document.querySelector('.remove')
init()
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let value = input.value.trim()
    if(value) {
        addTodoElement({
            text: value,
            status: ""
        })
        saveTodoList()
    }
    input.value = ""
    input.focus()
})

function addTodoElement(todo) {
    var li = document.createElement('li')
    li.innerHTML = `
    <span>${todo.text}</span>
    <i class="fa-solid fa-trash"></i>
    `
    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }
    li.addEventListener('click', function() {
        this.classList.toggle('completed')
        saveTodoList()
    })
    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove()
        saveTodoList()
    })
    todos.appendChild(li)
}

function saveTodoList() {
    var todoList = document.querySelectorAll('li')
    var storage = []
    todoList.forEach((todo) => {
        var text = todo.querySelector('span').innerText
        var status = todo.getAttribute('class')
        storage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(storage))
}

function init() {
    var todoList = localStorage.getItem('todoList')
    var data = JSON.parse(todoList)
    data.forEach(item => {
        addTodoElement(item)
    })
}
remove.addEventListener('click', function() {
    const items = todos.querySelectorAll('li')
    items.forEach((item) => {
        item.remove()
    })
    saveTodoList()
})