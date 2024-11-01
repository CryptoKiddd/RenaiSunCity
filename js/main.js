/////////////
///MAIN PAGE SLIDER
////////////////


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
          'pointer-events': 'enable' // Enable pointer events when visible
      });
  } else {
      navOnScroll.css({
          'transform': 'translateY(-100%)',
          'pointer-events': 'none' // Disable pointer events when hidden
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

  