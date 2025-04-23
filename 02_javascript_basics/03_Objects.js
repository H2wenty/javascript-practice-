//OBJECTS

//Singleton
//Object.create

//Object literals

const mySym = Symbol("key1");

const obj={
    name:'Huzaifa',
    [mySym]:'mykey1',
    'full name':'Muhammad Huzaifa',
    email:'muhammadhuzaifa200005@gmail.com',
    location:'Karachi',
    isLoggedin:true
}

// console.log(obj.name);
// console.log(obj['full name']);
// console.log(obj[mySym]);
// console.log(typeof obj[mySym]);

obj.email= 'huzaifa@google.com'

// Object.freeze(obj);
obj.email= 'huzaifa@x.com'
// console.log(obj);

obj.greeting = function(){
    console.log('hello user')
}

console.log(obj.greeting);
console.log(obj.greeting());

obj.greeting2 = function(){
    console.log(`hello user ${this["full name"]}` )
}
console.log(obj.greeting2());