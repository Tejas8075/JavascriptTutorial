/* Create a Business name Generator by combining list of adjectives, shop name and another word.

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub 
*/

let a = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let s = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let w = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

// let first;
// let second;
// let third;

// if(Math.random()<0.33){
//     first = a.a1;
//     // console.log(first);
// }
// else if(Math.random()<0.66&&Math.random()>=0.33){
//     first = a.a2;
// }
// else if(Math.random()<1&&Math.random()>=0.66){
//     first = a.a3;
// }
// if(Math.random()<0.33){
//     second = s.s1;
//     // console.log(first);
// }
// else if(Math.random()<0.66&&Math.random()>=0.33){
//     second = s.s2;
// }
// else if(Math.random()<1&&Math.random()>=0.66){
//     second = s.s3;
// }
// if(Math.random()<0.33){
//     third = w.w1;
//     // console.log(first);
// }
// else if(Math.random()<0.66&&Math.random()>=0.33){
//     third = w.w2;
// }
// else if(Math.random()<1&&Math.random()>=0.66){
//     third = w.w3;
// }

// console.log(`Your Business name generated is ${first} ${second} ${third}`);


// Efficient way
/*
Initially the code makes 3 objects
Then the keys of objects shoud be Number
The variables ran1, ran2 and ran3 generates random numbers from (0 to 2)+1
And finally prints the names randomly
*/

let ran1 = Math.floor(Math.random() * 3) + 1;
let ran2 = Math.floor(Math.random() * 3) + 1;
let ran3 = Math.floor(Math.random() * 3) + 1;

console.log(a[ran1] + " " + s[ran2] + " " + w[ran3]);