//IIFE : make a immediate function and invoke it immediately
const sleep = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// invoke function
main = async() => {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
}
main();

//Destructuring
// let [x, y] =[1, 5];
// console.log(x, y);

let [x, y, ...rest] =[1, 5, 7, 8, 9, 10];
console.log(x, y, rest);

const obj = {
    a: "red",
    b: "blue",
    c: "green"
}
let {a, b} = obj;
console.log(a, b);

//Spread operator : ... opens the whole object or array
let f = (a, b, c) => {
    return a+b+c;
}
let arr = [1,2,3,5];
// console.log(f(arr[0], arr[1], arr[2]));
// Same as above
console.log(f(...arr));

// Local, Global and Block Scopes
// inside function : local
// outside function : global
// inside block : block

