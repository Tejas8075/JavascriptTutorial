/* Calculate factorial using reduce method and using for loops */

let a = [1, 2, 3, 4, 5, 6];
//Using reduce method

const fact = a.reduce((a,b)=>{
    return a*b;
})
console.log(fact);


