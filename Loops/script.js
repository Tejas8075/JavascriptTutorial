let a = 1;
for(let i=0;i<100;i++){
    console.log(a+i);
}

// for-in loop
let obj = {
    "name" : "Tejas",
    "role" : "Programmer",
    "company" : "Tejas pvt lmt"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// forof - used for iterating in data structures
for (const c of "harry") {
    console.log(c);
}