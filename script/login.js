document.querySelector('form').addEventListener('submit', function () {
  rest(event)
})

function rest(event) {
  event.preventDefault()

  let email = localStorage.getItem('email')
  let password = localStorage.getItem('password')

  let useremail = document.getElementById('email').value
  let userpassword = document.getElementById('pass').value

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
