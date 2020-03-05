$(document).ready(function(){
  $('#nav li ul').hide();
  $('#nav li').hover(function(){
    $(this).find('ul:not(:animated)').slideDown('fast');
  }, function(){
    $(this).find('ul').slideUp('fast');    
  });


});
