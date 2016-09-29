var dayDetails= function (day)
{

  var isWeekend = day.startsWith('s');
  var isDay = day.endsWith('day');
  var length = day.length;

  console.log(isWeekend);
  console.log(isDay);
  console.log(length);
}

dayDetails('Monday');
dayDetails ('Decemeber');
dayDetails ('Sunday');
