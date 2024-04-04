const numbers = [1,2,3,45,5];
const n = numbers.map((value, index, arr)=>{
    return value*2;
});
console.log(n);

const items = [
    {name : 'Bike', price : 100},
    {name : 'TV', price : 200},
    {name : 'Album', price : 10},
    {name : 'Book', price : 5},
    {name : 'Phone', price : 500},
    {name : 'Computer', price : 1000},
    {name : 'Keyboard', price : 25}
]

const mapItems = items.map((value)=>{
    return value.name;
})
console.log(mapItems);