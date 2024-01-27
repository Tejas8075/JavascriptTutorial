// Given the 5 boxes, assign a random color and a random background to each box using DoOM concepts

// console.log(document.getElementById("1"));

let boxes = document.getElementsByClassName("box");

let getRandomColor = ()=> {
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})