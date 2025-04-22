const TWD =['Rick Grimes', 'Darrel Dickson', 'Carl Grimes'];
const TLOU =['Joel Miller', 'Elie Miller', 'Tommy Miller'];

// TWD.push(TLOU)
// console.log(TWD);
// console.log(TWD[3][1]);

// const heros = TWD.concat(TLOU);
// console.log(heros);

//spread operatoe
// const newHeros =[...TWD, ...TLOU];
// console.log(newHeros);

const arr= [1,2,4,[3,6,33],5,6,[55,6,9,[2,3]]];
const anotherArr = arr.flat(2);
// console.log(anotherArr);

// console.log(Array.isArray('Huzaifa'));
// console.log(Array.from('Huzaifa'));
// console.log(Array.from({name: 'Huzaifa'}));

const score1=100;
const score2=200;
const score3=1000;

console.log(Array.of(score1, score2, score3));