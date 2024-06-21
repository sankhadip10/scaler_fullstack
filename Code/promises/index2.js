/**
 * 1.Read a file secret.txt
 * 2.copy the file from secret .txt to file.txt
 * 3.Delete the file secret.tx
 * 4.Write 'DONE' to log.txt
 */

const fs = require('fs/promises')
//Promise chaining

//Callback Hell
// fs.readFile('secret.txt')
//     .then((secret) => {
//         fs.writeFile('file.txt', secret)
//             .then(() => {
//                 fs.unlink('secret.txt')
//                     .then(() => {
//                         fs.writeFile('log.txt', 'DONE')
//                             .then(() => {
//                                 console.log('Everything is DONE')
//                             }).catch
//                     }).catch
//             }).catch
//     }).catch



// fs.readFile('secret.txt')
//     .then(secret=>fs.writeFile('file.txt',secret))
//     // .then(secret=>write('file.txt',secret))
//     .then(()=>fs.unlink('secret.txt'))
//     .then(()=>fs.writeFile('log.txt','DONE'))
//     .then(()=>console.log('DONE'))
//     .catch(err=>console.log(err))
//     .finally(()=>console.log('ALL COOL'))



// function write(path,data){
//     return fs.writeFile(path,data)
// }


// async function doTasks(){
//     try{
//         const secret = await fs.readFile('secret.txt','utf-8')
//         await fs.writeFile('file.txt',secret)
//         await fs.unlink('secret.txt')
//         await fs.writeFile('log.txt','DONE')
//     }catch(err){
//         console.log(err)
//     }finally{
//         console.log('Huuuuu')
//     }

// }
// doTasks()

//promisified version of SetTimeout
function waitFor(seconds){
    return new Promise((res,rej) => {
        setTimeout(()=>res(),seconds*1000)
    })
}

async function execute(){
    console.log('Inside Execute')
    console.log('Starting Timer')
    await waitFor(10)
    console.log('Timer Ended')
}

execute()