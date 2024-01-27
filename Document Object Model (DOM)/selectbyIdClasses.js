console.log("Helo world");
// let b = document.getElementsByClassName("box");
// console.log(b);

// b[2].style.backgroundColor = "red";

// document.getElementById("des").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "red"; //used for selecting 1st element

// Gives collection of elements
// console.log(document.querySelectorAll(".box"));
// output : [div.box, div#des.box, div.box, div.box, div.box]
// 0
// : 
// div.box
// 1
// : 
// div#des.box
// 2
// : 
// div.box
// 3
// : 
// div.box
// 4
// : 
// div.box
// length
// : 
// 5

// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "green";
// });

console.log(document.getElementsByTagName("div")); //Gives all nodelist and all tags

//matches
//closest
let e = document.getElementsByTagName("div")
console.log(e[3].closest(".html"));
console.log(e[4].closest(".container"));
// elemA.contains(elemB)
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(e[4]));
console.log(document.querySelector(".container").contains(e[9]));
console.log(document.querySelector(".container").contains(console.log(document.querySelector("body"))));