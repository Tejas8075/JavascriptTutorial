// Variables

// let is globally scoped 
// i.e. let a = 10;
// {
//     let a = 11;
// }
// output : 10, 11

// but var b = 32;
// {
//     var r = 4;
// }
// output : 32, 32

const PI = 3.142;
let a = 45;
a = a+1;
let b = 67;
let c = "Ttring";
console.log(a,b,c, PI);
console.log(typeof a, typeof b, typeof c, typeof PI);

// Data types
// typeof is object
// because it is previously written like that in the language
// See Stackoverflow
let m = 22;
let n = 4.55;
let o = "Tejas";
let p = true;
const q = undefined;
let r = null;
console.log(m,n,o,p,q,r);
console.log(typeof m, typeof n, typeof o, typeof p, typeof q, typeof r);

//Objects
// keys : value

let x = {
    "name" : "Tejas", 
    "job code" : 5000,
    "is_handsome" : false
}
console.log(x);
x.salary  = 850000;
console.log(x);
x.salary  = 950000;
console.log(x);

//Practic Set
// 1
let f = "Red"+10;
// let g = f+10;
console.log(f);

// 2.
console.log(typeof f);

// 3.
const h = {
    name : "youndu"

}
h.l = 23;
console.log(h);

// 4.
h.u = "Hey";
console.log(h);

