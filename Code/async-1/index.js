// async function sayHello(){
//     return 'Hey from this function'
// }

// const result = sayHello()

// result.then((value)=>{
//     value.
// })

///Read 5 files
// const fs = require('fs/promises')

// // async function read(){
// //     // fs.readFile('one.js','utf-8')
// //     // fs.readFile('one.js','utf-8')
// //     // fs.readFile('one.js','utf-8')
// //     // fs.readFile('one.js','utf-8')
// //     // fs.readFile('one.js','utf-8')
// // }

// function resolveAfter(seconds){

// }

// const p=Promise.all([
//     await fs.readFile('one.js','utf-8'),
//     await fs.readFile('one.js','utf-8'),
//     await fs.readFile('one.js','utf-8'),
//     await fs.readFile('one.js','utf-8'),
//     await fs.readFile('one.js','utf-8')
// ])

// p.then((values)=>{
//     values[0]
// })

const fs = require('fs/promises')

function resolveAfter(seconds){
    return new Promise((res)=>{
        setTimeout(()=>res(), seconds*1000)
    })
}

function rejectsAfter(seconds){
    return new Promise((res,rej)=>{
        setTimeout(()=>rej(), seconds*1000)
    })
}

console.time('Promise start')

const p=Promise.any([
    // resolveAfter(2),
    // resolveAfter(5),
    // resolveAfter(5),
    // resolveAfter(5),
    // resolveAfter(5),
    // resolveAfter(8),
    // rejectsAfter(1),
    // rejectsAfter(3)
    
     
])

p.then((values)=>{
    console.log(`Promise resolved after . . .`)
    console.timeEnd('Promise start')
}).catch(()=>{
    console.log(`Promise Rejected after . . .`)
    console.timeEnd('Promise start')
})

