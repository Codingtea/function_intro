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


/*DATES:

Using the Javascript Date object to write the functions below.

This code contains some of the building logic you need for the functions.

const date = new Date('2010-04-01');
var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'];

//return index between 0 and 6
console.log(date.getDay());

//look up the week day text string from the Array
console.log(weekDays[date.getDay()]);
Write a function called isWeekday find out if the parameter passed in is a weekDay.

Write a function called yearsAgo that takes in a year and return how many years ago that was. Use the Date objects getFullYear function.

Write a function called dayToday to find the day today. This function takes no parameters;

Write a function called getDay which can find out which day of the week a specific date was.

Write a function called sameWeekday that takes in two dates and check if both dates have the same weekday. For example if both dates are a Monday the function should return true.*
