const items = [
    {name : 'Bike', price : 100},
    {name : 'TV', price : 200},
    {name : 'Album', price : 10},
    {name : 'Book', price : 5},
    {name : 'Phone', price : 500},
    {name : 'Computer', price : 1000},
    {name : 'Keyboard', price : 25}
];

const reduceItems = items.reduce((preval, value)=>{
    return value.price + preval;
}, 0);
console.log(reduceItems);

//Using forEach method
let sum = 0;
items.forEach((value)=>{
    sum += value.price;
})
console.log(sum);