let arr = [1, 13, 5, 7, 11];

//Map - Used to Create a new array using the first array 

//classic method to make new array
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

//map method
let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr);

//Filter - Used to filter an array with values that passes a test
const greaterThanSeven = newArr.filter((e)=>{
    if(e>7){
        return true;
    }
    return false;
})
console.log(greaterThanSeven);

//Reduce - Used to reduce an array to a single value
// o/p : 720
let a2 = [1, 2, 3, 4, 5, 6]
const red = a2.reduce((a,b)=>{
    return a*b;
})
console.log(red);

//Array.from - Used to create an array from any other object
console.log(Array.from("Tejas"));
