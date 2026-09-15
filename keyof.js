"use strict";
function getkey(obj, key) {
    return obj[key];
}
const obj1 = getkey({
    "aziz": 23,
    "age": 1,
    "class": 1
}, "class");
console.log(obj1);
