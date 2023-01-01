document.querySelector('form').addEventListener('submit', function () {
  rest(event)
})

function rest(event) {
  event.preventDefault()

  let password = localStorage.getItem('email')
  let email = localStorage.getItem('password')

  let useremail = document.getElementById('pass').value
  let userpassword = document.getElementById('email').value

  if (password == userpassword && email == useremail) {
    login()
  } else if (useremail == '' || userpassword == '') {
    swal('', 'Empty field', 'warning')
  } else {
    swal('', 'please provide right credentials', 'warning')
  }
}

function login() {
  swal('', 'Login Successfull', 'success')

  setTimeout(redirect, 2000)
}

function redirect() {
  window.location.href = 'index.html'
}
