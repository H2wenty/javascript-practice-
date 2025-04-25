// const fb = new Object();
// console.log(fb);

const fbUser ={}

fbUser.id = '001fbhuzaifa';
fbUser.email='huzaifa@fb.com'
// console.log(fbUser);

const xUser = {
    email:'moavia@xco',
    userName:{
        fullname:{
            firstName:'Muhammad',
            lastName:'Huzaifa'
        }
    }
}

// console.log(xUser.userName.fullname.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e",6:"f"};

// const combinedObj = {obj1,obj2,obj3};
// const combinedObj = Object.assign({},obj1,obj2,obj3)
const combinedObj = {...obj1,...obj2,...obj3}
// console.log(combinedObj);

const user=[
    {
        id:1,
        email:"huzaifa@spaceX.com"
    },
    {
        id:2,
        email:"moavia@spaceX.com"
    }
]

// console.log(user[1].email);
// console.log(fbUser);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
// console.log(fbUser.hasOwnProperty('email'));


//Object de-structure

const ytChannel={
    email:'muhammadhuzaifa@gmail.com',
    ytName:'Vosprin',
    channelOwner:'Muhammad Huzaifa'
}

const {channelOwner:owner} = ytChannel
// console.log(channelOwner);
console.log(owner);

// Json API

// {
//     'name':'huzaifa',
//     'email':'h@gmail.com'
// }

// [
//     {},
//     {},
//     {}
// ]