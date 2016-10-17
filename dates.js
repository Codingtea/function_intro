var isWeekday = function (day){

  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var dayToday = new Date();
  var getDay = weekDays[dayToday.getDay()];

  var sameWeekday = day === getDay;
  return sameWeekday
  }

  isWeekday("Wednesday");
  var angelo = isWeekday("Wednesday");
  console.log(angelo);


