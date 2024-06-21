const fs = require('fs/promises')


const data = fs.readFile('secret.txt','utf-8')


data.
    then((fileData)=>{
        console.log('Reading Done',fileData)
    }).
    catch((reason)=>{
        console.log('kuch toh hua',reason)
    }).
    finally(()=>{
        console.log('Donno why I am running')
    })