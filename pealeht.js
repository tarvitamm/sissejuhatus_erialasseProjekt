var slideAjaluguIndex = 1;
showAjaluguSlides(slideAjaluguIndex);

function plusAjaluguSlides(n) {
    showAjaluguSlides(slideAjaluguIndex += n);
}

function currentAjaluguSlide(n) {
    showAjaluguSlides(slideAjaluguIndex = n);
}

function showAjaluguSlides(n) {
    var i;
    var slides = document.getElementsByClassName("ajalugu");
    var dots = document.getElementsByClassName("dotAjalugu");
    
    if (n > slides.length) {slideAjaluguIndex = 1}
    if (n < 1) {slideAjaluguIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideAjaluguIndex-1].style.display = "block";
    dots[slideAjaluguIndex-1].className += " active";
}

var reegliSlideIndex = 1;
showReeglidSlides(reegliSlideIndex);

function plusReegliSlides(n) {
    showReeglidSlides(reegliSlideIndex += n);
}

function currentReegliSlide(n) {
    showReeglidSlides(reegliSlideIndex = n);
}

function showReeglidSlides(n) {
    var i;
    var slides = document.getElementsByClassName("reeglid");
    var dots = document.getElementsByClassName("dotReeglid");
    
    if (n > slides.length) {reegliSlideIndex = 1}
    if (n < 1) {reegliSlideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[reegliSlideIndex-1].style.display = "block";
    dots[reegliSlideIndex-1].className += " active";
}