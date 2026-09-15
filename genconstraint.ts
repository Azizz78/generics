 function getlength<T extends {length:number}>(data:T){ // here you have already defined the types of length
  return data.length

 }
 console.log(getlength("qsdfsf"))



 export{
 }