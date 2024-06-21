const nums=[1,2,3,4,5,6,7,8,9,10]

const sum = nums.reduce(function(prev,current){
    return current + prev
},0)

console.log(sum)

//*****************************************custom reduce ***********************************************************
function customreduce(arr,cb,init){
    let prev = init
    for(let i=0;i<arr.length;i++){
        prev = cb(prev,arr[i])
    }
    return prev
}

const s = customreduce(nums,(prev,c)=>(prev+c),10)
console.log(s)