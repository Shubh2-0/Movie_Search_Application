

import nav from "../component/navbar.js"

document.getElementById("navsearch").innerHTML=nav()


import ser from "../component/slider.js"


setInterval(ser,2000)









document.getElementById("search").addEventListener("input",function(){

    debounce(data,2000)
})
let id;
function debounce(func , delay){

if(id){
    clearTimeout(id)
}

id=setTimeout(function(){
    func()
}, delay)

}





async function data(){

document.getElementById("loader").style.display="block"  

let value1=document.getElementById("search").value

let response = await fetch(`https://www.omdbapi.com/?apikey=960d6929&s=${value1}`)

let d= await response.json()

show(d.Search)

}


function show(arr){

  document.getElementById("loader").style.display="none"  


for(let el of arr){
let parent=document.getElementById("container")

let child=document.createElement("div")
child.addEventListener("click",function(){
store(el)

})

child.innerHTML=`
<img src="${el.Poster}" alt="">
    <h2>${el.Title}</h2>
<h4>Year${el.Year}</h4>
`
parent.append(child)

}

}


function store(el){
localStorage.setItem("info",JSON.stringify(el))
window.location.href="moviedetail.html"

}



document.getElementById("third").addEventListener("click",function(){

    window.location.href="Signup.html"
})






