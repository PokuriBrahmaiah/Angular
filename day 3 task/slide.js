let slide=document.getElementById("slidesshow");
let index=0;
let slideimages=["earthspace.jpg","skyspace.jpg","spacemarvel.jpg","spaceship.jpg","spacewonder.jpg","universe.jpg"];
setInterval(function(){
    slidesshow.src=slideimages[index];
    index=(index+1) % slideimages.length;
},2000);