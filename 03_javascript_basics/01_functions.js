//Functions

function name() {
    console.log('h');
    console.log('u')
    console.log('z')
    console.log('a')
    console.log('i')
    console.log('f')
    console.log('a')
}

// name()

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addNumbers(3,7);

function addNumbers(num1,num2){
    // console.log(num1+num2); will return undefined
    
    // let result = num1+num2 
    // return result;  will return the value
    
    return num1+num2; //short version
}
const result = addNumbers(3,7);
// console.log(result);

 function userLogin(name = 'moavia'){
    if (!name) {
        console.log('please enter correct name');
        return
    }
    return `Welcome ${name}`
 }
// console.log(userLogin('Huzaifa'))
// console.log(userLogin())

function addTocartPrice(v1,v2,...num) {
    return  num;
}
// console.log(addTocartPrice(100,3000,580));


