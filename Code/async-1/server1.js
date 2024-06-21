const fs = require('fs')

const crypto = require('crypto')


process.env.UV_THREADPOOLSIZE = 10

setTimeout(()=>console.log('Inside SetTimeout'),0)
setImmediate(()=>console.log("Inside Set Immediate"))

console.log("Hello from top level code")


Promise.resolve().then(()=>console.log('Promise Resolved'))

fs.readFile('secret.txt','utf-8',function(){
    console.log('IO Polling Finished')

    const start = Date.now()
    crypto.pbkdf2('password','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 1 Hashed')
    })

    crypto.pbkdf2('password','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 2 Hashed')
    })
    crypto.pbkdf2('password','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 3 Hashed')
    })
    crypto.pbkdf2('password','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 4 Hashed')
    })


    //what if I increas one more
    crypto.pbkdf2('password','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 5 Hashed')
    })
})