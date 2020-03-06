$(document).ready(function(){
  $('.content:not(.active)').hide();


  $('.title').click(function(e){
    var index = $(this).closest('div').index();

    $(this).addClass('active');
    $(this).closest('div').siblings().find('a').removeClass('active');

    $('.content').hide().eq(index).show();
  });
});
