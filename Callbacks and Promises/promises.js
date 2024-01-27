let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number generated");
    }
    setTimeout(()=>{
        console.log("Hey");
        resolve("Tejas");
    }, 1000);
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})