//Global and local scope
let a=100
const b=200
var c=300

{
    let a=110
    // console.log('let inner ' +a);
    
    const b=210
    // console.log('const inner' +b);

    var c=310
    // console.log('var inner ' +c);

}

// console.log('let outer '+a);
// console.log('const outer '+b);
// console.log('var outer '+c);

//Scope level
function one(){
    const username='Huzaifa'
    
    function two(){
        const website='youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const fName='Muhammad'
    if(fName==='Muhammad'){
        const lName='Huzaifa'
        console.log(fName+' '+lName)
    }
    // console.log(lName);
}
// console.log(fName);

//++++++++++++++++++++++++ Mini Hoisting +++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num + 1
}

console.log(addTwo())
const addTwo = function addTwo(num) {
    return num + 2
} 