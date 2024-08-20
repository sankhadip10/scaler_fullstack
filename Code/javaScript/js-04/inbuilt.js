const arr=['😂','😂','💕','😁','😍']


arr.forEach(function(value){
    console.log('=>Value is',value)
})


//cusom for Each


function myforEach(arr,cb){
    for(let i=0;i<arr.length;i++){
        cb(arr[i],i)
    }
}

myforEach(arr,function(value,i){
    console.log('=>Value is',value,i)
})

//=======================================================
const newCopy=arr.map(function(value){
    return value +'😍'
})

console.log(newCopy)


function myMapp(arr,fn){
    let result = []

    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]))
    }
    return result
}


const n = myMapp(arr,function(val){
    return val +'💀'
})

console.log(n)


//+++++++++++++++++++++++++++


const newCopyArr = arr.filter(function(val){
    if (val=='💕')return true
    return false
})

console.log(newCopyArr)
//////////////////////////////

//reduce

const nums = [1,2,3,4,5,6,7,8,9,10]


const sum = nums.reduce(function(prev,curr){
    return curr+prev
},0)

console.log(sum)



function reduce(arr,cb,init){
    let prev = init
    for(let i=0;i<arr.length;i++){
        prev = cb(prev,arr[i])

    }
    return prev
}


const s = reduce(nums,(prev,c)=>prev+c,0)

console.log(s)