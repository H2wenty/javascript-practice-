// While loop
let i=0;
while ( i<=10) {
    // console.log(i);
    i++
}

let myArray =['muhammad','hanzala','moavia'];
let arr=0;

while (arr<myArray.length) {
    // console.log(`My brother name is ${myArray[arr]}`);
    arr++

}

let index=1;
while (index<=10) {
    console.log(`multiplication table of ${index}`);
    let num=1
    while (num<=10) {
        console.log(`${index} * ${num} = ${index*num}`);
        num++
    }
        index++

}

// do while loop
let score=1
do {
    console.log(score);
    score++
} while (score<=10);

let num1=1
do {
    console.log(`multiplication table of ${num1}`);
    let num2=1;
    do {
         console.log(`${num1} * ${num2} = ${num1*num2}`);
         num2++
    } while (num2<=10);
    num1++
} while (num1<=10);