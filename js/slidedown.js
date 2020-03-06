$(document).ready(function(){
  $('#nav li ul').hide();
  $('#nav li').hover(function(){
    $(this).children('ul:not(:animated)').slideDown('fast');
  }, function(){
    $(this).children('ul').slideUp('fast');    
  });


});
