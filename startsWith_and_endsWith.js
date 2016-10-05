var  isFromBellville = function (regNum){

  var isFromBellville =  regNum.startsWith("CY");

  console.log (isFromBellville);
  return  isFromBellville;
}

isFromBellville('CJ 98912');


var  isFromPaarl = function (regNum){

  var isFromPaarl =  regNum.startsWith("CJ");

  console.log (isFromPaarl);
  return isFromPaarl;
}

isFromPaarl('CJ 98912');

var isFromCapeTown = function (regNum){

  var isFromCapeTown =  regNum.startsWith("CA");

  console.log (isFromCapeTown);
  return isFromCapeTown ;
}

isFromCapeTown('CA 98912');


var isFromGauteng = function (regNum){

  var isFromGauteng =  regNum.startsWith("DR");
var isFromGauteng =  regNum.endsWith("GP");
  console.log (isFromGauteng);
  return isFromGauteng ;
}

isFromGauteng('DR 12 TY GP');

var isFromLimpopo = function (regNum){

  var isFromLimpopo =  regNum.startsWith("DRT");
var isFromLimpopo =  regNum.endsWith("L");
  console.log (isFromLimpopo);
  return isFromLimpopo ;
}

isFromLimpopo('DRT 122 L');
