function slider(){

   let slide=document.getElementById("slide")
slide.innerHTML=null

let arr=["Slide1.png","Slide2.png","Slide3.png","Slide4.png","Slide5.png","Slide6.png","Slide7.png","Slide8.png","Slide9.png","Slide10.png","Slide11.png","Slide12.png","Slide13.png"]


let num=Math.floor( Math.random()*13)

let poster=arr[num]



let img=document.createElement("img")

img.src=poster

slide.append(img)

}

export default slider