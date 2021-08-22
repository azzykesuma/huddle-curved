// grabbing all id
let email = document.getElementById('email')
let button = document.getElementById('button')
let success = document.getElementById('success')
let error = document.getElementById('error')

button.addEventListener('click',(e) => {
    e.preventDefault();
    if(email.value === '') {
        error.style.display = 'block'
    } else {
        error.style.display = 'none'
        success.style.display = 'block'
    }
})