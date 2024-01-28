// NaN : not a number

let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid input");
}
let sum = parseInt(a)+parseInt(b);
// console.log("The sum is " + sum);

//Error Handling
function main(){
    try {
        console.log("The sum is " + sum*x);
        return true;
    } catch (error) {
        console.log("An error occured");
        return false;
    }
    finally{
        console.log("hey");
    }

}

//finally : It is used to print a default statement inside function execution as function stops after reurn statement