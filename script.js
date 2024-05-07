const image = document.getElementById("image");
const switchBtn = document.getElementById("switchBtn");


const originalImage = "smiley.png";
const alternateImage = "sad.png";


let currentImage = "original";


function switchImage() {
    if (currentImage === "original") {
      image.src = alternateImage;
      currentImage = "alternate";
      switchBtn.textContent = "Switch Back";
      document.body.style.backgroundColor = "red"; 
    } else {
      image.src = originalImage;
      currentImage = "original";
      switchBtn.textContent = "Switch Image";
      document.body.style.backgroundColor = "green"; 
    }
  }


switchBtn.addEventListener("click", switchImage);