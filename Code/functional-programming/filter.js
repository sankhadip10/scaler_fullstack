arr =["1","2","3","4","5","2","2"]

const newCopyOfArr = arr.filter(function(val){
    // return true
    if (val==="2") return true

    return false
})

console.log(newCopyOfArr)