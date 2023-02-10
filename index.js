const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const gallery = document.getElementById("gallery");

const marginList = ["0px","-1200px","-2400px", "-3600px", "-4800px", "-6000px"]
var currentImage = 0;

arrowLeft.addEventListener("click", ()=>{
    if (currentImage > 0){
        currentImage--;
        gallery.style.marginLeft = marginList[currentImage];
    }  
})

arrowRight.addEventListener("click", ()=>{
    if (currentImage < 5){
        currentImage++;
        gallery.style.marginLeft = marginList[currentImage];
    }
})