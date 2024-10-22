/////////////
///MAIN PAGE SLIDER
////////////////
var owl = $('#hero-carousel');
owl.owlCarousel({
    loop: true,
    margin: 10,
    dots: false, 
    nav: false, 
    responsive: {
        0: { items: 1 },
    }
});

// Custom Navigation Buttons
$('.custom-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.custom-next').click(function() {
    owl.trigger('next.owl.carousel');
});

// Custom Dot Click Event
$('.dot').click(function() {
    var index = $(this).data('dot');  
    owl.trigger('to.owl.carousel', [index, 300]); // Navigate to the corresponding slide
});

// Update Active Dot on Carousel Change
owl.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index;  // 

    
    currentIndex = currentIndex - event.relatedTarget._clones.length / 2;


    if (currentIndex >= event.item.count) {
      currentIndex = 0;
    }
    if (currentIndex < 0) {
      currentIndex = event.item.count - 1;
    }

    // Remove active class from all dots
    $('.dot').removeClass('active-dot');

    // Add active class to the correct dot based on the currentIndex
    $('.dot[data-dot="' + currentIndex + '"]').addClass('active-dot');
});

// Initialize first active dot
$('.dot[data-dot="0"]').addClass('active-dot');

//set height of hero section to 100vh - navigation height to fit the 100vh screen,  and the same for projects inner page
const $navigation = $(".header");  
const $heroSection = $(".hero"); 


const navHeight = $navigation.outerHeight(); 

$heroSection.css("height", `calc(100vh - ${navHeight}px)`);


//scroldownd icon click to move to next section

$('#scrolldown').on('click', function(){
    $('html,body').animate({
        scrollTop:$('.projects').offset().top
    },1000)
})




//navigation workaround to animate transition




let scrollTrigger = 190;
let lastScrollTop = 0;
let lastScrollTime = 0;
let scrollSpeedThreshold = 100; // Set a scroll speed threshold (pixels/ms)

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  let currentTime = new Date().getTime();
  let scrollSpeed = Math.abs(scrollTop - lastScrollTop) / (currentTime - lastScrollTime); // Calculate scroll speed

  lastScrollTop = scrollTop;
  lastScrollTime = currentTime;

  // Check if user scrolls fast (higher than the threshold)
  if (scrollSpeed > scrollSpeedThreshold) {
    // Disable transitions by adding the class 'no-transition'
    $('.navigation, .nav-scroll').addClass('no-transition');
  } else {
    // Enable transitions by removing the class 'no-transition'
    $('.navigation, .nav-scroll').removeClass('no-transition');
  }

  // Toggle navigation based on scroll position
  if (scrollTop > scrollTrigger) {
    $('.navigation').first().addClass('hidden');
    $('.nav-scroll').addClass('visible');
  } else {
    $('.navigation').first().removeClass('hidden');
    $('.nav-scroll').removeClass('visible');
  }
});