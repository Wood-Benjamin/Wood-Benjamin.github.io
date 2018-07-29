$(function() {
var allPanels = $('.accordionPanel').hide();
    
  $('.accordion').click(function() {
    allPanels.slideUp();
    $(this).next().slideDown();
    return false;
  });

});