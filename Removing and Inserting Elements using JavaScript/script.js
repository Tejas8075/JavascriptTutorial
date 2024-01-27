console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);

// tagName = only element
// nodeName = all nodes or elements. Example : text node, comment node, etc.

console.log(document.querySelector(".box").textContent);

console.log(document.querySelector(".box").hidden = true);

console.log(document.querySelector(".box"));

document.querySelector(".box").innerHTML = "Hey I am Tejas";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display: grid"));
console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").attributes);

//Insertion
//prepend, append, before, after, replaceWith
// let div = document.createElement("div");
// div.innerHTML = "Hey <b>Tejas</b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b> Hey hello </b>")
