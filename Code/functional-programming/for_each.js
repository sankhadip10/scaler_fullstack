const arr = ["1","2","3","4","5"]

function myForEach(arr,cb){
    for(let i = 0;i<arr.length;i++){
        cb(arr[i],i)
    }
}

// arr.forEach(function(value,ix){
//     console.log('=>Value is ',value,ix)
// })

// arr.forEach((value,ix)=>console.log('=>Value is ',value,ix)

myForEach(arr,function(value,ix){
    console.log('=>value is ',value,ix)
})


//when you are doing forEach function ,you can mutate that is not change