// Arrays are mutable
// typeof array = object
let a = [1,2,3,4]
console.log(a);
console.log(a.length);

a[0] = 5666;
console.log(a, typeof a);

// Array Methods
console.log(a.toString());
console.log(a.join(" and "));
console.log(a.pop()); //eliminate last element
console.log(a.push("Tejas"));
console.log(a);
console.log(a.shift());//eliminate first element
console.log(a);
console.log(a.unshift("Jack"));//Adds to first element
console.log(a);
delete a[3];
console.log(a);

