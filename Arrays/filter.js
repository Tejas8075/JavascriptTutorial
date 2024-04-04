const items = [
    {name : 'Bike', price : 100},
    {name : 'TV', price : 200},
    {name : 'Album', price : 10},
    {name : 'Book', price : 5},
    {name : 'Phone', price : 500},
    {name : 'Computer', price : 1000},
    {name : 'Keyboard', price : 25}
]

const filteredItems = items.filter((v)=>{
    return v.price>=100;
})
console.log(filteredItems);

const a = [1,2,3,4,5,6];
const d = a.filter((value)=>{
    return value<=4;
})
console.log(d);