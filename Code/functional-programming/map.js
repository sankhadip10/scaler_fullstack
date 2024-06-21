const arr = ["1","2","3","4","5"]

const newcopy = arr.map(function(value){
    return value +"ghost"
})

// const newcopy = arr.map((value)=>value +"ghost")

console.log(newcopy)



function myMap(arr,fn){
    let res = []
    for (let i=0;i<arr.length;i++){
        res.push(fn(arr[i]))
    }
    return res;
}
// const n =myMap(arr,function(val){
//     return val+"ffff"
// })




console.log(n)