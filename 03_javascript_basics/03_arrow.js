const linkedinUser ={
    name:'Huzaifa',
    email:'huzaifa@gmailcom',
    welcomeMessage: function () {
        console.log( `${this.name} Welcome to linkedin`);
        console.log(this);
    }
}
// linkedinUser.welcomeMessage()
// linkedinUser.name = 'Moavia';
// linkedinUser.welcomeMessage()

// console.log(this);

// function exploringThis(){
//     let user='huzaifa';
//     console.log(this.user);   
//     console.log(this);   
// }

// exploringThis()

// const exploringThis= function (){
//     let user='huzaifa';
//     console.log(this.user);   
// }

const exploringThis=  () => {
    let user='huzaifa';
    console.log(this);   
}

exploringThis()

// const addTwo =(num1,num2) =>{
//     return num1+num2
// }

// const addTwo =(num1,num2) =>  num1+num2
// const addTwo =(num1,num2) =>  (num1+num2)

const addTwo =(num1,num2) =>  ({user:'huzaifa'})

// console.log(addTwo(3,4));
