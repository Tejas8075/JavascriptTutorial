let button1 = document.getElementById("btn");

button1.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>I was clicked</b>"
})

button1.addEventListener("contextmenu", ()=>{
    alert("hey");
})