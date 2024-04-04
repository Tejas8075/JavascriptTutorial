const items = [
    {name : 'Bike', price : 100},
    {name : 'TV', price : 200},
    {name : 'Album', price : 10},
    {name : 'Book', price : 5},
    {name : 'Phone', price : 500},
    {name : 'Computer', price : 1000},
    {name : 'Keyboard', price : 25}
]

const findItems = items.find((value)=>{
    return value.price < 500;
})
console.log(findItems);

const a = [1,2,3,4,5];
const d = a.find((value)=>{
    return value < 3;
})
console.log(d);