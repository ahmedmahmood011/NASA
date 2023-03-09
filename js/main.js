// show info the image in gallery
let infoBtns = document.querySelectorAll(".gallery .content .info .btn-info");
let information = document.querySelectorAll(".gallery .content .info .info");
infoBtns.forEach((info, i)=>{
  info.addEventListener("click",()=>{
    information[i].classList.toggle("onRead");
  })
})

// veiw image from gallery
let veiwImage = document.querySelector(".gallery .veiw-image");
let img = document.querySelector(".gallery .veiw-image .image img");
let imgs = document.querySelectorAll(".gallery .content .info img");
imgs.forEach((image)=>{
  image.onclick = ()=>{
    img.src = image.src ;
    veiwImage.style.display = "flex"
  }
})

// button close image
let closeBtn = document.querySelector(".gallery .veiw-image .image .close");
closeBtn.addEventListener("click", ()=>{
  veiwImage.style.display = "none";
})