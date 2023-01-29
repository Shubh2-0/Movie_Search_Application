

document.querySelector("form").addEventListener("submit",function(){
user(event)
})


function user(event){
    event.preventDefault();
let pass0=document.getElementById("pass0").value
let pass1=document.getElementById("pass1").value


if(pass0==pass1){
    success()
}
else{
swal("Opps!", "Something Went Wrong !", "warning");
}

}


function success(){
let email=document.getElementById("email").value
let pass=document.getElementById("pass0").value
localStorage.setItem("email",email)
localStorage.setItem("password",pass)
swal("Congratulations!", "Signup Successfull", "success");
setTimeout(redirect,2000)
}

function redirect(){
    window.location.href="login.html"
}