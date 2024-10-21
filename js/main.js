
///main page carousel
var owl = $('#hero-carousel');
owl.owlCarousel({
    loop: true,
    margin: 10,
    dots: false, // Ensure default dots are disabled
    nav: false, // Disable default navigation
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
    var index = $(this).data('dot');  // Get the custom dot's index
    owl.trigger('to.owl.carousel', [index, 300]); // Navigate to the corresponding slide
});

// Update Active Dot on Carousel Change
owl.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index;  // Get current active item index

    // If loop is enabled, adjust the index to avoid clone conflicts
    currentIndex = currentIndex - event.relatedTarget._clones.length / 2;

    // Handle out-of-bounds cases
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

//set height of hero section to 100vh - navigation height to fit the 100vh screen
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




  
