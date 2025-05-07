//if
const temperature = 46;
// if (temperature<50) {
//     console.log(`${temperature} temperature is less than 50`);
// }

// else{
//     console.log('Temperature is greater than 50');
    
// }


// < less than, > greater than, <= less & equal to, >= greater & equal to, == exact equal, != not equal
// === exact equal + type equal, !== not equal + not type equal


const score =200;
// if (score>100) {
//     const power= 'super speed';
//     console.log(`your power is ${power}`);
// }
// console.log(`your power is ${power}`)

const balance = 1000;
// if(balance>500)console.log('good');

// if (balance<500) {
//     console.log('less than 500');
// }

// else if (balance<750) {
//     console.log('less than 750');
// }

// else if(balance<900){
//     console.log('less than 900'); 
// }
// else{
//     console.log('less than 1200');
// }

const userLoggedIn=true;
const debitCard=true;
const loginFromGoogle=false;
const loginFromEmail=true;

//logical operator
if (userLoggedIn && debitCard && 2==3) {
    console.log('user is Logged In');
};

if(loginFromEmail || loginFromGoogle){
    console.log('user is Logged In');

}

//Nullish Coalescing Operator
let val1;
// val1= 5??10;
// val1=null??10;
// val1=undefined??15;
val1= null??10??20;

console.log(val1);

//Ternary Operator

//condition ? true:false
const chai= 120;
chai <=100 ? console.log('chai price is 100'):console.log('chai price is above 100')
