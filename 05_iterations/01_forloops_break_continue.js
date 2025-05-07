//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==1) {
       let sent =`Huzaifa is the No#${i} developer`;
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Multiplication Table of = ${i}`)
    for (let l = 1; l <= 10; l++) {
        // console.log(`${i}*${l}=${i*l}`)
    }
}

let array=['Huzaifa','Muhammad','Hanzala','Moavia']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}

//break and continue

// for (let i = 0; i < 20; i++) {
//     if (i==5) {
//         console.log('detected 5')
//         break
//     }
//     console.log(i);
//     } 

for (let i = 0; i < 20; i++) {
    if (i==5) {
        console.log('detected 5')
        continue
    }
    console.log(i);
    } 