// console.log("Hello World");

// const getData = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

//GET, POST , etc. in Fetch API

const getData = async () => {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
        // .then(response => response.json())
        // .then(json => console.log(json))
    console.log(data);
    // return 455;
}

const main = async () => {

    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load data");

    let data = await getData();
    console.log(data);
    console.log("process data");
}

main();

// data.then((v) => {
//     console.log(data);
//     console.log("process data");

// })


