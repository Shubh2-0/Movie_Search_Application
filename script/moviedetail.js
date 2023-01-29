

import navbar from "../component/navbar.js"

document.getElementById("nav").innerHTML=navbar()







let data=JSON.parse(localStorage.getItem("info"))

let name=data.fullTitle  || data.Title





async function  getdata(){
let response=await fetch(`https://www.omdbapi.com/?apikey=960d6929&t=${name}&plot=full`)
let details= await response.json()

console.log(details)
append(details)

}

getdata()


function append(obj){
   let parent=document.getElementById("container")
   let child=document.createElement("div")




child.id="details"

   child.innerHTML=`

   <div><h2>Name</h2> ${obj.Title}</div>

    <div><h2>Director</h2> ${obj.Director}</div>


    <div><h2>Actors</h2>${obj.Actors}</div>
    

    <div><h2>Genres</h2>${obj.Genre}</div>


    <div><h2>Language</h2>${obj.Language}</div>


    <div id="poster"><img src="${obj.Poster}" alt=""></div>


    <div><h2>Country</h2>${obj.Country}</div>


    <div id="summry" ><h2>Summary</h2>${obj.Plot}</div>


    <div><h2>Awards winning</h2>${obj.Awards}</div>


    <div><h2>Box-Office Collection</h2>${obj.BoxOffice}</div>


    <div><h2>Released Date</h2>${obj.Released}</div>


    <div><h2>Duration</h2> ${obj.Runtime}</div>


    <div><h2>Writer</h2>${obj.Writer}</div>


    <div><h2>IMDB - Rating</h2>${obj.imdbRating}</div>


    <div><h2>IMBD - Votes</h2>${obj.imdbVotes}</div>

    <div><h2>imdb-ID</h2>${obj.imdbID}</div>
   `


      let ratingss=obj.Ratings


for(let el of ratingss){
   let grand=document.createElement('div')
grand.innerHTML=`<div><h2>${el.Source}</h2>${el.Value}</div}`
child.append(grand)
}
   parent.append(child)
}


document.getElementById("third").addEventListener("click",function(){

    window.location.href="Signup.html"
})
