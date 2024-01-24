/* Create a faulty calculator using JavaScript

This faulty calculator does the folowing:
1. It takes two numbers as input fro the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operations 10% of times
(RANDOM NUMBER GENERATOR)
*/

// To use ADDITION when using prompt command always use Number(prompt()) command as prompt by default takes the variables as strings. So result is 2+2 = 22 instead of 4.

let a = Number(prompt("Enter your first number"));
let b = Number(prompt("Enter your second number"));
console.log(typeof a, typeof b);
let c = prompt("Enter the operation initial letter");
if(Math.random()<0.1){
    if(c == "A"){
        console.log(a-b);
    }
    else if(c == "S"){
        console.log(a/b);
    }
    else if(c == "M"){
        console.log(a+b);
    }
    else if(c == "D"){
        console.log(a**b);
    }
    else{
        console.log("Wrong Input");
    }
}
else{
    if(c == "A"){
        console.log(a+b);
    }
    else if(c == "S"){
        console.log(a-b);
    }
    else if(c == "M"){
        console.log(a*b);
    }
    else if(c == "D"){
        console.log(a/b);
    }
    else{
        console.log("Wrong Input");
    }
}