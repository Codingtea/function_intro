var isTuesday = function () {

  var today = new Date ();
  var day = today.getDay();
  //check the day ????
  return day === 2;

//console.log (day);
};

//var d = new Date();
//var n = d.getDate();

console.log(isTuesday());


//const date = new Date('2010-04-01');
//var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'];

//return index between 0 and 6
//console.log(date.getDay());

//look up the week day text string from the Array
//console.log(weekDays[date.getDay()]);
