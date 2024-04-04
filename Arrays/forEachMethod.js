// console.log("Hello World");
const numbers = [1,2,3,4,5];
numbers.forEach((element,index,arr) => {
    console.log(element, index, arr);
});

//Sum of numbers in array
let s = 0;
numbers.forEach(sum);
function sum(elements){
    s+=elements;
}
console.log(s);

//Apperance of same letters in array



const items = [
    {name : 'Bike', price : 100},
    {name : 'TV', price : 200},
    {name : 'Album', price : 10},
    {name : 'Book', price : 5},
    {name : 'Phone', price : 500},
    {name : 'Computer', price : 1000},
    {name : 'Keyboard', price : 25}
]

items.forEach((value, index, arr)=>{
    console.log(value.price);
})