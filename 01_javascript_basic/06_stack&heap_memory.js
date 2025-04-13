// Stack(Primitive) and Heap(Non-primitive)

let name="huzaifa"
let newName=name;
newName = "muhammad"

console.log(name);
console.log(newName);


let profile={
    email:"muhammadhuzaifa@gmail.com",
    password:1234
}

let updatedProfile = profile;
updatedProfile.email="huzaifa@gmail.com"

console.log(profile);
console.log(updatedProfile);
