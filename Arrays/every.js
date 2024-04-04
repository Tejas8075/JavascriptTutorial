const items = [
    {name : 'Bike', price : 10000},
    {name : 'TV', price : 20000},
    {name : 'Album', price : 1000},
    {name : 'Book', price : 500},
    {name : 'Phone', price : 50000},
    {name : 'Computer', price : 100000},
    {name : 'Keyboard', price : 2500}
]

const isEvery = items.some((value)=>{
    return value.price<=40;
})
console.log(isEvery);