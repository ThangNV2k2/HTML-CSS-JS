var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message

}
function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmpty(inputList) {
    inputList.forEach(input => {
        var check = input.value.trim()
        if(!check) {
            showError(input, 'Input is not empty')
        }
        else {
            showSuccess(input)
        }
    });
}
function checkEmail(input) {
    const regaxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if(regaxEmail.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, 'Email Invalid!')
    }
}
function confirmPass(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    } else {
        showSuccess(input2)
    }
}
function checkPass(input) {
    if(input.value.length < 6) {
        showError(input, 'Password must be at least 6 characters')
    } else {
        showSuccess()
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    checkEmpty([username, email, password, confirmPassword])
    checkEmail(email)
    checkPass(password)
    confirmPass(password, confirmPassword)
})
