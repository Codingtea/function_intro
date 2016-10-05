var isFrom = function(regNum,location) {

var isFromPaarl = regNum.startsWith(location);

   var  isFromBellville = regNum.startsWith(location);
     var isFromCapeTown = regNum.startsWith(location);

   return isFromPaarl;
   return isFromCapeTown;
   return isFromBellville;



};


console.log (isFrom('CJ 98912', 'CJ'));
console.log (isFrom('CY 874324', 'CY'));
console.log (isFrom('CY 874324', 'CA'));
