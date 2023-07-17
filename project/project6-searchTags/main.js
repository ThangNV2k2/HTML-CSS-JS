var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('button')

var tags = ['Nodejs', 'Reactjs']

function render() {
    content.innerHTML = ''
    for(var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        content.innerHTML += `
                        <li>
                            ${tag}
                            <i class="fa-solid fa-xmark" onclick='remove(${i})'></i>
                        </li>
                            `
    }
    content.appendChild(input)
    input.focus()
}
render()

input.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})
function remove(i) {
    tags.splice(i, 1)
    render()
}
removeAll.addEventListener('click', function(e) {
    tags = []
    render()
})