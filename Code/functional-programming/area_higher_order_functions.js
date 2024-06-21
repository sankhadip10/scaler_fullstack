let myRadiusArea = [2,3,4,5,8]

function circleArea(radius){
    return Math.PI * radius * radius
}

function circleCircumference(radius){
    return 2 * Math.PI * radius
}

function circleDiameter(radius){
    return 2 * radius
}

function calulate(radiusArr,logic){
    let res = []
    for(let i=0;i<radiusArr.length;i++){
        res.push(logic(radiusArr[i]))
    }
    return res
}


let finalArea = calulate(myRadiusArea,circleArea)
console.log("This is area array =>",finalArea)


let finalCircumferences = calulate(myRadiusArea,circleCircumference)
console.log("This is circumference array =>",finalCircumferences)


let finalDiameter = calulate(myRadiusArea,circleDiameter)
console.log("This is DiameterArray =>",finalDiameter)