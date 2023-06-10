// var args = process.argv.splice(2);

// console.log("Adding two numbers", add(parseInt(args[0]), parseInt(args[1])));


console.log("Hello World!");

function add(a, b) {
  return a + b;
}

// console.log(add); //function defination
// console.log(add());    //NAN :-no argument passed
console.log(add(2, 8));

console.log(process.argv)

let args = process.argv.slice(2);

console.log("Adding the numbers: ", add(parseInt(args[0]), parseInt(args[1])));