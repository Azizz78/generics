function printvalue <T>(value:T):T{ // bassically the T is the parameter which can handle multiple type at once
  return value
}


console.log(printvalue("aziz"))
console.log(printvalue(323))
console.log(printvalue(false))    // here alll of them work witout giving the acutall type of the arguement in parameter