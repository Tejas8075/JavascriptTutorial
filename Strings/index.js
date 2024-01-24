//Strings are IMMUTABLE

// Accessing each character in string
let a = "Tejas";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

//Length
console.log(a.length)

//Tempate literals
let name = "Tejas";
let friend = "Jacob";

console.log("My name is " + name + " and my friend's name is " + friend);

console.log(`My name is ${name} and his friend's name is ${friend}`);

//Methods and properties of String

//Length = property so no ()
// toUpperCase(), toLowerCase() = Functions

let b = "Aaron";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(a.length);

//Slicing
//First index included but Second index not included/excluded.
let c = "KedarKe";
console.log(c.slice(1,4));
console.log(c.slice(1));

//Replace(only first appearnce replaced)
console.log(c.replace("Ke", "66"));

//Concatenation
console.log(c.concat(b, "nice"));

//Trim - Remove white spaces
let d = " Hello World ";
let e = d.trim();
console.log(e);

console.log(b.charAt(0));
console.log(b.indexOf("A"));