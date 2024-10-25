/////////////
///MAIN PAGE SLIDER
////////////////


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

const mainPageForm = $('#mainpage-form')
const projLayoutCol = $('.project-layout-col')
const projLayoutColWidth = projLayoutCol.outerWidth(true)
console.log(projLayoutColWidth)

if (projLayoutColWidth > 950) {
  mainPageForm.css("width", `calc(100% - ${projLayoutColWidth}px + 132px)`);
} else {
  mainPageForm.css("width", `calc(100% - ${projLayoutColWidth}px - 2px)`);
}





//navigation on scroll
$(window).on('scroll', function() {
  const scrolled = $(window).scrollTop();
  const navOnScroll = $('.nav-scroll');
  const scrollTrigger = 200; // Set your scroll trigger value 

  if (scrolled > scrollTrigger) {
      navOnScroll.css('transform', 'translateY(0px)'); 
  } else {
      navOnScroll.css('transform', 'translateY(-100%)'); 
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

  