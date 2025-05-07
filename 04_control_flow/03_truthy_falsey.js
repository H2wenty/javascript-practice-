// truthy and falsey 
const userEmail =''

if (userEmail) {
    console.log(true);
}
else{
    console.log(false);
}

// falsey values
//false, 0, -0, "", null, undefined, Nan, BigInt 0n

//truthy  values
//true, 1, "0", " ", [], {}, function()

const email=[];
if (email.length === 0) {
    console.log('array is empty');
}

const obj={};
if (Object.keys(obj).length===0) {
    console.log('Object is empty')
}