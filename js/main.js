/////////////
///hamburger
////////////////
$(document).ready(function() {
  $('#menuToggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.navigation').css({
        'transform': 'translateX(0)' // Show the navigation
      });
      $('body').addClass('no-scroll'); // Disable scrolling
    } else {
      $('.navigation').css({
        'transform': 'translateX(-100%)' // Hide the navigation
      });
      $('body').removeClass('no-scroll'); // Enable scrolling
    }
  });
});




//set height of hero section to 100vh - navigation height to fit the 100vh screen,  and the same for projects inner page
const $navigation = $(".header");  
const $heroSection = $(".hero"); 


const navHeight = $navigation.outerHeight(); 

$heroSection.css("height", `calc(100vh - ${navHeight}px)`);


//scroldownd icon click to move to next section









//navigation on scroll
$(window).on('scroll', function() {
  const scrolled = $(window).scrollTop();
  const navOnScroll = $('.nav-scroll');
  const scrollTrigger = 200; // Set your scroll trigger value 

  if (scrolled > scrollTrigger) {
      navOnScroll.css({
          'transform': 'translateY(0px)',
        
      });
  } else {
      navOnScroll.css({
          'transform': 'translateY(-100%)',
        
      });
  }
});
//active lang

$('.nav-lang a').on('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Remove the 'active' class from all <a> elements
  $('.nav-lang a').removeClass('active');

  // Add the 'active' class to the clicked <a> element
  $(this).addClass('active');
});

  