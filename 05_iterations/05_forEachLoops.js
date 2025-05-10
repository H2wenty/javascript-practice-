const languages =['js','py','Java','sql']

// languages.forEach( function (value) {
//     console.log(value);
// })

// languages.forEach(  (item)=> {
//     console.log(item);
// })

// function code(val1) {
//     console.log(val1);
// }

// languages.forEach(code)

// languages.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const mylanguages=[
    {
        languageName:'Javascript',
        fileName:'js'
    },
    {
        languageName:'Python',
        fileName:'py'
    },
    {
        languageName:'Sturcture Query Language',
        fileName:'sql'
    }
]

mylanguages.forEach((item)=>{
    console.log(`${item.languageName} file extention is ${item.fileName}`);
    
})