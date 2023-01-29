function slider(){

   let slide=document.getElementById("slide")
slide.innerHTML=null

// let arr3=["slider_images/Slide1.png","slider_images/Slide2.png","slider_images/Slide3.png","slider_images/Slide4.png","slider_images/Slide5.png","slider_images/Slide6.png","slider_images/Slide7.png","slider_images/Slide8.png","slider_images/Slide9.png","slider_images/Slide10.png","slider_images/Slide11.png","slider_images/Slide12.png","slider_images/Slide13.png"];
let arr2 = ['https://drive.google.com/uc?export=view&id=15nR172CCX7C_-jwEXc_BhdzJPkLdXaGJ',
'https://drive.google.com/uc?export=view&id=157SvOTCcVRVU4Wawux8nm155NXwnShG_',
'https://drive.google.com/uc?export=view&id=19tQ1i7RiTVi_ebVWYhfWclXx3rU9Gq1X',
'https://drive.google.com/uc?export=view&id=1IB28XPHnwkDDFxVL6oZPKk41ITDlpZIA',
'https://drive.google.com/uc?export=view&id=1Nr0Ge9c5TfYTPLaJecbRNOjjMGuT0nDE',
'https://drive.google.com/uc?export=view&id=1SMEWJFc41egh9-PiI-uqkA4kL9kifiIi',
'https://drive.google.com/uc?export=view&id=1usWaZ1z780AAFpajIhAGW1tQSBjiC1AU',
'https://drive.google.com/uc?export=view&id=1y1bBqv5ZHcDIA_eW16n4hqIlTocjK1Ho',
'https://drive.google.com/uc?export=view&id=1eroZ3frS7D9Ik8Rdy3ItWL6HOrLh_0vr',
'https://drive.google.com/uc?export=view&id=1LiNAyd09uEUV5wCzTTFimIJe2zkqcoPf',
'https://drive.google.com/uc?export=view&id=1UsBW4cYihc7HWKr1VjZ8cUSiB74vdGbp',
'https://drive.google.com/uc?export=view&id=17cjiqTeERtEvcLSUroIg5TXLWPTe_TTp',
]

/*

https://drive.google.com/file/d/1UsBW4cYihc7HWKr1VjZ8cUSiB74vdGbp/view?usp=sharing
https://drive.google.com/file/d/17cjiqTeERtEvcLSUroIg5TXLWPTe_TTp/view?usp=sharing
https://drive.google.com/file/d/17cjiqTeERtEvcLSUroIg5TXLWPTe_TTp/view?usp=sharing
https://drive.google.com/file/d/1SMEWJFc41egh9-PiI-uqkA4kL9kifiIi/view?usp=sharing
https://drive.google.com/file/d/15nR172CCX7C_-jwEXc_BhdzJPkLdXaGJ/view?usp=sharing
https://drive.google.com/file/d/157SvOTCcVRVU4Wawux8nm155NXwnShG_/view?usp=sharing
https://drive.google.com/file/d/19tQ1i7RiTVi_ebVWYhfWclXx3rU9Gq1X/view?usp=sharing
https://drive.google.com/file/d/1IB28XPHnwkDDFxVL6oZPKk41ITDlpZIA/view?usp=sharing
https://drive.google.com/file/d/1Nr0Ge9c5TfYTPLaJecbRNOjjMGuT0nDE/view?usp=sharing
https://drive.google.com/file/d/1SMEWJFc41egh9-PiI-uqkA4kL9kifiIi/view?usp=sharing
https://drive.google.com/file/d/1usWaZ1z780AAFpajIhAGW1tQSBjiC1AU/view?usp=sharing
https://drive.google.com/file/d/1y1bBqv5ZHcDIA_eW16n4hqIlTocjK1Ho/view?usp=sharing
https://drive.google.com/file/d/1eroZ3frS7D9Ik8Rdy3ItWL6HOrLh_0vr/view?usp=sharing
https://drive.google.com/file/d/1LiNAyd09uEUV5wCzTTFimIJe2zkqcoPf/view?usp=sharing

*/


let num=Math.floor( Math.random()*arr2.length)

let poster=arr2[num]

console.log(num)

let img=document.createElement("img")

img.src=poster

slide.append(img)

}

export default slider