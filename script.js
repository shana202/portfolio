
// modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

//Carousal
var slideIndices = {
    'carousel1': 1,
    'carousel2': 1,
}
//Initialize carousels
showSlides(1, 'carousel1');
showSlides(1, 'carousel2');

function plusSlides(n, carouselId) {
    showSlides(slideIndices[carouselId] += n, carouselId);
}

function currentSlide(n, carouselId) {
    showSlides(slideIndices[carouselId] = n, carouselId);
}

function showSlides(n, carouselId) {
    var i;
    var carousel = document.getElementById(carouselId);
    var slides = carousel.getElementsByClassName("carousel-slide");
    var dots = carousel.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndices[carouselId] = 1}    
    if (n < 1) {slideIndices[carouselId] = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndices[carouselId]-1].style.display = "block";  
    dots[slideIndices[carouselId]-1].className += " active";
}
//Progress Bar

function move() {
    var elem = document.getElementById("myBar");   
    var width = 10;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
//tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }