document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const iframes = document.querySelectorAll(".slide iframe");

    function stopVideos() {
        iframes.forEach(iframe => {
            const src = iframe.src;
            iframe.src = "";
            iframe.src = src;
        });
    }

    function showSlides(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? "block" : "none";
        });
        
        dots.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === slideIndex) dot.classList.add("active");
        });
        
        stopVideos();
    }

    function changeSlide(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function setSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => setSlide(i));
    });

    showSlides(slideIndex);
});
