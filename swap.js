function swap<U,T>(value1:U, value2:T):[T,U] {
    return [value2, value1];
}
console.log(swap("aziz", 23));
export {};

