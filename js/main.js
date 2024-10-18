const $carousel = $(".carousel");
const $slides = $(".carousel-slide");
const $nextButton = $(".nextslide");
const $prevButton = $(".prevslide");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = $slides.length - 1;
        } else if (index >= $slides.length) {
            currentIndex = 0;
        }

        $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    }

    if ($nextButton.length && $prevButton.length) {
        $nextButton.click(function() {
            currentIndex++;
            showSlide(currentIndex);
        });

        $prevButton.click(function() {
            currentIndex--;
            showSlide(currentIndex);
        });
    }

 const autoAdvanceInterval = 3000; 

    setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, autoAdvanceInterval);

//set height of hero section to 100vh - navigation height to fit the 100vh screen
const $navigation = $(".header");  
const $heroSection = $(".hero"); 

const navHeight = $navigation.outerHeight(); 

$heroSection.css("height", `calc(100vh - ${navHeight}px)`);

// main page carousel

