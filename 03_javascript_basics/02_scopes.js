//Global and local scope
let a=100
const b=200
var c=300

{
    let a=110
    console.log('let inner ' +a);
    
    const b=210
    console.log('const inner' +b);

    var c=310
    console.log('var inner ' +c);

}

console.log('let outer '+a);
console.log('const outer '+b);
console.log('var outer '+c);