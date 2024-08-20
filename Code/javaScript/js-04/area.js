let radius =[2,44,5,6,7]

function cal(radius,calulate){
    let res = []
    for(let i=0;i<radius.length;i++){
        const ans = calulate(radius[i])
        res.push(ans)
    }
    return res
}


function area(r){
    return 3.14 * r *r
}

function circumference(r){
    return 3.14 * 2 *r
}

function diameter(r){
    return 2 * r
}


const result = cal(radius,area)
console.log(result)