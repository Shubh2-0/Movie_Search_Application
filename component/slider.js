function slider(){

   let slide=document.getElementById("slide")
slide.innerHTML=null

let arr2=["slider_images/Slide1.png","slider_images/Slide2.png","slider_images/Slide3.png","slider_images/Slide4.png","slider_images/Slide5.png","slider_images/Slide6.png","slider_images/Slide7.png","slider_images/Slide8.png","slider_images/Slide9.png","slider_images/Slide10.png","slider_images/Slide11.png","slider_images/Slide12.png","slider_images/Slide13.png"];

// let arr2=["https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/327474399_2458166661002204_3456931140616213573_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=x5DaWfllbswAX8ShEgE&_nc_ht=scontent.fbho3-1.fna&oh=00_AfDfzrOC_EH1yeu6RUzlQ26WYC3c4UMgIJTVwE3I6yxBcg&oe=63DC014B","https://www.facebook.com/photo/?fbid=116337848026314&set=pob.100089502985491","https://www.facebook.com/photo?fbid=116337391359693&set=pob.100089502985491","https://www.facebook.com/photo?fbid=116337401359692&set=pob.100089502985491","https://www.facebook.com/photo/?fbid=116337644693001&set=pob.100089502985491","https://www.facebook.com/photo/?fbid=116337601359672&set=pob.100089502985491","https://www.facebook.com/photo/?fbid=116337584693007&set=pob.100089502985491","https://www.facebook.com/photo/?fbid=116337521359680&set=pob.100089502985491","https://www.facebook.com/photo?fbid=116337498026349&set=pob.100089502985491","https://www.facebook.com/photo?fbid=116337464693019&set=pob.100089502985491","https://www.facebook.com/photo?fbid=116337421359690&set=pob.100089502985491"]



let num=Math.floor( Math.random()*arr2.length)

let poster=arr2[num]

// console.log(num)

let img=document.createElement("img")

img.src=poster

slide.append(img)

}

export default slider