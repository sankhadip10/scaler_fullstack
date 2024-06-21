const fs = require('fs')



setTimeout(()=>console.log('Inside SetTimeout'),0)
setImmediate(()=>console.log("Inside Set Immediate"))

console.log("Hello from top level code")

fs.readFile('secret.txt','utf-8',function(){
    console.log('IO Polling Finished')
})