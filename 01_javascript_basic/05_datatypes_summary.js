// Primitve datatypes 
// String, Number, boolean, null, undefined, symbol, bigInt

let word= "huzaifa"
console.log(typeof word);

let num = 100.6;
console.log(typeof num);

let boolean = true;
console.log(boolean);

let empty = null;
console.log(typeof empty);

let notExist;
console.log(typeof notExist);

let id = Symbol(123);
console.log(id);
let anotherId = Symbol(123);
console.log(anotherId);
console.log(typeof id);
console.log(id == anotherId);

let bigNum= 252000000000000000000000000n;
console.log(bigNum);
console.log(typeof bigNum);

// Refernce (non promitive type)
// array, object, function.

let bros= ["Huzaifa","Muhammad","Hanzala","Moavia"];
console.log(typeof bros);

let obj={
    name:'huzaifa',
    age:22
} 
console.log(typeof obj);

let func= function mern(name) {
    console.log("hey " + name + " your good at mern stack!");
    console.log("hey " + name + " I like ur style!");
    console.log("hey " + name + " are  you good in javascript!");
    console.log("hey " + name + " what are your goals!");
    }


    console.log(typeof func)

    