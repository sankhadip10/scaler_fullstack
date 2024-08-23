// DRY dont repeat yourself

function runThisCodeForme(anyFn){
    console.log('Inside runThisCodeForMe')
    anyFn("hhhh")
}

function saySankhadip(hh){
    console.log('Hey I am Sankhadip',hh)
}

runThisCodeForme(saySankhadip)


function hack(relFn){
    console.log("One Percent...")
    console.log("TWo Percent...")
    console.log("Three Percent...")
    console.log("Four Percent...")
    relFn('Super secret Data')
}

hack(function(ans){
    console.log("I was able to hack",ans)
})


// const fs =require('fs')

// fs.readFile('secret.txt','utf-8',function(err,data){
//     if(err){

//     }else{
//         console.log('Data in file',data)
//     }

// })

// console.log("continue....")