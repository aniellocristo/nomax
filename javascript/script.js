$( document ).ready(function() {

//Dropdown toggle functions

  $('#menu-pull').click(function(){
      $('.container').slideToggle('slow');
  });

  $("#res").click(function(){
      $(".dropdown-selection", this).slideToggle('slow');
      $(".down-arrow", this).toggleClass('flipped');
  });

  $("#comm").click(function(){
      $(".dropdown-selection", this).slideToggle('slow');
      $(".down-arrow", this).toggleClass('flipped');
  });

  $("#indu").click(function(){
      $(".dropdown-selection", this).slideToggle('slow');
      $(".down-arrow", this).toggleClass('flipped');
  });

//Arrow rotationg fucntions

$(".down-arrow").toggleClass('flip');

//Slideshow

  $('.flexslider').flexslider({
    animation: "slide"
  });

});
