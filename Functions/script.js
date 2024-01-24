function nice(name){
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
}
nice("Tejas");
nice("Shubham");

function sum(a, b){
    // console.log(a+b);
    return a+b; // return = does not print values but just returns the value
}
let result = sum(3,6);
console.log("The result of the above numbers is " + result);

// Arrow Function - Function is used as a variable.
const func1 = (x)=>{
    console.log("I am an arrow function " + x);
}
func1(34);

const func2 = ()=>{
    console.log("Hey");
}
func2();