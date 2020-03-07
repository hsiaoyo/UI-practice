var durations = ['time-xs', 'time-sm', 'time-md', 'time-lg'];
//亂數調整
function getRandomIntInclusive(min, max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
$(document).ready(function(){
  $('.circle').each(function(index, circle){
    var durationIndex = getRandomIntInclusive(0, 3);
    var durationClass = durations[durationIndex];
    $(circle).addClass(durationClass);

    if (Math.random()>0.5){
      $(circle).addClass('reverse');
    }
  });
});
