console.log("Hello World");

// Conditionals
let age = 45;
if(age>18){
    console.log("You can drive");
}
else if(age==18){
    console.log("You can have a learner's license");
}
else{
    console.log("You cannot drive");
}

//Operators
let grace = 4;
console.log(age+grace);
console.log(age-grace);
console.log(age/grace); //Quotient
console.log(age%grace); //Reamider
console.log(age*grace);
console.log(age**grace); //Raise to or expnential
 
//Ternary operator
let v = age>grace ?(age-grace):(grace-age);
console.log(v);

