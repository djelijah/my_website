let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function setSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const audios = document.querySelectorAll(".slide-audio");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Stop all audio and hide all slides
    slides.forEach(slide => slide.style.display = "none");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Show the current slide and play its audio
    slides[slideIndex - 1].style.display = "block";
    audios[slideIndex - 1].play();

    // Highlight the current dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex - 1].classList.add("active");
}
